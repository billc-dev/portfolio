import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-zinc-900 z-50 p-4 py-2">
      <div className="flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold">{"<Bill />"}</a>
        </Link>
        <div className="">
          <Link href="#work">
            <a className="ml-8">Work</a>
          </Link>
          <Link href="#about">
            <a className="ml-8">About</a>
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
