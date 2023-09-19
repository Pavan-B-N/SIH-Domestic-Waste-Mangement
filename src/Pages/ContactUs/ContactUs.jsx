import "./ContactUs.css";
import { useState } from "react";
import Button from "../../components/Button/Button";
import profilePic from "../../images/profilePic.png";
import emailIcon from "../../images/emailIcon.png";
import instaIcon from "../../images/instaIcon.png";

function ContactUs() {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [area, setArea] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  function handelSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <main className="contactUs-page">
        <div className="head">
          <h1>Contact Us</h1><br/>
          <h2>Any question ? just write up a message</h2>
        </div>
        <div className="body">
          <div className="bodyRight comm">
            <h1 className="head">Contact Information</h1><br/>
            <div className="leftAlli">
              <div className="display">
                <img className="icon" src={profilePic} alt="Profile Pic"></img>
                <h2>97347230703</h2>
              </div>
              <div className="display">
                <img className="icon" src={emailIcon} alt="Profile Pic"></img>
                <h2>dummy@gmail.com</h2>
              </div>{" "}
              <div className="display">
                <img className="icon" src={instaIcon} alt="Profile Pic"></img>
                <h2>Domestic_Waste_Manegement</h2>
              </div>
            </div>
          </div>
          <div className="bodyLeft comm">
            <form className="form" onSubmit={handelSubmit}>
              <div className="row">
                <label htmlFor="text">Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="row">
                <label htmlFor="password">Phone No</label>
                <input
                  type="tel"
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </div>

              <div className="row">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="row">
                <label htmlFor="password">Message</label>
                <input type="text" onChange={(e) => setArea(e.target.value)} />
              </div>

              <div>
                <Button type="primary">Request</Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
export default ContactUs;
