import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"; 
import { login } from "../ultils/api"; 

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const data = await login(email, password);
      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/admin"); 
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("Login failed");
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row w-75 shadow rounded overflow-hidden">
        <div className="col-md-6 p-5 bg-white">
          <h2 className="text-primary fw-bold">Admin Panel</h2>
          <h4 className="mb-3">Sign In to The App</h4>
          
          {error && <div className="alert alert-danger">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">E-mail</label>
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="test@example.com" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
                <span className="input-group-text">📧</span>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="********" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
                <span className="input-group-text">👁️</span>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">Sign In</button>
            <div className="d-flex justify-content-between mt-3">
              <Link to="/forgot-password" className="text-decoration-none">Forgot password?</Link>
              <Link to="/signup" className="text-decoration-none">Sign up</Link>
            </div>
          </form>
        </div>

        <div className="col-md-6 login-right"></div>
      </div>
    </div>
  );
};

export default Login;

