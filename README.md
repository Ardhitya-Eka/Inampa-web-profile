INAMPA.org Website 🌊

Repository ini berisi kode sumber untuk INAMPA.org
 — situs resmi Indonesian Maritime Pilots’ Association (INAMPA).

🔹 Tentang

INAMPA.org adalah platform web untuk:

Menampilkan profil dan sejarah INAMPA

Berita, publikasi, dan kegiatan anggota

Informasi visi, misi, program, dan kontak organisasi

Website ini dibangun untuk menyediakan informasi yang mudah diakses bagi anggota, pemerintah, dan publik terkait profesi pandu maritim Indonesia.

🛠️🛠️ Teknologi

Frontend: Next.js
 (React Framework)

Styling: Tailwind CSS

Backend & Hosting: Firebase

Firestore untuk database

Firebase Hosting untuk deployment

Firebase Functions untuk API (opsional)

💻 Instalasi & Pengembangan Lokal

Clone repository:

git clone https://github.com/username/inampa.org.git
cd inampa.org


Install dependencies:

npm install
# atau
yarn install


Setup Firebase:

Buat proyek di Firebase Console

Copy konfigurasi Firebase ( Cek Firebase Documentation ) ke file .env.local:

NEXT_PUBLIC_ADMIN_UID="xxxx"
ADMIN_EMAIL="xxxx"
CLOUDINARY_CLOUD_NAME="xxxx"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="xxxx"
CLOUDINARY_API_KEY="xxxx"
CLOUDINARY_API_SECRET="xxxx"
NEXT_PUBLIC_FIREBASE_API_KEY="xxxx"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="xxxx"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="xxxx"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="xxxx"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="xxxx"
NEXT_PUBLIC_FIREBASE_APP_ID="xxxx"
NEXT_MEASUREMENT_ID="xxxx"
FIREBASE_PROJECT_ID="xxxx"
FIREBASE_CLIENT_EMAIL="xxxx"


Jalankan server lokal:

npm run dev
# atau
yarn dev


Buka browser di http://localhost:3000
🚀 Fitur

Halaman beranda dengan ringkasan organisasi

Profil, visi, misi, dan struktur organisasi

Form kontak dan Media

Integrasi media sosial

📝 Kontribusi

Kontribusi diterima dalam bentuk:

Bug fix

Penambahan fitur baru

Dokumentasi

Silakan fork repo, buat branch baru, dan kirim pull request.

📄 Lisensi

Kode dan konten website ini dilisensikan di bawah Creative Commons Attribution 4.0 International (CC BY Ardhitya Eka Darmawan)
.

Anda bebas untuk:

Membagikan — menyalin dan mendistribusikan ulang materi dalam format apa pun

Menyesuaikan — mengubah, mengadaptasi, dan membangun di atas materi untuk tujuan apa pun

Dengan syarat: memberikan kredit yang sesuai kepada INAMPA.

📬 Kontak

Website: https://inampa.org

Email: dppinampa10@gmail.com
