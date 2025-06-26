// pages/_app.tsx
import { IntlProvider as NextIntlProvider } from "next-intl";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextIntlProvider
      locale={router.locale || "id"}
      messages={pageProps.messages}
    >
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}
