import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import "../styles/login.css";

function SignUpScreen() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch(`/api/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    navigate(`/`);
  }
  return (
    <div className="login-top-container">
      <div className="login-container">
        <h1>Please Register</h1>
        {/* {errorMessage !== null
                     ? (
                         <div className="alert alert-danger" role="alert">
                             {errorMessage}
                         </div>
                     )
                     : null
                 }  */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <div className="form-control">
            <input
              type="name"
              required
              //  value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              // className="form-control"
              id="name"
              name="name"
            />
          </div>
          <label htmlFor="email">Email</label>
          <div className="form-control">
            <input
              type="email"
              required
              //  value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              // className="form-control"
              id="email"
              name="email"
            />
          </div>

          <label>Password</label>
          <div className="form-control">
            <input
              type="password"
              required
              //  value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              // className="form-control"
              id="password"
              name="password"
            />
          </div>
          <button className="login-button" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpScreen;
