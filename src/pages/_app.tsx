// pages/_app.tsx
import { NextIntlClientProvider } from "next-intl";
import { AppProps } from "next/app";
import { useRouter } from "next/router";

import "@/styles/globals.css";
import Navbar from "@/components/layouts/Navbar/Navbar";
import Footer from "@/components/layouts/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <NextIntlClientProvider
        locale={router.locale}
        timeZone="Asia/Jakarta"
        messages={pageProps.messages}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </NextIntlClientProvider>
    </>
  );
}
