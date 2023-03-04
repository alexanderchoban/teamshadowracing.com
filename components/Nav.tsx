import React, { useState } from "react";
import clsx from "clsx";
import Link from "./Link";

import TeamShadowLogo from "./TeamShadowLogo";

function NavLinks() {
  return (
    <>
      <li className="mr-3">
        <Link
          className="inline-block py-2 px-4 text-black no-underline"
          href="/"
        >
          Home
        </Link>
      </li>
      <li className="mr-3">
        <Link
          className="inline-block py-2 px-4 text-black no-underline"
          href="/about"
        >
          About
        </Link>
      </li>
      <li className="mr-3">
        <Link
          className="inline-block py-2 px-4 text-black no-underline"
          href="/gallery"
        >
          Gallery
        </Link>
      </li>
    </>
  );
}

function Nav() {
  return (
    <div
      id="header"
      className="fixed w-full z-30 top-0 bg-white shadow-lg carbon"
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 px-2">
        <Link href="/">
          <h1 className="cursor-pointer">
            <TeamShadowLogo white />
          </h1>
        </Link>
        <input className="side-menu" type="checkbox" id="side-menu" />
        <label className="hamb" htmlFor="side-menu">
          <span className="hamb-line"></span>
        </label>
        <nav
          className={clsx(
            "translate-x-0",
            "transform",
            "top-0",
            "left-0",
            "w-full",
            "bg-white",
            "fixed",
            "h-full",
            "overflow-auto",
            "ease-in-out",
            "transition-all",
            "duration-300",
            "z-0"
          )}
        >
          <div className="p-4">
            <TeamShadowLogo />
          </div>
          <ul className="px-4 text-3xl space-y-2">
            <NavLinks />
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
