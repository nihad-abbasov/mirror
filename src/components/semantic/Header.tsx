import Image from "next/image";
import { Nav } from "./Nav";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full bg-gray-100 py-4 shadow-sm">
      <div className="header_inner myContainer flex items-center justify-between">
        <Link href="/" className="logo_container">
          <Image
            src="/logo.png"
            alt="Mirror Studio logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-1/2 h-auto max-w-[160px]"
            priority
          />
        </Link>
        <Nav />
      </div>
    </header>
  );
};
