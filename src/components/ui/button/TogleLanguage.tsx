"use client";

import { useRouter } from "next/router";

import { useTransition } from "react";

export default function TogleLanguage() {
  const router = useRouter();
  const { locale, pathname, asPath } = router;
  const [isPending, startTransition] = useTransition();

  const toggleLocale = locale === "en" ? "id" : "en";

  const handleChangeLanguage = () => {
    startTransition(() => {
      router.replace(
        `/${toggleLocale}${pathname}`,
        `/${toggleLocale}${asPath}`,
        {
          locale: toggleLocale,
          scroll: false,
        }
      );
    });
  };

  return (
    <button
      onClick={handleChangeLanguage}
      disabled={isPending}
      className="bg-blue-600 text-white px-3 py-1 rounded-lg shadow-md hover:bg-blue-700 transition-colors items-center flex gap-2"
    >
      {locale === "en" ? "🇮🇩 Bahasa" : "🇺🇸 English"}
    </button>
  );
}
