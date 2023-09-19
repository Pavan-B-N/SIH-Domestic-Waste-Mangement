import {  useContext, useState } from "react";
import "./Login.css";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios_client from "../../APIs/AxiosClient"
import AppContext from "../../contexts/AppContext"

export default function Login() {
  const naviagate=useNavigate()
  const {setIsLoggedIn,setAccountType,setToken,setProfile}=useContext(AppContext)
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e){
    e.preventDefault()
    try{
      const {data}=await axios_client.post("/auth/login",{email,password})
      console.log(data)
      setIsLoggedIn(true)
      setAccountType(data.user.accountType)
      setToken(data.token)
      setProfile(data.user)
      naviagate("/")
    }catch(err){
      console.log(err)
      alert("cannot log in")
    }
  }

  return (
    <div>
      <main className="login-page">
        <form className="form" onSubmit={(e)=>handleSubmit(e)}>
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
