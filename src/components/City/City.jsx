import { useParams } from "react-router-dom";
import "./City.css";
import { useIcons } from "../../contexts/IconsContext";
import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import BackButton from "../Button/BackButton";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  const { getIcon, currentIcon, isLoading, icons } = useIcons();
  const { iconName, emoji, area, notes, distance, condition } = currentIcon;

  console.log(distance);

  const [shouldRender, setShouldRender] = useState(true);

  // Function to toggle the condition
  const toggleRender = () => {
    if (distance === null) setShouldRender(!shouldRender);
  };

  useEffect(() => {
    // This effect runs whenever shouldRender changes
    // You can place any additional logic here
  }, [shouldRender]);

  toggleRender();

  useEffect(
    function () {
      getIcon(id);
    },
    [id]
  );

  if (isLoading) return <Spinner />;

  icons.map((icon) => {
    if (icon.id === currentIcon.id) {
      currentIcon.distance = icon.distance;
    }
  });

  return (
    <div className="city">
      <div className="row">
        <h6>name</h6>
        <h3>
          <span>{emoji}</span> {iconName}
        </h3>
      </div>

      <div className="row">
        <h6>
          {"area"} : {id}{" "}
        </h6>
        <p>{area}</p>
      </div>

      <div className="row">
        <h6>Approximate distance from your Location</h6>
        <p>{distance} km</p>
      </div>
      {condition !== null ? (
        <div className="row">
          <h6>Condition</h6>
          <p>{condition}</p>
        </div>
      ) : (
        console.log("")
      )}

      {notes && (
        <div className="row">
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      {/* <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div> */}

      <div>
        <BackButton />
      </div>
    </div>
  );
}

export default City;
