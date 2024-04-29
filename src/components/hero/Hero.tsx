import React from "react";
import HeroSearch from "../heroSearch/HeroSearch";

function Hero() {
  return (
    <div className=" w-full mt-10 rounded-lg shadow-lg relative h-[400px] ">
      <img
        src="/assets/image2.jpg"
        alt="hero-image"
        className="h-full w-full object-cover rounded-lg brightness-50"
      />
      <div className="absolute inset-0 text-white text-center gap-4 flex flex-col max-w-[700px] mx-auto p-2 mt-10">
        <h1 className="font-bold text-5xl">
          Find <span className="text-teal-400">Real Estate</span> & Get Your
          Dream Place
        </h1>
        <p className="mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s...
        </p>
      </div>

      <div className="absolute text-white bottom-10 right-0 left-0 shadow-lg max-w-[700px] mx-auto">
        <HeroSearch />
      </div>
    </div>
  );
}

export default Hero;
