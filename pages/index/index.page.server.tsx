import React from "react";

export { Page };

function Page() {
  return (
    <>
      <div className="tshero">
        <div className="pt-14 sm:pt-36 md:pt-48 lg:pt-60 xl:pt-72 text-white">
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full justify-center text-center items-start text-center md:text-left">
              <h1 className="team-shadow-header my-4 text-4xl md:text-7xl leading-tight text-center mx-auto uppercase">
                <span className="bg-blue-800 px-1">AUTOMOTIVE FUN</span>
              </h1>
              <p className="leading-normal md:text-2xl mb-8 text-center mx-auto">
                <span className="bg-blue-800 px-1">
                  Team Shadow is an online and real life automotive
                  organization. <br />
                  We strive to be the best.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
