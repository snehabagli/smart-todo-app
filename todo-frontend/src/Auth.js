import { useState } from "react";
import axios from "axios";
import "./App.css";

const API = "http://localhost:5000/api/auth";

function Auth({ onLogin }) {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      if (isSignup) {
        // SIGN UP
        await axios.post(`${API}/register`, {
          name,
          email,
          password,
        });

        alert("Signup successful. Please login ✨");
        setIsSignup(false);
        setName("");
        setEmail("");
        setPassword("");
      } else {
        // LOGIN
        const res = await axios.post(`${API}/login`, {
          email,
          password,
        });

        localStorage.setItem("token", res.data.token);
        onLogin();
      }
    } catch (error) {
      console.error("AUTH ERROR:", error.response?.data || error.message);
      alert(
        error.response?.data?.message ||
          "Authentication failed. Check backend."
      );
    }
  };

  return (
    <div className="app-container">
      <div className="auth-card">
        <h2>{isSignup ? "Create Account" : "Welcome Back"}</h2>

        {isSignup && (
          <div className="field">
            <input
              type="text"
              required
              placeholder=" "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Name</label>
          </div>
        )}

        <div className="field">
          <input
            type="email"
            required
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>

        <div className="field">
          <input
            type="password"
            required
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>

        <button onClick={handleSubmit}>
          {isSignup ? "Sign Up" : "Login"}
        </button>

        <div className="switch">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <span onClick={() => setIsSignup(false)}>Login</span>
            </>
          ) : (
            <>
              New here?{" "}
              <span onClick={() => setIsSignup(true)}>Create Account</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;
