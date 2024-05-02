import HeroSearch from "../heroSearch/HeroSearch";
import { info } from "../../const/const";
import CountUp from "react-countup";

function Hero() {
  return (
    <div className=" w-full mt-10 gap-2 rounded-lg shadow-lg relative  flex flex-col h-[530px]">
      <div className="relative ">
        <img
          src="/assets/image2.jpg"
          alt="hero-image"
          className="h-[380px] w-full object-cover rounded-lg brightness-50 "
        />
        <div className="absolute inset-0 text-white text-center gap-4 flex flex-col max-w-[700px] mx-auto p-4 mt-10">
          <h1 className="font-bold text-4xl md:text-6xl">
            Find <span className="text-teal-400">Real Estate</span> & Get Your
            Dream Place
          </h1>
        </div>

        <div className="absolute text-white bottom-4 right-0 left-0 shadow-lg max-w-[700px] mx-auto p-4">
          <HeroSearch />
        </div>
      </div>
      <div className="relative h-[200px]">
        <img
          src="/assets/image2.jpg"
          alt="hero-image"
          className="h-[150px] w-full  object-cover rounded-lg brightness-50 object-bottom "
        />
        <div className="absolute inset-0 text-white text-center gap-4 flex flex-col max-w-[700px] mx-auto p-2 mt-10">
          <ul className="flex justify-between items-center">
            {info.map((info, i) => {
              return (
                <li key={i} className="">
                  <div className="flex flex-col justify-center items-start">
                    <h1 className="font-bold text-4xl">
                      {info.number === 10 ? (
                        info.number + "+"
                      ) : (
                        <CountUp start={2} end={info.number} />
                      )}
                    </h1>
                    <h2 className="text-lg">{info.title}</h2>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;
