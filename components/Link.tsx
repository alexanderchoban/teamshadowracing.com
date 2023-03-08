import React from "react";
import { usePageContext } from "../hooks/usePageContext";

export default Link;

function Link(props: {
  href?: string;
  className?: string;
  children: React.ReactNode;
  style?: object;
}) {
  const pageContext = usePageContext();
  const className = [
    props.className,
    pageContext.urlPathname === props.href && "is-active",
  ]
    .filter(Boolean)
    .join(" ");
  return <a {...props} style={props.style} className={className} />;
}
