"use client";

import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useTransition } from "react";

export default function TogleLanguage() {
  const router = useRouter();
  const { locale, pathname, asPath } = router;
  const [isPending, startTransition] = useTransition();

  const toggleLocale = locale === "id" ? "en" : "id";

  const handleChangeLanguage = () => {
    Cookies.set("NEXT_LOCALE", toggleLocale, { expires: 365 });
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
      {locale === "id" ? "🇺🇸 English" : "🇮🇩 Bahasa"}
    </button>
  );
}
