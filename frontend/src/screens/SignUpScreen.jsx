import { useState } from "react";
import { useNavigate } from "react-router";
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

    console.log("user: ", user);
    e.preventDefault();

    await fetch(`http://localhost:5001/api/users/`, {

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

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <div className="form-control">
            <input
              type="name"
              required
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              id="name"
              name="name"
            />
          </div>
          <label htmlFor="email">Email</label>
          <div className="form-control">
            <input
              type="email"
              required
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              id="email"
              name="email"
            />
          </div>

          <label>Password</label>
          <div className="form-control">
            <input
              type="password"
              required
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              id="password"
              name="password"
            />
          </div>
          <button type="submit" className="login-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpScreen;
