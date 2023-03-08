import Link from "../../components/Link";
import React from "react";

function YouTubeAd() {
  return (
    <div className="bg-blue-500">
      <div className="container mx-auto px-6 text-center py-20">
        <h2 className="team-shadow-header mb-6 text-4xl text-center text-white">
          We like to go fast!
        </h2>
        <h3 className="my-4 text-2xl text-white">
          We race everything from iRacing to Forza and drive fun cars on the
          streets.
        </h3>
        <Link href="https://www.youtube.com/channel/UCaje4yLTTxVJT4bf7PXDk6g">
          <button className="bg-white text-gray-800 font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
            Watch on YouTube 📺
          </button>
        </Link>
      </div>
    </div>
  );
}

export default YouTubeAd;
