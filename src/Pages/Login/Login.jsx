import {  useState } from "react";
import "./Login.css";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("zxcv");

  const navigate = useNavigate();
  function handleSubmit(e){

  }

  return (
    <div>
      <main className="login-page">
        <form className="form" onSubmit={handleSubmit}>
          <div className="row">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="row perti">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div>
            <Button type="primary">Login</Button>
          </div>
          <Link
            to="/signup"
            className="signUpTag"
          >
            Sign Up
          </Link>
        </form>
      </main>
    </div>
  );
}
