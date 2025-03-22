import Image from "next/image";
import { Nav } from "./Nav";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full bg-gray-100 py-4">
      <div className="header_inner myContainer flex flex-row items-center justify-between">
        <Link href="/" className="logo_container">
          <Image
            src="/logo.png"
            alt="Business Name"
            width={0}
            height={0}
            sizes="100vw"
            className="w-1/2 h-auto"
          />
        </Link>
        <Nav />
      </div>
    </header>
  );
};
