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

    const response = await fetch(`/authentication/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    console.log(data);
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
              type="email"
              required
              onchange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              id="email"
              name="email"
            />
          </div>

          <label>Password</label>
          <div className="form-control">
            <input
              type="password"
              required
              onchange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              id="password"
              name="password"
            />
          </div>
          <button className="login-button">Login</button>

          <p className="login-text">
            Don't have an account?
            <Link to="/signup/">&nbsp;Register</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
