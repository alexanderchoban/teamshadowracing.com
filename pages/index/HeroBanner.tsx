import Link from "../../components/Link";
import React from "react";

function HeroBanner() {
  return (
    <div className="tshero">
      <div className="pt-14 sm:pt-36 md:pt-48 lg:pt-60 xl:pt-72 text-white">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full justify-center text-center items-start text-center md:text-left">
            <h1 className="team-shadow-header my-4 text-4xl md:text-7xl leading-tight text-center mx-auto uppercase">
              <span className="bg-blue-800 px-1">AUTOMOTIVE FUN</span>
            </h1>
            <p className="leading-normal md:text-2xl mb-8 text-center mx-auto">
              <span className="bg-blue-800 px-1">
                Team Shadow is an online and real life automotive organization.{" "}
              </span>
              <br />
              <Link href="/about">
                <button className="shadow-lg border-2 hover:border-white border-pink-600 bg-pink-600 text-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
                  Learn More
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
