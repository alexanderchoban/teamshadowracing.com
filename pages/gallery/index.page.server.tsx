import getImgurAlbum, { albumDataType } from "../../utils/getImgurAlbum";

import Link from "../../components/Link";
import React from "react";

export { Page, onBeforeRender };

async function onBeforeRender() {
  let albums: albumDataType[] = [];
  const albumIds = String(import.meta.env.VITE_IMGUR_IDS).split(",");

  for (const album of albumIds) {
    albums.push(await getImgurAlbum(album));
  }

  return {
    pageContext: {
      pageProps: {
        albums,
      },
      documentProps: { title: "Media Gallery" },
    },
  };
}

function Page({ albums }: { albums: albumDataType[] }) {
  return (
    <>
      <h2 className="text-4xl pb-4 pt-4 pl-4 team-shadow-header">
        Media Gallery
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {albums.map(({ title, id, photos }, index) => (
          <div className="text-center" key={index}>
            <Link href={`/gallery/${id}`}>
              <img
                className="rounded-md shadow-lg"
                src={photos[0].thumbnail}
                alt={photos[0].alt}
                style={{ height: 200, margin: "auto" }}
              />{" "}
              {title}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
