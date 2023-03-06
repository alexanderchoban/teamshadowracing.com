import React from "react";
import MediaCard from "./MediaCard";
import { albumPhotoType } from "../utils/getImgurAlbum";

type MediaCardProps = {
  title?: string;
  media: albumPhotoType[];
};

const MediaGrid = ({ title, media }: MediaCardProps) => (
  <>
    {title && <h2 className="text-4xl pb-4 pt-12 pl-4">{title}</h2>}
    <div className="grid grid-cols-2">
      {media.map(({ src, alt, thumbnail }, index) => (
        <MediaCard key={index} src={src} alt={alt} thumbnail={thumbnail} />
      ))}
    </div>
  </>
);

export default MediaGrid;
