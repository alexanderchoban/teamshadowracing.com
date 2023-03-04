import React from "react";
import clsx from "clsx";

const footerClasses: string[] = [
  "container",
  "mx-auto",
  "px-6",
  "text-center",
  "py-10",
  "text-gray-800",
];

function Footer() {
  return (
    <div className={clsx(footerClasses)}>
      <p>&copy; Team Shadow Racing 2011-{new Date().getFullYear()}</p>
    </div>
  );
}

export default Footer;
