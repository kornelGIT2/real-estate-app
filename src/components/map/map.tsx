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
              <div className="flex flex-col justify-center gap-4 items-center h-[300px] w-[200px]">
                <img
                  src={marker.image}
                  alt="property"
                  className="rounded-xl shadow-lg "
                />
                <h1 className="font-bold text-xl">{marker.price}$</h1>
                <span className="text-slate-500">{marker.address}</span>
                <span className="text-slate-800">{marker.type}</span>
                {id === undefined ? (
                  <button
                    onClick={() => {
                      navigate(`/property/${marker.id}`);
                    }}
                    className="bg-teal-500 p-2 pr-3 pl-3 font-semibold hover:bg-teal-600 text-white rounded-xl"
                  >
                    Check Details
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
