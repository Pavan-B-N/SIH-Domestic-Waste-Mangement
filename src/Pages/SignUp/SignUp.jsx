import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import "../Login/Login.css";
import axios_client from "../../APIs/AxiosClient"
import AppContext from "../../contexts/AppContext"
import { useContext, useState } from "react";
function SignUp() {
  const navigate = useNavigate();
  const {setIsLoggedIn,setAccountType,setToken,setProfile}=useContext(AppContext)
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handelSubmit(e) {
    e.preventDefault()
    try {
      const details={ name,phone,area,email, password }
      console.log(details)
      const { data } = await axios_client.post("/auth/register", details)
      console.log(data)
      setIsLoggedIn(true)
      setAccountType(data.user.accountType)
      setToken(data.token)
      setProfile(data.user)
      navigate("/")
    } catch (err) {
      console.log(err)
      alert("cannot sign in")
    }
  }

  return (
    <div>
      <main className="login-page">
        <form className="form" onSubmit={(e) => handelSubmit(e)}>
          <div className="row">
            <label htmlFor="text">Name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className="row">
            <label htmlFor="password">Phone No</label>
            <input type="tel" onChange={(e)=>setPhone(e.target.value)} />
          </div>
          <div className="row">
            <label htmlFor="password">Area </label>
            <input type="text" onChange={(e)=>setArea(e.target.value)} />
          </div>

          <div className="row">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" onChange={(e)=>setEmail(e.target.value)}   />
          </div>

          <div className="row perti">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)}  />
          </div>

          <div>
            <Button type="primary">Sign Up</Button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default SignUp;
