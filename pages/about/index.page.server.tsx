import Link from "../../components/Link";
import React from "react";
import TeamShadowLogo from "../../components/TeamShadowLogo";

export { Page };

function Page() {
  return (
    <>
      <div className="bg-pink-600 text-white mb-6">
        <div className="pt-6">
          <div className="container px-3 mx-auto">
            <div className="flex flex-col w-full justify-center text-center items-start text-center md:text-left">
              <h2 className="team-shadow-header my-4 text-xl md:text-5xl leading-tight text-center mx-auto uppercase">
                About the Team
              </h2>
              <p className="leading-normal md:text-2xl mb-8 text-center mx-auto">
                Team Shadow is an online and real life automotive organization.
                <br />
                We strive to be the best.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full container mx-auto py-3 px-2">
        <h3>
          <TeamShadowLogo racing />
        </h3>
        <p>
          Team Shadow Racing is all about{" "}
          <strong className="text-pink-600 uppercase">speed</strong>. The team's
          primary simulator for training is Assetto Corsa. AC is used to train
          for track racing and practicing touge runs. But speed is not about
          siting in the simulator, real speed is found on the track and auto
          cross courses. After homing skills, official Team Shadow drivers
          demonstrate their skills in automotive competitions.
        </p>
      </div>
      <div className="w-full container mx-auto py-3 px-2">
        <h3 className="team-shadow-header text-4xl">Fabrication</h3>
        <p>
          Team Shadow Fabrication is all about{" "}
          <strong className="text-pink-600 uppercase">creativity</strong>. Using
          state of the art production facilities and advanced CAD software, Team
          Shadow engineers are allowed to develop and produce parts that will
          increase performance and reliability. Making in house parts allows the
          team to save money and customize their vehicles to achieve maximum
          performance. Our ultimate goal: be best.
        </p>
      </div>
      <iframe
        className="mx-auto"
        width="390"
        height="220"
        src="https://www.youtube.com/embed/r6RRq0vY7Zc?rel=0?version=3&autoplay=1&controls=0&showinfo=0&loop=1&mute=1&playlist=r6RRq0vY7Zc"
      ></iframe>
      <div className="w-full container mx-auto py-3 px-2">
        <h3 className="team-shadow-header text-4xl">Media</h3>
        <p>
          Team Shadow Meida is all about{" "}
          <strong className="text-pink-600 uppercase">entertainment</strong>.
          Video, Audio, and pictures are the best way to experience automotive
          culture at home. And Team Shadow wants to bring that culture to you!
          Visit the{" "}
          <Link href="https://www.youtube.com/channel/UCaje4yLTTxVJT4bf7PXDk6g">
            <a className="textLink">YouTube</a>
          </Link>{" "}
          channel to see videos of our pilots and check out our{" "}
          <Link href="/gallery">
            <a className="textLink">Gallery</a>
          </Link>{" "}
          to see our virtual and real world vehicles.
        </p>
      </div>
      <div className="bg-gray-800 mt-6">
        <div className="container mx-auto px-6 text-center py-20">
          <h2 className="team-shadow-header mb-6 text-4xl text-center text-white">
            Want to see us in action?
          </h2>
          <Link href="https://www.youtube.com/channel/UCaje4yLTTxVJT4bf7PXDk6g">
            <button className="bg-white text-gray-800 font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
              Watch on YouTube 📺
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
