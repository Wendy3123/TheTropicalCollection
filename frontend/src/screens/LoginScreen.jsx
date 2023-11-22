import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { CurrentUser } from "../contexts/CurrentUser.js";
import { Link } from "react-router-dom";
import "../styles/login.css";

function LoginScreen() {
  const navigate = useNavigate();

  const { setCurrentUser } = useContext(CurrentUser);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="login-top-container">
      <div className="login-container">
        <h1>Please Login</h1>
        {errorMessage !== null ? (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        ) : null}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <div className="form-control">
            <input
              id="email"
              name="email"
              type="email"
              required
              value={credentials.email}
              onchange={(e) =>
                setCredentials({
                  ...credentials,
                  [e.target.name]: e.target.value,
                })
              }
              // className="form-control"
            />
          </div>

          <label>Password</label>
          <div className="form-control">
            <input
              type="password"
              required
              value={credentials.password}
              onchange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              // className="form-control"
              id="password"
              name="password"
            />
          </div>
          <button className="login-button">Login</button>

          <p className="login-text">
            Don't have an account?
            <Link to="/signup/">Register</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
