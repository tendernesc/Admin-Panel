import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"; 

const Login: React.FC = () => {
  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row w-75 shadow rounded overflow-hidden">

        <div className="col-md-6 p-5 bg-white">
          <h2 className="text-primary fw-bold">Admin Panel</h2>
          <h4 className="mb-3">Sign In to The App</h4>
          <form>
            <div className="mb-3">
              <label className="form-label">E-mail</label>
              <div className="input-group">
                <input type="email" className="form-control" placeholder="test@example.com" required />
                <span className="input-group-text">📧</span>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input type="password" className="form-control" placeholder="********" required />
                <span className="input-group-text">👁️</span>
              </div>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
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

