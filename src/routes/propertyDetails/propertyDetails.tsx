import { useEffect, useState } from "react";
import { estateDummyData } from "../../const/const";
import { useParams } from "react-router-dom";
import Map from "../../components/map/map";
import { Collapse } from "react-collapse";
import "./fade.css";

function PropertyDetails() {
  const { id } = useParams();
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const propertyDetails = estateDummyData.filter(
    (estate) => estate.id === parseInt(id as any)
  );

  return (
    <main className="min-h-screen md:p-2 p-0">
      <div className="md:hidden fixed flex items-center justify-center gap-6 bottom-0 h-24 bg-neutral-50 w-full z-50 p-6">
        <button className="p-3 pl-6 pr-6 bg-teal-500 rounded-xl text-white font-semibold hover:bg-teal-600">
          Contact
        </button>

        <button className="p-3 border font-medium border-neutral-500 rounded-xl hover:border-black flex items-center justify-center gap-2">
          <img src="/assets/favorite.svg" alt="fav" className="w-4 h-4" /> Save
          property
        </button>
      </div>
      <div className="md:grid md:grid-cols-12 flex flex-col gap-2 ">
        <div className="col-span-8">
          <img
            src={propertyDetails[0]?.image}
            alt="source_image"
            className="rounded-xl brightness-90 md:h-full object-cover shadow-lg"
          />
        </div>
        <div className="md:hidden mt-4 flex flex-col gap-2">
          <h1 className="font-semibold text-xl">{propertyDetails[0].title}</h1>
          <h2 className="font-semibold text-xl">{propertyDetails[0].price}$</h2>
          <h3 className="text-slate-500 flex items-center justify-center gap-1">
            <img
              src="/assets/location.svg"
              alt="location"
              className="w-5 h-5 opacity-35"
            />{" "}
            {propertyDetails[0].address}, {propertyDetails[0].city}
          </h3>
          <h3 className="font-semibold ">{propertyDetails[0].type}</h3>
        </div>
        <div className="col-span-4">
          <ul className="md:flex flex-col gap-2 hidden">
            {[
              [...Array(3)].map((image, i) => {
                return (
                  <li key={i} className="relative shadow-lg">
                    <img
                      src={propertyDetails[0]?.image}
                      alt="source_image"
                      className={`rounded-xl  object-cover ${
                        i === 2 ? "brightness-50" : "brightness-90"
                      }`}
                    />
                    {i === 2 && (
                      <span className="font-bold text-5xl text-white absolute m-auto  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        +12 {image}
                      </span>
                    )}
                  </li>
                );
              }),
            ]}
          </ul>
        </div>
      </div>
      <div className="grid lg:grid-cols-12 relative gap-10 p-10 border-t border-neutral-200 md:mt-10 mt-4">
        <div className="col-span-8 flex flex-col gap-4 z-0">
          <div className="w-full ">
            {<Map heigth={400} id={parseInt(id as any)} />}
          </div>
          <div
            id="fade"
            className="flex gap-2 mt-4 text-start  flex-col border-t border-b border-neutral-200 p-4 "
          >
            <p id="p_fade">
              {" "}
              Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
              przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.
              przez nieznanego drukarza do wypełnienia tekstem próbnej książki.
              Pięć wieków później zaczął być używany przemyśle elektronicznym,
              pozostając praktycznie niezmienionym...
            </p>

            <Collapse isOpened={showText}>
              <p className="">
                Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy
                Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z
                zawierającym różne wersje Lorem Ipsum oprogramowaniem
                <br></br>
                <br></br> przeznaczonym do realizacji druków na komputerach
                osobistych, jak Aldus PageMaker W przeciwieństwie do
                rozpowszechnionych opinii, Lorem Ipsum nie jest tylko
                przypadkowym tekstem. Ma ono korzenie w klasycznej łacińskiej
                literaturze z 45 roku przed Chrystusem, czyli ponad 2000 lat
                temu! Richard McClintock,
                <br></br>
                <br></br> wykładowca łaciny na uniwersytecie Hampden-Sydney w
                Virginii, przyjrzał się uważniej jednemu z najbardziej
                niejasnych słów w Lorem Ipsum – consectetur – i po wielu
                poszukiwaniach odnalazł niezaprzeczalne źródło: Lorem Ipsum
                pochodzi z fragmentów (1.10.32 i 1.10.33) „de Finibus Bonorum et
                Malorum”, czyli „O granicy dobra i zła”, napisanej właśnie w 45
                p.n.e. przez Cycerona. Jest to bardzo popularna w czasach
                renesansu rozprawa na temat etyki. Pierwszy wiersz Lorem Ipsum,
                „Lorem ipsum dolor sit amet...” pochodzi właśnie z sekcji
                1.10.32 wykładowca łaciny na uniwersytecie Hampden-Sydney w
                Virginii, przyjrzał się uważniej jednemu z najbardziej
                niejasnych słów w Lorem Ipsum – consectetur – i po wielu
                poszukiwaniach
                <br></br>
                <br></br>
                odnalazł niezaprzeczalne źródło: Lorem Ipsum pochodzi z
                fragmentów (1.10.32 i 1.10.33) „de Finibus Bonorum et Malorum”,
                czyli „O granicy dobra i zła”, napisanej właśnie w 45 p.n.e.
                przez Cycerona. Jest to bardzo popularna w czasach renesansu
                rozprawa na temat etyki. Pierwszy wiersz Lorem Ipsum, „Lorem
                ipsum dolor sit amet...” pochodzi właśnie z sekcji 1.10.32{" "}
              </p>
            </Collapse>
            <button
              className="flex text-blue-500 hover:underline transition-all"
              onClick={() => setShowText(!showText)}
            >
              {showText ? "Read less" : "Read more"}
            </button>
          </div>
        </div>
        <div className="col-span-4 relative w-full lg:block hidden">
          <div className="rounded-xl  border border-black border-opacity-10 shadow-md p-8 flex flex-col justify-between">
            <div className="flex flex-col  items-center gap-6 justify-between">
              <h1 className="font-semibold text-xl ">
                {propertyDetails[0].title}
              </h1>
              <h1 className="font-semibold text-xl ">
                ${propertyDetails[0].price}
              </h1>
              <h2 className=" text-neutral-500 text-lg flex justify-center items-center gap-1 ">
                <img
                  src="/assets/location.svg"
                  alt="location"
                  className="w-6 h-6 opacity-35"
                />{" "}
                {propertyDetails[0].address}, {propertyDetails[0].city}
              </h2>
              <h2 className=" font-semibold text-lg">
                {propertyDetails[0].type}
              </h2>
            </div>
            <div className="flex flex-col gap-2 border-t border-neutral-200 p-4 pt-6 mt-4">
              <button className="p-4 bg-teal-500 rounded-xl text-white font-semibold hover:bg-teal-600">
                Contact
              </button>

              <button className="p-4 border font-medium border-neutral-500 rounded-xl hover:border-black flex items-center justify-center gap-2">
                <img src="/assets/favorite.svg" alt="fav" className="w-4 h-4" />{" "}
                Save property
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PropertyDetails;
