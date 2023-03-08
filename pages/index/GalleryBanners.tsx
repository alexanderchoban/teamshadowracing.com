import React, { useEffect, useState } from "react";

import Link from "../../components/Link";
import MediaGrid from "../../components/MediaGrid";
import { albumPhotoType } from "../../utils/getImgurAlbum";

function HeroBanner({ photos }: { photos: albumPhotoType[] }) {
  return (
    <>
      <div className="container mx-auto">
        {photos && <MediaGrid media={photos} />}
      </div>
      <div className="bg-gray-800">
        <div className="container mx-auto px-6 text-center py-20">
          <h2 className="team-shadow-header mb-6 text-4xl text-center text-white">
            Want to see more?
          </h2>
          <Link href="/gallery">
            <button className="bg-white text-gray-800 font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
              View More Pictures
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
