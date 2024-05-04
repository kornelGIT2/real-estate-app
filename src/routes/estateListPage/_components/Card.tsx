import { useNavigate } from "react-router-dom";
import Modal from "../../../components/modal/Modal";
import SkeletonLoading from "./SkeletonLoading";

interface Card {
  title: string;
  price: number;
  adress: string;
  city: string;
  image: string;
  bedroom: number;
  bathroom: number;
  info: { type: number; desc: string } | null;
  loading: boolean;
  dimensions: number;
  id: number;
}

function Card({
  price,
  adress,
  city,
  image,
  bedroom,
  bathroom,
  info,
  loading,
  dimensions,
  id,
}: Card) {
  const navigate = useNavigate();

  if (loading) return <SkeletonLoading />;
  return (
    <div className="w-full   grid md:grid-cols-2 rounded-3xl  gap-2   justify-center items-center ">
      <div className="h-full relative">
        <img
          src={image}
          alt="apartment"
          className="h-full object-cover rounded-xl hover:brightness-100 hover:cursor-pointer transition-all brightness-90"
          onClick={() => {
            navigate(`/property/${id}`);
          }}
        />
        {info !== null ? (
          <small className="bg-slate-50 opacity-95  rounded-xl absolute bottom-0 text-lg text-slate-500 left-0 p-1 pl-2 pr-2 m-2 flex items-center gap-2 justify-center">
            <div className="relative h-3 w-3">
              {info!.type === 1 && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full right-0 bg-teal-400 opacity-70"></span>
              )}
              {info!.type === 1 ? (
                <span className="relative flex rounded-full h-3 w-3 bg-teal-500"></span>
              ) : (
                <span className="relative flex rounded-full h-3 w-3 bg-gray-400"></span>
              )}
            </div>

            <small className="text-sm">{info!.desc}</small>
          </small>
        ) : null}
      </div>
      <div className="flex w-full h-full justify-between p-4">
        <div className="flex flex-col items-start space-y-8 w-full justify-between ">
          <span className="font-semibold text-3xl text-teal-500 tracking-wide">
            {price}$
          </span>
          <span className="text-slate-500 opacity-80 flex items-center gap-1">
            <img
              src={"/assets/location.svg"}
              alt="apartment"
              className="h-4 w-4 opacity-50"
            />{" "}
            {adress}, {city}
          </span>
          <span className="text-slate-500 opacity-80 flex items-center gap-2">
            {" "}
            <img
              src={"/assets/dimensions.svg"}
              alt="apartment"
              className="h-4 w-4 opacity-50"
            />{" "}
            <span>
              {dimensions}m<sup>2</sup>
            </span>
          </span>
          <div className="flex gap-4">
            {" "}
            <span className="bg-neutral-100 rounded-xl p-1 pr-2 pl-2 flex items-center gap-1">
              <img
                src={"/assets/bedroom.svg"}
                alt="apartment"
                className="h-4 w-4"
              />{" "}
              <span className="text-slate-500 text-sm">{bedroom} bedrooms</span>
            </span>
            <span className="bg-neutral-100 rounded-xl p-1 pr-2 pl-2 flex items-center gap-1">
              <img
                src={"/assets/bathroom.svg"}
                alt="apartment"
                className="h-4 w-4"
              />{" "}
              <span className="text-slate-500 text-sm">
                {bathroom} bathrooms
              </span>
            </span>
          </div>
        </div>
        <div className="flex items-end justify-center gap-4">
          <Modal />
          <button className="">
            <img
              src={"/assets/contact.svg"}
              alt="apartment"
              className="h-7 w-7 hover:opacity-50 hover:cursor-pointer"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
