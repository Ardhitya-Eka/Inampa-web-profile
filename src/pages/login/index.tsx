import { useState, useEffect } from "react";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase/init";
import { useRouter } from "next/router";
import Image from "next/image";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // Check if user is already authenticated
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.uid === process.env.NEXT_PUBLIC_ADMIN_UID) {
        setIsAuthenticated(true);
        router.push("/admin");
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await signInWithPopup(auth, googleProvider);

      // Check if the logged-in user is the admin
      if (result.user.uid === process.env.NEXT_PUBLIC_ADMIN_UID) {
        // Success - redirect to admin
        router.push("/admin");
      } else {
        // User is not authorized
        setError(
          "Akun ini tidak memiliki akses admin. Silakan gunakan akun admin yang benar."
        );
        await auth.signOut(); // Sign out unauthorized user
      }
    } catch (error: unknown) {
      console.error("Login gagal:", error);

      // Handle specific error cases
      if (error && typeof error === "object" && "code" in error) {
        const errorCode = (error as { code: string }).code;
        if (errorCode === "auth/popup-closed-by-user") {
          setError("Login dibatalkan. Silakan coba lagi.");
        } else if (errorCode === "auth/popup-blocked") {
          setError(
            "Popup login diblokir. Silakan izinkan popup untuk situs ini."
          );
        } else if (errorCode === "auth/network-request-failed") {
          setError(
            "Koneksi internet bermasalah. Silakan periksa koneksi Anda."
          );
        } else {
          setError(
            "Login gagal. Silakan coba lagi atau hubungi administrator."
          );
        }
      } else {
        setError("Login gagal. Silakan coba lagi atau hubungi administrator.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToHome = () => {
    router.push("/");
  };

  if (isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Mengalihkan ke halaman admin...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="relative w-20 h-20">
              <Image
                src="/Logo Inampa.png"
                alt="INAMPA Logo"
                fill
                className="object-contain"
                priority
                sizes="80px"
              />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Admin Login</h2>
          <p className="mt-2 text-sm text-gray-600">
            Indonesian Maritime Pilots Association
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white py-8 px-6 shadow-xl rounded-lg">
          <div className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-red-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Login Instructions */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-6">
                Masuk dengan akun Google Admin INAMPA untuk mengakses panel
                administrasi
              </p>
            </div>

            {/* Google Login Button */}
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Memproses...
                </div>
              ) : (
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Login dengan Google
                </div>
              )}
            </button>

            {/* Back to Home Button */}
            <div className="text-center">
              <button
                onClick={handleBackToHome}
                className="text-blue-600 hover:text-blue-500 text-sm font-medium transition-colors duration-200 hover:cursor-pointer"
              >
                ← Kembali ke Beranda
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500">
          <p>© 2025 Indonesian Maritime Pilots Association</p>
          <p className="mt-1">
            Halaman ini hanya untuk administrator yang berwenang
          </p>
        </div>
      </div>
    </div>
  );
}
