import Binitem from "../BinItem/Binitem";
import "./BinsList.css";
import Spinner from "../Spinner/Spinner";
import Message from "../Message/Message";
import { useIcons } from "../../contexts/IconsContext";
import { icon } from "leaflet";

function BinsList() {
  const { icons, isLoading } = useIcons();

  if (isLoading) return <Spinner />;

  if (!icons.length) return <Message message="hello" />;

  return (
    <ul className="binsList">
      {icons.map((icon) => {
        if (icon.icon === "trashIcon")
          return <Binitem icon={icon} key={icon.id} />;
      })}
    </ul>
  );
}

export default BinsList;
