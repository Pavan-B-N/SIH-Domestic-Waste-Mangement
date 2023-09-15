import { Outlet } from "react-router-dom";
import "./Sidebar.css";
import MapNav from "../MapNav/MapNav";

function Sidebar() {
  return (
    <div className="sidebar">
      <MapNav />
      <Outlet />
    </div>
  );
}

export default Sidebar;
