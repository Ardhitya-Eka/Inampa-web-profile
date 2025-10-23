import React from 'react';
import { GetStaticPropsContext } from 'next';

const certificates = [
  { year: 2017, url: 'https://drive.google.com/file/d/1ZcnvN7J3VrZQumoFM_lC7EMP_7iaAqpH/view?usp=sharing' },
  { year: 2018, url: 'https://drive.google.com/file/d/1ssz6OZkk1VT7h1Jxc3F8ZJSq6oWtIH_E/view?usp=sharing' },
  { year: 2019, url: 'https://drive.google.com/file/d/1NdLqttrFfs3sNVm83I6VjjrQJIJvUx2C/view?usp=sharing' },
  { year: 2020, url: 'https://drive.google.com/file/d/1WJcl6lw-RXXStccHzevE7tY15bV7J-jR/view?usp=sharing' },
  { year: 2021, url: 'https://drive.google.com/file/d/1mnSBbZyr135VJaTtLWptDUdomTVVWe8m/view?usp=sharing' },
  { year: 2022, url: 'https://drive.google.com/file/d/14Splacy-qrGGWCSf5ZJUNMXXoVD8jWko/view?usp=sharing' },
  { year: 2023, url: 'https://drive.google.com/file/d/1yOxMOo8XBaFriuK3oQQAgx0xQT6YXgFU/view?usp=sharing' },
  { year: 2024, url: 'https://drive.google.com/file/d/1Onw9kZ32VA3fHFju6mZ6KvDOQ06CoMVZ/view?usp=sharing' },
  { year: 2025, url: 'https://drive.google.com/file/d/1nNniQQp5-_GdiuKK-5US-uH5aAxFbmPN/view?usp=sharing' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center p-6 mt-15">
      <h1 className="text-3xl font-bold mb-4 text-center max-w-3xl">
         
        International Maritime Pilots Association (IMPA)
      </h1>
      <p className="max-w-3xl text-center text-gray-700 mb-8">
        Indonesian Maritime Pilots Association (INAMPA) sejak tahun 2017 telah menerima status dan keanggotaan resmi International Maritime Pilots Association (IMPA) yang dideklarasikan pada hasil Kongres IMPA ke – 23 di Seoul – Korea Selatan tanggal 26 – 30 September 2016. Sebagaimana diketahui IMPA yang berpusat di London – Inggris adalah merupakan mitra resmi International Maritime Organization (IMO) sebagai Badan Resmi Perserikatan Bangsa – Bangsa (PBB) dalam hal ini Peraturan Keselamatan Maritim Dunia dengan anggota + 176 Negara. Berikut adalah dokumentasi Sertifikat International Maritime Pilots Association (IMPA) ;
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-3xl w-full">
        {certificates.map(({ year, url }) => (
          <a
            key={year}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 text-center text-blue-600 font-semibold text-lg border border-blue-300 hover:border-blue-500"
          >
            {year}
          </a>
        ))}
      </div>
    </main>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../../messages/${locale}`)).default,
    },
  }
}