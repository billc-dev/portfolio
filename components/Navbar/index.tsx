import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const { asPath } = useRouter();
  const hash = asPath.split("#")[1];
  return (
    <nav className="fixed top-0 z-50 w-full bg-zinc-900 py-2">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-8">
        <Link href="/">
          <a className="whitespace-nowrap text-2xl font-bold">{"<Bill />"}</a>
        </Link>
        <div className="">
          <Link href="#work">
            <a className={`ml-8 ${hash === "work" && "underline"}`}>Work</a>
          </Link>
          <Link href="#about">
            <a className={`ml-8 ${hash === "about" && "underline"}`}>About</a>
          </Link>
          <Link href="/BillCheng_CV.pdf" download>
            <a className="ml-8" target="_blank">
              Resume
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
