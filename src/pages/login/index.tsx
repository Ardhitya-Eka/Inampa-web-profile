import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase/init";

export default function LoginPage() {
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      // sukses → redirect ke admin
      window.location.href = "/admin";
    } catch (error) {
      console.error("Login gagal:", error);
      alert("Gagal login dengan Google");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4 border p-4">
        <button
          className=" cursor-pointer bg-blue-400 py-2 px-4 rounded-sm hover:bg-blue-500"
          onClick={() => (window.location.href = "/")}
        >
          back to home
        </button>
        <div className="text-2xl font-medium">
          Login dengan account Google Admin INAMPA
        </div>
        <button
          onClick={handleGoogleLogin}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
        >
          Login dengan Google
        </button>
      </div>
    </div>
  );
}
