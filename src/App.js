import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Complaint from "./Pages/Complaint/Complaint";
import { Dashboard } from "@mui/icons-material";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import MapLayout from "./Pages/Map/MapLayout";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import { IconsProvider } from "./contexts/IconsContext";
import BinsList from "./components/BinsList/BinsList";
import OfficesList from "./components/OfficesList/OfficesList";
import City from "./components/City/City";

function App() {
  return (
    <div className="app">
      <IconsProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route path="/map" exact element={<MapLayout />}>
              <Route index element={<Navigate replace to="bins" />} />
              <Route path="bins" element={<BinsList />} />
              <Route path="bins/:id" element={<City />} />
              <Route path="offices/:id" element={<City />} />
              <Route path="offices" element={<OfficesList />} />
            </Route>
            <Route path="/register-complaint" exact element={<Complaint />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="*" exact element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </IconsProvider>
    </div>
  );
}

export default App;
