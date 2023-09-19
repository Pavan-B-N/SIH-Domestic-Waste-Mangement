import "./Profile.css";
import profilePic from "../../images/profilePic.png";
import { useContext, useState } from "react";
import Button from "../../components/Button/Button";
import AppContext from "../../contexts/AppContext";
function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("dummy@gmail.com");
  const [area, setArea] = useState("bengaluru");

  const {profile}=useContext(AppContext)

  function logout(){
    window.location.reload();
  }
  return (
    <div>
      <main className="profile-page">
        <h1>Account Type is  {profile.accountType}</h1><br/>
        <img className="profilePic" src={profilePic} alt="Profile Pic"></img>
        <h1 className="profileH2">Name : {profile.name}</h1>
        <h1 className="profileH2">Email : {profile.email}</h1>
        <h1 className="area profileH2">Area : {profile.area}</h1>

        <div className="LogOutBtn">
          <Button type="primary" onClick={logout}>Log Out</Button>
        </div>
      </main>
    </div>
  );
}

export default Profile;
