import { useState, useEffect, useRef } from "react";
import {
  onSnapshot,
  updateDoc,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { db, auth } from "@/lib/firebase/init";
import Image from "next/image";

type AlbumPhoto = {
  url: string;
  public_id: string;
  title: string;
  description_id: string;
  description_en: string;
  tags: string[];
  uploadedBy: string;
  uploadedAt: number;
};

function withAuth<P extends object>(Component: React.ComponentType<P>) {
  return function ProtectedRoute(props: P) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user && user.uid === process.env.NEXT_PUBLIC_ADMIN_UID) {
          setIsAuthenticated(true);
        } else {
          router.push("/login");
        }
        setLoading(false);
      });
      return () => unsubscribe();
    }, [router]);

    if (loading) return <p>Loading...</p>;
    if (!isAuthenticated) return null;

    return <Component {...props} />;
  };
}

function FormDeskripsi() {
  // set up photo
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [descriptionID, setDescriptionId] = useState("");
  const [descriptionEN, setDescriptionEn] = useState("");
  const [tags, setTags] = useState("");
  const [updateTarget, setUpdateTarget] = useState<string | null>(null);
  const [editingPhoto, setEditingPhoto] = useState<AlbumPhoto | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [editPreviewUrl, setEditPreviewUrl] = useState<string | null>(null);
  const [album, setAlbum] = useState<AlbumPhoto[]>([]);
  const [albumId] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage, setPhotosPerPage] = useState(10);
  // upload foto api
  const getToken = async () => {
    const user = auth.currentUser;
    if (!user) throw new Error("Not logged in");
    return await user.getIdToken();
  };

  useEffect(() => {
    const albumRef = doc(db, "albums", albumId);
    const unsub = onSnapshot(albumRef, (docSnap) => {
      if (docSnap.exists()) setAlbum(docSnap.data().photos || []);
      else setAlbum([]);
    });
    return () => unsub();
  }, [albumId, db]);

  // Cleanup preview URLs when component unmounts or preview changes
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
      if (editPreviewUrl) {
        URL.revokeObjectURL(editPreviewUrl);
      }
    };
  }, [previewUrl, editPreviewUrl]);

  // Open edit modal with pre-populated data
  const handleEditPhoto = (photo: AlbumPhoto) => {
    setEditingPhoto(photo);
    setUpdateTarget(photo.public_id);
    setTitle(photo.title);
    setDescriptionId(photo.description_id);
    setDescriptionEn(photo.description_en);
    setTags(photo.tags.join(", "));
    setShowEditModal(true);
  };

  // Close edit modal and reset form
  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEditingPhoto(null);
    setUpdateTarget(null);
    setFile(null);
    setTitle("");
    setDescriptionId("");
    setDescriptionEn("");
    setTags("");
    setEditPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Search and pagination logic
  const filteredPhotos = album.filter(photo => 
    photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    photo.description_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    photo.description_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
    photo.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  const totalPages = Math.ceil(filteredPhotos.length / photosPerPage);
  const startIndex = (currentPage - 1) * photosPerPage;
  const endIndex = startIndex + photosPerPage;
  const currentPhotos = filteredPhotos.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of gallery section
    const galleryElement = document.getElementById('gallery-section');
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle photos per page change
  const handlePhotosPerPageChange = (newPhotosPerPage: number) => {
    setPhotosPerPage(newPhotosPerPage);
    setCurrentPage(1); // Reset to first page
    // Scroll to top of gallery section
    const galleryElement = document.getElementById('gallery-section');
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle search
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Open upload modal
  const handleOpenUploadModal = () => {
    setShowUploadModal(true);
    setUpdateTarget(null);
    setFile(null);
    setTitle("");
    setDescriptionId("");
    setDescriptionEn("");
    setTags("");
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Close upload modal
  const handleCloseUploadModal = () => {
    setShowUploadModal(false);
    setFile(null);
    setTitle("");
    setDescriptionId("");
    setDescriptionEn("");
    setTags("");
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Handle file selection with preview
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    
    if (selectedFile) {
      // Create preview URL
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  };

  // Handle file selection for edit modal with preview
  const handleEditFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    
    if (selectedFile) {
      // Create preview URL
      const url = URL.createObjectURL(selectedFile);
      setEditPreviewUrl(url);
    } else {
      setEditPreviewUrl(null);
    }
  };

  // Upload atau Update Foto
  const handleUploadOrUpdate = async () => {
    if (!file && !updateTarget) return; // Require file for new uploads
    const token = await getToken();

    const albumRef = doc(db, "albums", albumId);
    const albumSnap = await getDoc(albumRef);

    let newPhoto: AlbumPhoto;

    if (updateTarget && !file) {
      // Update metadata only (no new file)
      newPhoto = {
        ...editingPhoto!,
        title,
        description_id: descriptionID,
        description_en: descriptionEN,
        tags: tags
          .split(",")
          .map((t) => t.trim())
          .filter((t) => t !== ""),
      };
    } else if (file) {
      // Upload new file (for new uploads or file updates)
      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      return new Promise<void>((resolve, reject) => {
        reader.onloadend = async () => {
          try {
            const res = await fetch("/api/cloudinary", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({ file: reader.result, folder: "albums" }),
            });
            const data = await res.json();

            newPhoto = {
              url: data.secure_url,
              public_id: data.public_id,
              title,
              description_id: descriptionID,
              description_en: descriptionEN,
              tags: tags
                .split(",")
                .map((t) => t.trim())
                .filter((t) => t !== ""),
              uploadedBy: auth.currentUser?.uid || "unknown",
              uploadedAt: Date.now(),
            };

            await processPhotoUpdate(newPhoto, albumRef, albumSnap, token);
            resolve();
          } catch (error) {
            reject(error);
          }
        };
      });
    } else {
      return;
    }

    await processPhotoUpdate(newPhoto, albumRef, albumSnap, token);
  };

  // Process photo update (common logic for both cases)
  const processPhotoUpdate = async (
    newPhoto: AlbumPhoto,
    albumRef: any,
    albumSnap: any,
    token: string
  ) => {
    let updatedPhotos: AlbumPhoto[];
    
    if (albumSnap.exists()) {
      if (updateTarget) {
        // Replace existing photo
        updatedPhotos = albumSnap
          .data()
          .photos.map((p: AlbumPhoto) =>
            p.public_id === updateTarget ? newPhoto : p
          );

        // Delete old image from Cloudinary if we uploaded a new one
        if (file && editingPhoto) {
          await fetch("/api/cloudinary", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ public_id: updateTarget }),
          });
        }
      } else {
        // Add new photo
        updatedPhotos = [...albumSnap.data().photos, newPhoto];
      }
      await updateDoc(albumRef, { photos: updatedPhotos });
    } else {
      await setDoc(albumRef, { photos: [newPhoto] });
    }

    // Reset form and close modal
    if (updateTarget) {
      handleCloseEditModal();
    } else {
      handleCloseUploadModal();
    }
    
    // Reset to first page if current page would be empty
    if (currentPage > Math.ceil((album.length - 1) / photosPerPage)) {
      setCurrentPage(1);
    }
  };
  const handleDelete = async (public_id: string) => {
    const token = await getToken();
    await fetch("/api/cloudinary", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ public_id }),
    });

    const albumRef = doc(db, "albums", albumId);
    await updateDoc(albumRef, {
      photos: album.filter((p) => p.public_id !== public_id),
    });
    
    // Reset to first page if current page would be empty
    if (currentPage > Math.ceil((album.length - 1) / photosPerPage)) {
      setCurrentPage(1);
    }
  };

  // Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login"); // setelah logout kembali ke login
    } catch (error) {
      console.error("Gagal logout:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Gallery Admin</h1>
              <p className="text-sm text-gray-600 mt-1">Manage INAMPA photo gallery</p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => (window.location.href = "/")}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Back to Home
              </button>
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Upload Button and Search */}
        <div className="bg-white rounded-lg shadow-sm border mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Gallery Management</h2>
            <p className="text-sm text-gray-600 mt-1">Upload and manage your photos</p>
          </div>
          
          <div className="p-6">
            <div className="flex justify-between items-center">
              <button
                onClick={handleOpenUploadModal}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>Upload New Photo</span>
              </button>
              
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search photos..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-gray-900"
                  />
                </div>
                {searchTerm && (
                  <button
                    onClick={() => handleSearch("")}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div id="gallery-section" className="bg-white rounded-lg shadow-sm border">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Gallery Photos</h2>
                <p className="text-sm text-gray-600 mt-1">
                  {searchTerm ? (
                    <>
                      {filteredPhotos.length} of {album.length} photo{album.length !== 1 ? 's' : ''} found
                      {totalPages > 1 && (
                        <span className="ml-2">
                          (Page {currentPage} of {totalPages})
                        </span>
                      )}
                    </>
                  ) : (
                    <>
                      {album.length} photo{album.length !== 1 ? 's' : ''} in gallery
                      {totalPages > 1 && (
                        <span className="ml-2">
                          (Page {currentPage} of {totalPages})
                        </span>
                      )}
                    </>
                  )}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                {totalPages > 1 && (
                  <div className="text-sm text-gray-500">
                    Showing {startIndex + 1}-{Math.min(endIndex, filteredPhotos.length)} of {filteredPhotos.length}
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  <label htmlFor="photos-per-page" className="text-sm font-medium text-gray-700">
                    Photos per page:
                  </label>
                  <select
                    id="photos-per-page"
                    value={photosPerPage}
                    onChange={(e) => handlePhotosPerPageChange(Number(e.target.value))}
                    className="rounded-md border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            {filteredPhotos.length === 0 ? (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  {searchTerm ? "No photos found" : "No photos"}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {searchTerm ? "Try adjusting your search terms." : "Get started by uploading your first photo."}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {currentPhotos.map((photo) => (
                  <div
                    key={photo.public_id}
                    className="relative group bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    {/* Image Container - PRESERVING EXACT IMAGE LOADING LOGIC */}
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <Image
                        width={300}
                        height={300}
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    
                    {/* Photo Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-1">
                        {photo.title}
                      </h3>
                      
                      <div className="space-y-2 text-xs text-gray-600">
                        <p className="line-clamp-2">
                          <span className="font-medium">ID:</span> {photo.description_id}
                        </p>
                        <p className="line-clamp-2">
                          <span className="font-medium">EN:</span> {photo.description_en}
                        </p>
                      </div>
                      
                      {photo.tags.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1">
                          {photo.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                            >
                              {tag}
                            </span>
                          ))}
                          {photo.tags.length > 3 && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              +{photo.tags.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <button
                        onClick={() => handleEditPhoto(photo)}
                        className="p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors duration-200"
                        title="Update photo"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDelete(photo.public_id)}
                        className="p-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
                        title="Delete photo"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6">
                <div className="flex flex-1 justify-between sm:hidden">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
                      <span className="font-medium">{Math.min(endIndex, album.length)}</span> of{' '}
                      <span className="font-medium">{album.length}</span> results
                    </p>
                  </div>
                  <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="sr-only">Previous</span>
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                        </svg>
                      </button>
                      
                      {/* Page numbers */}
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                        // Show first page, last page, current page, and pages around current page
                        const showPage = page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1;
                        
                        if (!showPage) {
                          // Show ellipsis for gaps
                          if (page === 2 && currentPage > 4) {
                            return (
                              <span key={page} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                                ...
                              </span>
                            );
                          }
                          if (page === totalPages - 1 && currentPage < totalPages - 3) {
                            return (
                              <span key={page} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                                ...
                              </span>
                            );
                          }
                          return null;
                        }

                        return (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                              page === currentPage
                                ? 'z-10 bg-blue-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                                : 'text-gray-900'
                            }`}
                          >
                            {page}
                          </button>
                        );
                      })}

                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="sr-only">Next</span>
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && editingPhoto && (
        <div 
          className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={handleCloseEditModal}
        >
          <div 
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Edit Photo</h2>
                  <p className="text-sm text-gray-600 mt-1">Update photo details and metadata</p>
                </div>
                <button
                  onClick={handleCloseEditModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Current Photo Preview */}
              <div className="text-center">
                <div className="inline-block">
                  <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      width={300}
                      height={300}
                      src={editingPhoto.url}
                      alt={editingPhoto.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-2 font-medium">Current Photo</p>
                </div>
              </div>

              {/* File Upload Section */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Replace Photo (Optional)
                </label>
                
                {/* New Image Preview */}
                {editPreviewUrl && (
                  <div className="mb-4 text-center">
                    <div className="inline-block relative">
                      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 max-w-xs">
                        <Image
                          width={300}
                          height={300}
                          src={editPreviewUrl}
                          alt="New Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">New Image Preview</p>
                  </div>
                )}
                
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-gray-400 transition-colors duration-200">
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="edit-file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                        <span>{editPreviewUrl ? "Change file" : "Upload new file"}</span>
                        <input
                          id="edit-file-upload"
                          name="edit-file-upload"
                          type="file"
                          className="sr-only"
                          ref={fileInputRef}
                          onChange={handleEditFileChange}
                          accept="image/*"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">Leave empty to keep current photo</p>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Photo Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter photo title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-gray-900"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags (comma separated)
                  </label>
                  <input
                    type="text"
                    placeholder="tag1, tag2, tag3"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-gray-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description (Indonesian)
                  </label>
                  <textarea
                    placeholder="Enter Indonesian description"
                    value={descriptionID}
                    onChange={(e) => setDescriptionId(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-gray-900"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description (English)
                  </label>
                  <textarea
                    placeholder="Enter English description"
                    value={descriptionEN}
                    onChange={(e) => setDescriptionEn(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-gray-900"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                <button
                  onClick={handleCloseEditModal}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUploadOrUpdate}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  Update Photo
                </button>
              </div>
            </div>
        </div>
      </div>
    )}

    {/* Upload Modal */}
    {showUploadModal && (
      <div 
        className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        onClick={handleCloseUploadModal}
      >
        <div 
          className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Upload New Photo</h2>
                <p className="text-sm text-gray-600 mt-1">Add a new photo to your gallery</p>
              </div>
              <button
                onClick={handleCloseUploadModal}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 space-y-6">
            {/* File Upload Section */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Photo File
              </label>
              
              {/* Image Preview */}
              {previewUrl && (
                <div className="mb-4 text-center">
                  <div className="inline-block relative">
                    <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 max-w-xs">
                      <Image
                        width={300}
                        height={300}
                        src={previewUrl}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Image Preview</p>
                </div>
              )}
              
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-gray-400 transition-colors duration-200">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="upload-file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                      <span>{previewUrl ? "Change file" : "Upload a file"}</span>
                      <input
                        id="upload-file-upload"
                        name="upload-file-upload"
                        type="file"
                        className="sr-only"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photo Title
                </label>
                <input
                  type="text"
                  placeholder="Enter photo title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  placeholder="tag1, tag2, tag3"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-gray-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description (Indonesian)
                </label>
                <textarea
                  placeholder="Enter Indonesian description"
                  value={descriptionID}
                  onChange={(e) => setDescriptionId(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description (English)
                </label>
                <textarea
                  placeholder="Enter English description"
                  value={descriptionEN}
                  onChange={(e) => setDescriptionEn(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-gray-900"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
              <button
                onClick={handleCloseUploadModal}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleUploadOrUpdate}
                disabled={!file || !title}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Upload Photo
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);
}

export default withAuth(FormDeskripsi);
