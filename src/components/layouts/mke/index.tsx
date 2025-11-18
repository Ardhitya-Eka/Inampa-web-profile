"use client";
import { GetStaticPropsContext } from "next";
import React from "react";

interface Member {
  name: string;
}

export default function MKE() {
  const chair = "Capt. Medi Kusmana, M.Mar.";
  const viceChair = "Capt. Agoes Soeryanto, S.H., M.H., MBA.";
  const secretary = "Capt. Sonny M. Ichsan.";
  const members: Member[] = [
    { name: "Capt. John Freedy Bastanta Lubis" },
    { name: "Capt. Barlet Silalahi, M.M." },
    { name: "Capt. Al Abrar, M.Mar." },
    { name: "Capt. Gerard Arthur Dungus, M.Mar." },
    { name: "Capt. Sanuri, M.Mar." },
    { name: "Capt. Syamsul Maarif, M.Mar., M.M." },
    { name: "Capt. H. M. Djafar, M.Mar." },
    { name: "Capt. Harpin, M.Mar." },
    { name: "Capt. Yusuf Yunus, M.Mar." },
    { name: "Capt. Parwoto, M.Mar." },
    { name: "Capt. Ditar Rozano, M.Mar." },
    { name: "Capt. Ikrar Saimun, M.Mar." },
    { name: "Capt. Chaerul Anwar, M.Mar." },
    { name: "Capt. Agus Dwi Wahyono, M.Mar." },
    { name: "Capt. Dwiyono Soeyono, M.Mar." },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 flex flex-col items-center py-16 px-6">
      <div className="max-w-4xl w-full">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
          Majelis Kode Etik (MKE)
        </h1>

        {/* Main Table */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-blue-100">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-blue-700">
              Struktur Majelis
            </h2>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>
                <strong>Ketua Majelis:</strong> {chair}
              </li>
              <li>
                <strong>Wakil Ketua Majelis:</strong> {viceChair}
              </li>
              <li>
                <strong>Sekretaris Majelis:</strong> {secretary}
              </li>
            </ul>
          </div>

          {/* Members */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Anggota:
            </h2>
            <ol className="list-decimal list-inside space-y-1 text-gray-700">
              {members.map((member, index) => (
                <li key={index}>{member.name}</li>
              ))}
            </ol>
          </div>
        </div>

        {/* Footer */}
      </div>
    </main>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../../messages/${locale}`)).default,
    },
  };
}
