import getImgurAlbum, { albumDataType } from "../../utils/getImgurAlbum";

import { Back } from "../../components/Icons";
import Link from "../../components/Link";
import type { PageContextBuiltIn } from "vite-plugin-ssr";
import React from "react";

export { Page, onBeforeRender, prerender };

async function prerender() {
  const albumIds = String(import.meta.env.VITE_IMGUR_IDS).split(",");
  const albumPageURLs = albumIds.map((albumId) => "/gallery/" + albumId);
  return albumPageURLs;
}

async function onBeforeRender(pageContext: PageContextBuiltIn) {
  const album = await getImgurAlbum(pageContext.routeParams.id);

  return {
    pageContext: {
      pageProps: {
        album,
      },
    },
  };
}

function Page({ album }: { album: albumDataType }) {
  return (
    <>
      <div className="float-left m-3 w-12">
        <Link href="/gallery">{Back}</Link>
      </div>
      <h2 className="text-4xl pb-4 pt-4 pl-4 team-shadow-header">
        {album.title}
      </h2>
      <div className="columns-1 md:columns-2 lg:columns-3 p-4">
        {album.photos.map(({ alt, thumbnail }) => (
          <img
            className="mb-4 rounded-md shadow-lg w-full"
            alt={alt}
            src={thumbnail}
          />
        ))}
      </div>
    </>
  );
}
