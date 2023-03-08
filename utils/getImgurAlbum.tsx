import fetch from "node-fetch";

type imageResponseType = {
  link: string;
  description: string;
  width: bigint;
  height: bigint;
};

export type albumPhotoType = {
  src: string;
  alt: string;
  width: bigint;
  height: bigint;
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

  const {
    data: { title, images, id },
  } = await response.json();

  return {
    id,
    title,
    photos: images.map(
      ({ link: src, description: alt, width, height }: imageResponseType) => ({
        src,
        alt,
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
