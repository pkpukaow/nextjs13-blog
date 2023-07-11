"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LangSwitcher = ({ locale }: { locale: string }) => {
  const targetLanguage = locale === "en" ? "th" : "en";
  const pathname = usePathname();

  const redirectTarget = () => {
    if (!pathname) return "/";
    const segment = pathname.split("/");
    segment[1] = targetLanguage;
    return segment.join("/");
  };

  return (
    <Link
      className="flex items-center gap-1 font-semibold"
      locale={targetLanguage}
      href={redirectTarget()}
    >
      {targetLanguage === "en" && (
        <Image
          alt="us"
          src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/US.svg"
          width={20}
          height={16}
        />
      )}
      {targetLanguage === "th" && (
        <Image
          alt="us"
          src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/TH.svg"
          width={20}
          height={16}
        />
      )}
      {targetLanguage.toLocaleUpperCase()}
    </Link>
  );
};

export default LangSwitcher;
