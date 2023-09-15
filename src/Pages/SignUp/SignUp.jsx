import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import  "../Login/Login.css";
function SignUp() {
  const navigate = useNavigate();
  function handelSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <main className="login-page">
        <form className="form" onSubmit={handelSubmit}>
          <div className="row">
            <label htmlFor="text">Name</label>
            <input type="text" />
          </div>
          <div className="row">
            <label htmlFor="password">Phone No</label>
            <input type="tel" />
          </div>
          <div className="row">
            <label htmlFor="password">City Name</label>
            <input type="text" />
          </div>

          <div className="row">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" />
          </div>

          <div className="row perti">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
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
