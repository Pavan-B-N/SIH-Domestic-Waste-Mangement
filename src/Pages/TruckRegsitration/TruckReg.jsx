import "./TruckReg.css";
import { useState } from "react";
import Button from "../../components/Button/Button";

function TruckReg() {
  const [area, setArea] = useState("");
  const [category, setCategory] = useState("wet");
  const [id, setId] = useState("");

  function handelSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <main className="login-page">
        <h1>Truck Register</h1>
        <form className="form" onSubmit={handelSubmit}>
          <div className="row">
            <label htmlFor="text">Area</label>
            <input type="text" onChange={(e) => setArea(e.target.value)} />
          </div>

          <div className="row">
            <label htmlFor="text">Truck Category</label>
            <select
              name="truck"
              className="dropDow"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="dry">dry</option>
              <option value="wet" selected>
                wet
              </option>
              <option value="electronic">electronic</option>
            </select>
          </div>

          <div className="row">
            <label htmlFor="password">Workers ID</label>
            <input type="text" onChange={(e) => setId(e.target.value)} />
          </div>

          <div>
            <Button type="primary">Register</Button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default TruckReg;
