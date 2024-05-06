import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import useFilter from "../../hooks/useFilter";
import { LatLngExpression } from "leaflet";
import { useNavigate } from "react-router-dom";

function Map({ heigth, id }: { heigth: number; id?: number | undefined }) {
  const { filteredData } = useFilter();
  const navigate = useNavigate();

  const selectedProperty = filteredData.filter(
    (property) => property.id === id
  );

  const position =
    id === undefined
      ? (filteredData[0]?.position as LatLngExpression)
      : (selectedProperty[0]?.position as LatLngExpression);

  const display_data = id === undefined ? filteredData : selectedProperty;

  return (
    <MapContainer
      center={position}
      zoom={id !== undefined ? 13 : 7}
      scrollWheelZoom={false}
      className={` w-full rounded-2xl shadow-lg`}
      style={{ height: heigth }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[52.2, 21.04]}>
        <Popup>A New Apartment in the City</Popup>
      </Marker>
      <Marker position={[52.21, 21.02]}>
        <Popup>A New Apartment in the City</Popup>
      </Marker> */}
      {display_data?.map((marker) => {
        return (
          <Marker
            key={marker.id}
            position={marker.position as LatLngExpression}
          >
            <Popup className="">
              <div className="flex flex-col justify-center gap-3 items-center h-[400px] w-[250px]">
                <img
                  src={marker.image}
                  alt="property"
                  className="rounded-xl shadow-lg "
                />
                <div className="flex flex-col justify-center items-center gap-2">
                  <h1 className="font-bold text-lg text-center">
                    {marker.title}
                  </h1>
                  <h1 className="font-semibold text-lg text-teal-500 tracking-wider">
                    {marker.price}$
                  </h1>
                </div>
                <hr className="border-b w-full border-neutral-100"></hr>
                <span className="text-slate-500 flex justify-center items-center gap-1">
                  <img
                    src="/assets/location.svg"
                    alt="location"
                    className="w-4 h-4 opacity-35 mb-[3px]"
                  />
                  {marker.address}, {marker.city}
                </span>
                <span className="text-slate-800 font-semibold tracking-wider">
                  {marker.type}
                </span>
                <hr className="border-b w-full border-neutral-100"></hr>
                {id === undefined ? (
                  <button
                    onClick={() => {
                      navigate(`/property/${marker.id}`);
                    }}
                    className="bg-teal-500 p-2 pr-3 pl-3 font-semibold hover:bg-teal-600 text-white rounded-xl"
                  >
                    Check details
                  </button>
                ) : null}
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default Map;
