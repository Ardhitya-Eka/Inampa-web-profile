import type { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "@/lib/cloudinary/cloudinary";
import admin from "@/lib/firebase/firebaseAdmin";
import { getAuth } from "firebase-admin/auth";

export const config = { api: { bodyParser: { sizeLimit: "10mb" } } };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Bearer "))
      return res.status(401).json({ error: "Unauthorized" });
    const token = authHeader.split(" ")[1];
    const decoded = await getAuth(admin.app()).verifyIdToken(token);
    if (decoded.email !== process.env.ADMIN_EMAIL)
      return res.status(403).json({ error: "Forbidden" });

    if (req.method === "POST") {
      const { file, folder } = req.body;
      const result = await cloudinary.uploader.upload(file, {
        folder: folder || "albums",
      });
      return res.status(200).json(result);
    }

    if (req.method === "DELETE") {
      const { public_id } = req.body;
      const result = await cloudinary.uploader.destroy(public_id);
      return res.status(200).json(result);
    }

    res.status(405).json({ error: "Method not allowed" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}
