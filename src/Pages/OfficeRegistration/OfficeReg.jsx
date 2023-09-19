import "./OfficeReg.css";
import Button from "../../components/Button/Button";
import { useState } from "react";

function OfficeReg() {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [area, setArea] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");

  //   console.log(name);
  //   console.log(phoneNo);
  //   console.log(area);
  //   console.log(email);
  //   console.log(location);
  //   console.log(password);

  function handelSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <main className="login-page">
        <h1>Office Register</h1>
        <form className="form" onSubmit={handelSubmit}>
          <div className="row">
            <label htmlFor="text">Name</label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="row">
            <label htmlFor="password">Phone No</label>
            <input type="tel" onChange={(e) => setPhoneNo(e.target.value)} />
          </div>

          <div className="row">
            <label htmlFor="password">Area</label>
            <input type="text" onChange={(e) => setArea(e.target.value)} />
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
            <label htmlFor="password">Location</label>
            <input type="text" onChange={(e) => setLocation(e.target.value)} />
          </div>

          <div className="row">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <Button type="primary">Register</Button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default OfficeReg;
