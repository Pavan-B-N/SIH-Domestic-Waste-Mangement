import { useSearchParams } from "react-router-dom";
import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import { useIcons } from "../../contexts/IconsContext";
import { useGeolocation } from "../../hooks/useGeolocation";
import Button from "../Button/Button";
import L from "leaflet"; // Make sure to import the 'leaflet' library
import trashIcon from "../../images/trash.png";
import officeIcon from "../../images/office.png";
import currentLocIcon from "../../images/currentLoc.png";
// import "react-leaflet/react-leaflet.css";
<link
  rel="stylesheet"
  href="https://unpkg.com/react-leaflet@3.2.2/dist/react-leaflet.css"
/>;

function GetIcon(Mapicon) {
  return L.icon({
    iconUrl: Mapicon, // Use the imported variable for the iconUrl
    iconSize: [40, 40], // Use an array for iconSize
  });
}

function Map() {
  const { icons } = useIcons();

  const {
    isLoading: isLoadingPosition,
    position: geoLocationPosition,
    getPosition,
  } = useGeolocation();

  useEffect(function () {
    getPosition();
  }, []);

  const [mapPosition, setMapPosition] = useState([13, 77]);

  const [searchParams, setSearchParams] = useSearchParams();

  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  useEffect(
    function () {
      if (geoLocationPosition)
        setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
    },
    [geoLocationPosition]
  );

  return (
    <div className="mapContainer00">
      <Button type="position" onClick={getPosition}>
        {isLoadingPosition ? "Loading..." : "Use your position"}
      </Button>
      <MapContainer
        center={mapPosition}
        zoom={15}
        scrollWheelZoom={true}
        className="map00"
      >
        <TileLayer
          url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          maxZoom={18}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />
        {/* {bins.map((bin) => (
          <Marker position={mapPosition}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))} */}
        {icons.map((icon) => (
          <Marker
            key={icon.id}
            position={[icon.position.lat, icon.position.lng]}
            icon={
              icon.icon === "trashIcon"
                ? GetIcon(trashIcon)
                : GetIcon(officeIcon)
            }
          >
            <Popup>
              <span>{icon.emoji}</span>
              <span>{icon.iconName}</span>
            </Popup>
          </Marker>
        ))}
        {geoLocationPosition !== null ? (
          <Marker
            key={geoLocationPosition.lat}
            position={[geoLocationPosition.lat, geoLocationPosition.lng]}
            icon={GetIcon(currentLocIcon)}
          >
            <Popup>
              <span>📌</span>
              <span>your location</span>
            </Popup>
          </Marker>
        ) : (
          console.log("loading")
        )}

        <ChangeCenter position={mapPosition} />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default Map;

{
  /* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */
}
{
  /* <TileLayer
          attribution="Google Maps"
          url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
        /> */
}

// 13.115585, 77.633392
// 13.116264, 77.633037
// 13.118677, 77.632973
// 13.114174, 77.633542
// 13.113094, 77.631167
