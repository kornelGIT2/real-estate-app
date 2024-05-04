import HeroSearch from "../heroSearch/HeroSearch";
import { info } from "../../const/const";
import CountUp from "react-countup";
import Filter from "../../routes/estateListPage/_components/Filter";
import { useState } from "react";

function Hero() {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className=" w-full mt-10   rounded-lg  relative flex flex-col">
      <div className="relative ">
        <img
          src="/assets/image2.jpg"
          alt="hero-image"
          className="h-[450px] w-full object-cover rounded-lg brightness-50 "
        />
        <div className="absolute inset-0 text-white text-center gap-4 flex flex-col max-w-[700px] mx-auto p-4 mt-10">
          <h1 className="font-bold text-4xl md:text-6xl">
            Find <span className="text-teal-400">Real Estate</span> & Get Your
            Dream Place
          </h1>
        </div>

        <div className="absolute text-white bottom-4 right-0 left-0 shadow-lg max-w-[700px] mx-auto p-4">
          <HeroSearch
            showFilter={showFilter}
            setShowFilters={() => {
              setShowFilter(!showFilter);
            }}
          />
        </div>
      </div>

      {showFilter ? (
        <div className="p-10 mt-10">
          <Filter />
        </div>
      ) : null}

      <div className="p-10 mt-10 rounded-lg shadow-lg bg-neutral-50">
        <ul className="flex justify-between items-center">
          {info.map((info, i) => {
            return (
              <li key={i} className="md:p-0 p-2">
                <div className="flex flex-col justify-center items-start ">
                  <h1 className="font-bold text-4xl">
                    {info.number === 10 ? (
                      info.number + "+"
                    ) : (
                      <CountUp start={2} end={info.number} />
                    )}
                  </h1>
                  <h2 className="md:text-lg text-sm">{info.title}</h2>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Hero;
