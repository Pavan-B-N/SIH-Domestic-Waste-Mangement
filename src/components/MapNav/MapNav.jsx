import { NavLink } from "react-router-dom";
import "./MapNav.css";

function MapNav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="bins" style={{color:"blue"}}>Bins</NavLink>
        </li>
        <li>
          <NavLink to="offices" style={{color:"yellow"}}>Offices</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MapNav;
