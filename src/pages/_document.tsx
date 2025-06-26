import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="id">
      <Head />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
