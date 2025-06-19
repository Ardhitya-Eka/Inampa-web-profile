// pages/_app.tsx
import { IntlProvider as NextIntlProvider } from "next-intl";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const { locale = "en" } = useRouter();

  return (
    <NextIntlProvider locale={locale} messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}
