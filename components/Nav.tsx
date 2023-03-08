import React, { useState } from "react";

import Link from "./Link";
import TeamShadowLogo from "./TeamShadowLogo";
import clsx from "clsx";

function NavLinkLi({ href, text }: { href: string; text: string }) {
  return (
    <li className="mr-3 w-full">
      <Link
        className="w-full hover:bg-pink-600 hover:text-white inline-block py-2 px-4 text-black no-underline"
        href={href}
      >
        {text}
      </Link>
    </li>
  );
}

function Nav() {
  return (
    <div
      id="header"
      className="fixed w-full z-30 top-0 bg-white shadow-lg carbon"
    >
      <div className="w-full pl-6 flex flex-wrap items-center justify-between mt-0 py-2 px-2">
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
          <ul className="p-0 text-3xl space-y-2">
            <NavLinkLi href="/" text="🏠 Home" />
            <NavLinkLi href="/about" text="📖 About" />
            <NavLinkLi href="/gallery" text="🖼️ Gallery" />
            <NavLinkLi
              href="https://www.youtube.com/channel/UCaje4yLTTxVJT4bf7PXDk6g"
              text="📺 YouTube"
            />
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
