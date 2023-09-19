import { useState } from "react";
import "./DustBinInst.css";
import Button from "../../components/Button/Button";

function DustBinInst() {
  const [area, setArea] = useState("");
  const [position, setPosition] = useState("");
  const [notes, setNotes] = useState("");
  const [condition, setCondition] = useState("");

  function handelSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <main className="login-page">
        <h1>DustBin Installation</h1>
        <form className="form" onSubmit={handelSubmit}>
          <div className="row">
            <label htmlFor="text">Position</label>
            <input type="text" onChange={(e) => setPosition(e.target.value)} />
          </div>

          <div className="row">
            <label htmlFor="password">Area</label>
            <input type="text" onChange={(e) => setArea(e.target.value)} />
          </div>

          <div className="row">
            <label htmlFor="password">Notes</label>
            <input type="text" onChange={(e) => setNotes(e.target.value)} />
          </div>

          <div className="row">
            <label htmlFor="password">Condition</label>
            <input type="text" onChange={(e) => setCondition(e.target.value)} />
          </div>

          <div>
            <Button type="primary">Install</Button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default DustBinInst;
