import "./EmpRegForm.css";
import { useState } from "react";
import Button from "../../components/Button/Button";

function EmpRegForm() {
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
      <main className="login-page">
        <h1>Employee Register</h1>
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
            <label htmlFor="password">Role</label>
            <input type="text" onChange={(e) => setRole(e.target.value)} />
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
            <label htmlFor="password">Area</label>
            <input type="text" onChange={(e) => setArea(e.target.value)} />
          </div>

          <div>
            <Button type="primary">Register</Button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default EmpRegForm;

// function SignUp() {
//   const navigate = useNavigate();
//   function handelSubmit(e) {
//     e.preventDefault();
//   }
// }
