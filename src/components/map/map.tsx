import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import useFilter from "../../hooks/useFilter";
import { LatLngExpression } from "leaflet";

function Map() {
  const { filteredData } = useFilter();

  return (
    <MapContainer
      center={[52.2, 21.04]}
      zoom={13}
      scrollWheelZoom={false}
      className="h-[700px] w-full rounded-2xl shadow-lg"
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
      {filteredData?.map((marker) => {
        return (
          <Marker
            key={marker.id}
            position={marker.position as LatLngExpression}
          >
            <Popup className="">
              <div className="flex flex-col gap-3 items-center">
                <img
                  src={marker.image}
                  alt="property"
                  className="rounded-xl shadow-lg"
                />
                <h1 className="font-bold">{marker.price}$</h1>
                <span className="text-slate-500">{marker.adress}</span>
                <button className="bg-teal-500 p-2 pr-3 pl-3 font-semibold hover:bg-teal-600 text-white rounded-2xl">
                  Check Details
                </button>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default Map;
