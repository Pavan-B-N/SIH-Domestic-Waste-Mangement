import Sidebar from "../../components/Sidebar/Sidebar";
import "./MapLayout.css";
import Map from "../../components/Map/Map";
import { useGeolocation } from "../../hooks/useGeolocation";
import { useIcons } from "../../contexts/IconsContext";
import { useEffect } from "react";

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in kilometers
  const lat1Rad = (Math.PI * lat1) / 180;
  const lon1Rad = (Math.PI * lon1) / 180;
  const lat2Rad = (Math.PI * lat2) / 180;
  const lon2Rad = (Math.PI * lon2) / 180;

  const dLat = lat2Rad - lat1Rad;
  const dLon = lon2Rad - lon1Rad;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Distance in kilometers

  // Round the distance to two decimal places
  const roundedDistance = parseFloat(distance.toFixed(2));

  return roundedDistance;
}

function MapLayout() {
  console.log("hello");
  //deprecated
  const { icons, isLoading } = useIcons();

  const {
    isLoading: isLoadingPosition,
    position: geoLocationPosition,
    getPosition,
  } = useGeolocation();

  useEffect(function () {
    getPosition();
  }, []);

  useEffect(
    function () {
      return;
    },
    [icons]
  );

  let distance = null;

  if (geoLocationPosition !== null) {
    icons.map((icon) => {
      distance = calculateDistance(
        geoLocationPosition.lat,
        geoLocationPosition.lng,
        icon.position.lat,
        icon.position.lng
      );
      icon.distance = distance;
    });
  }

  console.log(icons);

  return (
    <div>
      <div className="map-container">
        <Sidebar />
        <Map />
      </div>
    </div>
  );
}

export default MapLayout;
