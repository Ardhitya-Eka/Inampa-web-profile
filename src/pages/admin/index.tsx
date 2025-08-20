import { useState, useEffect, useRef } from "react";
import { auth } from "@/lib/firebase/init";
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
import firebaseApp from "@/lib/firebase/init";
import { getAuth } from "firebase/auth";
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
  const [album, setAlbum] = useState<AlbumPhoto[]>([]);
  const [albumId] = useState("default");
  const db = getFirestore(firebaseApp);

  const auth = getAuth(firebaseApp);
  // upload foto api
  const getToken = async () => {
    const user = getAuth().currentUser;
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

  // Upload atau Update Foto
  const handleUploadOrUpdate = async () => {
    if (!file) return;
    const token = await getToken();

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const res = await fetch("/api/cloudinary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ file: reader.result, folder: "albums" }),
      });
      const data = await res.json();

      const albumRef = doc(db, "albums", albumId);
      const albumSnap = await getDoc(albumRef);

      const newPhoto: AlbumPhoto = {
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

      let updatedPhotos: AlbumPhoto[];
      if (albumSnap.exists()) {
        if (updateTarget) {
          // replace foto lama
          updatedPhotos = albumSnap
            .data()
            .photos.map((p: AlbumPhoto) =>
              p.public_id === updateTarget ? newPhoto : p
            );

          // hapus foto lama di Cloudinary
          await fetch("/api/cloudinary", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ public_id: updateTarget }),
          });
        } else {
          // tambah foto baru
          updatedPhotos = [...albumSnap.data().photos, newPhoto];
        }
        await updateDoc(albumRef, { photos: updatedPhotos });
      } else {
        await setDoc(albumRef, { photos: [newPhoto] });
      }

      // reset form
      setFile(null);
      setTitle("");
      setDescriptionId("");
      setDescriptionEn("");
      setTags("");
      setUpdateTarget(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    };
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
    <div className="p-6">
      <div className="flex justify-between mb-2.5">
        <h1 className="text-xl font-bold mb-4">Admin Album</h1>
        <div>
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-blue-500 text-white px-2 py-1 rounded cursor-pointer hover:bg-blue-600 mx-4"
          >
            Back to Home
          </button>
          <button
            onClick={handleLogout}
            className="bg-blue-500 text-white px-2 py-1 rounded cursor-pointer hover:bg-blue-600"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Upload / Update Input */}
      <div className="mb-4 space-y-2">
        <input
          className="border p-2 rounded w-full cursor-pointer hover:bg-gray-300"
          type="file"
          ref={fileInputRef}
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <input
          type="text"
          placeholder="Judul Foto"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <textarea
          placeholder="Deskripsi indonesia"
          value={descriptionID}
          onChange={(e) => setDescriptionId(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <textarea
          placeholder="Deskripsi english"
          value={descriptionEN}
          onChange={(e) => setDescriptionEn(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleUploadOrUpdate}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
        >
          {updateTarget ? "Update Foto" : "Upload Foto"}
        </button>
        <button
          onClick={() => {
            // reset state jika batal
            setUpdateTarget(null);
            setFile(null);
            setTitle("");
            setDescriptionId("");
            setDescriptionEn("");
            setTags("");
            if (fileInputRef.current) {
              fileInputRef.current.value = "";
            }
          }}
          className="px-4 py-2 bg-gray-400 text-white rounded ml-2 hover:bg-gray-500 cursor-pointer"
        >
          {updateTarget ? "Batal Update" : "Batal Upload"}
        </button>
      </div>

      {/* Album Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {album.map((photo) => (
          <div
            key={photo.public_id}
            className="relative group border rounded-lg p-2 shadow"
          >
            <Image
              width={300}
              height={300}
              src={photo.url}
              alt={photo.title}
              className="rounded-lg mb-2"
            />
            <h3 className="font-bold">{photo.title}</h3>
            <p className="text-sm text-gray-600 border-b-2 p-2">
              {photo.description_id}
            </p>
            <p className="text-sm text-gray-600 p-2">{photo.description_en}</p>
            <p className="text-xs text-gray-500"></p>
            <div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 max-md:opacity-100">
              <button
                onClick={() => setUpdateTarget(photo.public_id)}
                className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-400 cursor-pointer"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(photo.public_id)}
                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-400 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default withAuth(FormDeskripsi);
