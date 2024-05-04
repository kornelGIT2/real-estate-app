function Info() {
  return (
    <div className="mt-10  w-full flex flex-col items-start p-4 gap-6 mb-10">
      <h1 className="font-bold text-3xl text-teal-500">Explore Properties </h1>
      <div className="flex gap-2 font-medium text-sm">
        <button className="border-2 border-slate-600 rounded-3xl p-1 pl-4 pr-4">
          Buying
        </button>
        <button className="border border-slate-300 rounded-3xl p-1 pl-4 pr-4">
          Renting
        </button>
        <button className="border border-slate-300 rounded-3xl p-1 pl-4 pr-4">
          Researching
        </button>
      </div>

      <div className="w-full">
        <ul className="grid md:grid-cols-3 gap-2 text-start">
          <li className="border-2 border-slate-100 rounded-xl  grid grid-rows-2 p-4 gap-2  ">
            <img src="/assets/img.jpg" alt="img" className="h-20 w-20" />
            <div className="flex flex-col ">
              <h1 className="font-bold">Get estimated property prices</h1>
              <p className="text-neutral-500">
                Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz
                w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.
              </p>
            </div>
          </li>
          <li className="border-2 border-slate-100 rounded-xl  grid grid-rows-2 p-4 gap-2  ">
            <img src="/assets/img.jpg" alt="img" className="h-20 w-20" />
            <div className="flex flex-col">
              <h1 className="font-bold">Need help with a mortage?</h1>
              <p className="text-neutral-500">
                Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz
                w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.
              </p>
            </div>
          </li>
          <li className="border-2 border-slate-100 rounded-xl  grid grid-rows-2 p-4 gap-2  ">
            <img src="/assets/img.jpg" alt="img" className="h-20 w-20" />
            <div className="flex flex-col">
              <h1 className="font-bold">Expole suburb profiles</h1>
              <p className="text-neutral-500">
                Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Info;
