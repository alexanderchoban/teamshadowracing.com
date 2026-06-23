import fetch from "node-fetch";

type imageResponseType = {
  link: string;
  description: string | null; // Imgur descriptions can be null
  width: number;               // Changed from bigint to number
  height: number;              // Changed from bigint to number
};

export type albumPhotoType = {
  src: string;
  alt: string;
  width: number;               // Changed from bigint to number
  height: number;              // Changed from bigint to number
  square: string;
  thumbnail: string;
  lowThumbnail: string;
};

export type albumDataType = {
  id: string;
  title: string;
  photos: albumPhotoType[];
};

async function getImgurAlbum(albumHash: string): Promise<albumDataType> {
  const response = await fetch(`https://api.imgur.com/3/album/${albumHash}`, {
    method: "GET",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Client-ID ${import.meta.env.VITE_IMGUR_CLIENT}`,
    },
  });

  if (!response.ok) {
    throw new Error("IMGUR API ERROR: " + response.status);
  }

  const resJson = await response.json();
  
  // Safely extract data, defaulting images to an empty array if it doesn't exist
  const { title, images = [], id } = resJson.data || {};

  return {
    id,
    title: title || "Untitled Album",
    photos: images.map(
      ({ link: src, description: alt, width, height }: imageResponseType) => ({
        src,
        alt: alt || "", // Handle null descriptions gracefully
        width,
        height,
        square: [src.slice(0, -4), "s", src.slice(-4)].join(""),
        thumbnail: [src.slice(0, -4), "l", src.slice(-4)].join(""),
        lowThumbnail: [src.slice(0, -4), "m", src.slice(-4)].join(""),
      })
    ),
  };
}

export default getImgurAlbum;
