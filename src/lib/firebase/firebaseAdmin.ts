import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  });
}

const auth = admin.auth();

/**
 * Verifikasi Firebase ID Token dari client
 */
export async function verifyIdToken(token: string) {
  return auth.verifyIdToken(token);
}

export default admin;
