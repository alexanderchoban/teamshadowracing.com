import React from "react";

type MediaCardProps = {
  src: string;
  alt: string;
  thumbnail: string;
};

const MediaCard = ({ src, alt, thumbnail }: MediaCardProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      width: "100%",
      height: "0",
      paddingTop: "53.9%",
      position: "relative",
    }}
  >
    <img
      src={thumbnail ? thumbnail : src}
      alt={alt}
      style={{
        flexShrink: "0",
        minWidth: "100%",
        minHeight: "100%",
        position: "absolute",
        top: "0",
        left: "0",
      }}
    />
  </div>
);

export default MediaCard;
