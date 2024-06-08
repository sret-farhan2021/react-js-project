import React from "react";
import { useNavigate } from 'react-router-dom';
import "./styles.css"; // Import the external CSS file


const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Redirect to the Home page
    navigate("/home");
  };

  return (
    <div className="login-container">
      <h3>S.E.N.S.E.C.A.R.E</h3>
      <h4>Secure electronic network for safety emergency notification and care access with record encryption</h4>
      <div className="button-row">
        <button className="login-button" onClick={handleLogin}> 
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
