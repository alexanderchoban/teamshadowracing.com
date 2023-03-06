import React from "react";
import HeroBanner from "./HeroBanner";
import YouTubeAd from "./YouTubeAd";
import IconBanner from "./IconBanner";
import GalleryBanners from "./GalleryBanners";

import getImgurAlbum, { albumPhotoType } from "../../utils/getImgurAlbum";

export { Page };
export { onBeforeRender };

async function onBeforeRender() {
  const { photos } = await getImgurAlbum("QtESV61");
  return {
    pageContext: {
      pageProps: {
        photos,
      },
      // The page's <title>
      documentProps: { title: "Home" },
    },
  };
}

function Page({ photos }: { photos: albumPhotoType[] }) {
  return (
    <>
      <HeroBanner />
      <YouTubeAd />
      <IconBanner />
      <GalleryBanners photos={photos} />
    </>
  );
}
