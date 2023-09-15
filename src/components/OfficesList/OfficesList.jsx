import "./OfficesList.css";
import Spinner from "../Spinner/Spinner";
import Message from "../Message/Message";
import OfficeItem from "../OfficeItem/OfficeItem";
// import { useOffice } from "../contexts/officeContext";
import { useIcons } from "../../contexts/IconsContext";

function OfficesList() {
  const { icons, isLoading } = useIcons();

  if (isLoading) return <Spinner />;

  if (!icons.length) return <Message message="hello" />;

  // const offices = bins.reduce((arr, city) => {
  //   if (!arr.map((el) => el.country).includes(city.country))
  //     return [...arr, { country: city.country, emoji: city.emoji }];
  //   else return arr;
  // }, []);

  return (
    <ul className="officeList">
      {icons.map((icon) => {
        if (icon.icon === "officeIcon")
          return <OfficeItem icon={icon} key={icon.id} />;
      })}
    </ul>
  );
}

export default OfficesList;
