import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Complaint from "./Pages/Complaint/Complaint";

import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Profile/Profile";
import ContactUs from "./Pages/ContactUs/ContactUs";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import MapLayout from "./Pages/Map/MapLayout";
import { IconsProvider } from "./contexts/IconsContext";
import BinsList from "./components/BinsList/BinsList";
import OfficesList from "./components/OfficesList/OfficesList";
import City from "./components/City/City";

import AppContext from "./contexts/AppContext"
import { useContext } from "react";
import DustBinInst from "./Pages/DustBinInstallation/DustBinInst";
import EmpRegForm from "./Pages/EmployeeRegistrationForm/EmpRegForm";
import OfficeReg from "./Pages/OfficeRegistration/OfficeReg";
import TruckReg from "./Pages/TruckRegsitration/TruckReg";

function App() {
  const { isLoggedIn } = useContext(AppContext)

  return (
    <div className="app">
      <IconsProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />

            {
              !isLoggedIn && <Route path="/login" exact element={<Login />} />
            }
            {
              !isLoggedIn && <Route path="/signup" exact element={<SignUp />} />
            }
            <Route path="/map" exact element={<MapLayout />}>
              <Route index element={<Navigate replace to="bins" />} />
              <Route path="bins" element={<BinsList />} />
              <Route path="bins/:id" element={<City />} />
              <Route path="offices/:id" element={<City />} />
              <Route path="offices" element={<OfficesList />} />
            </Route>
            {
              isLoggedIn && <Route path="/register-complaint" exact element={<Complaint />} />
            }
            {
              isLoggedIn ? <Route path="/dashboard" exact element={<Dashboard />} /> : <Route path="/login" exact element={<Login />} />
            }
            
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/install-dustbin" element={<DustBinInst />} />
            <Route path="/add-bbmp-office" element={<OfficeReg />} />
            <Route path="/connect-grabage-truck" element={<TruckReg />} />
            <Route path="/appoint-worker" element={<EmpRegForm />} />
            {isLoggedIn && <Route path="/profile" element={<Profile/>} />}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </IconsProvider>
    </div>
  );
}

export default App;
