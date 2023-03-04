import React from "react";
import clsx from "clsx";

type TeamShadowLogoProps = {
  racing?: boolean;
  white?: boolean;
  children?: JSX.Element | JSX.Element[];
};

const logoClasses: string[] = [
  "toggleColour",
  "no-underline",
  "hover:no-underline",
  "text-black",
  "font-bold",
  "text-2xl",
  "lg:text-4xl",
];

function TeamShadowLogo({
  racing = false,
  white = false,
  children,
}: TeamShadowLogoProps) {
  return (
    <div className={clsx(logoClasses)}>
      <>
        <span className={clsx("logo-team-text", white && "white")}>team</span>
        <span className="logo-shadow-text">Shadow</span>
        {racing && <span className="logo-racing-text">Racing</span>}
        {children && <span className="logo-children-text">{children}</span>}
      </>
    </div>
  );
}

export default TeamShadowLogo;
