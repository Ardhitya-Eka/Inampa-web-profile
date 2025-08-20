import { useEffect, useState, ComponentType } from "react";
import { useRouter } from "next/router";
import { auth } from "./firebase/init";
import { onAuthStateChanged } from "firebase/auth";

export function withAuth<P extends object>(WrappedComponent: ComponentType<P>) {
  const WithAuth = (props: P) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [authorized, setAuthorized] = useState(false);

    const allowUid: string[] = JSON.parse(
      process.env.NEXT_PUBLIC_ADMIN_UID || "[]"
    );
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user && allowUid.includes(user.uid)) {
          setAuthorized(true);
        } else {
          router.push("/login");
        }
        setLoading(false);
      });
      return () => unsubscribe();
    }, [router, allowUid]);

    if (loading) {
      return <p>Loading...</p>;
    }

    if (!authorized) {
      return null; // agar tidak sempat render konten sensitif
    }

    return <WrappedComponent {...props} />;
  };

  // kasih nama displayName biar enak debugging
  WithAuth.displayName = `WithAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return WithAuth;
}
