// pages/_app.tsx
import { NextIntlClientProvider } from "next-intl";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="Asia/Jakarta"
      messages={pageProps.messages}
    >
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}
