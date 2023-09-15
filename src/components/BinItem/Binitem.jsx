import { Link } from "react-router-dom";
import "./Binitem.css";
import { useIcons } from "../../contexts/IconsContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function Binitem({ icon }) {
  const { currentIcon } = useIcons();
  const { iconName, emoji, area, id, position } = icon;

  return (
    <li>
      <Link
        className={`${"binItem"} ${
          id === currentIcon.id ? "binItem--active" : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className="emoji">{emoji}</span>
        <span className="name">{iconName}</span>
        <span className="date">{area}</span>
      </Link>
    </li>
  );
}

export default Binitem;
