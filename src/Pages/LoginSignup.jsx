import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const mockLogin = () => {
    // Mock successful login
    const mockToken = "mock-auth-token";
    localStorage.setItem("auth-token", mockToken);
    alert("Login successful! Token: " + mockToken);
    window.location.replace("/");
  };

  const mockSignup = () => {
    // Mock successful signup
    const mockToken = "mock-auth-token";
    localStorage.setItem("auth-token", mockToken);
    alert("Signup successful! Token: " + mockToken);
    window.location.replace("/");
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? <input type="text" placeholder="Your name" name="username" value={formData.username} onChange={changeHandler} /> : <></>}
          <input type="email" placeholder="Email address" name="email" value={formData.email} onChange={changeHandler} />
          <input type="password" placeholder="Password" name="password" value={formData.password} onChange={changeHandler} />
        </div>

        <button onClick={() => { state === "Login" ? mockLogin() : mockSignup() }}>Continue</button>

        {state === "Login" ?
          <p className="loginsignup-login">Create an account? <span onClick={() => { setState("Sign Up") }}>Click here</span></p>
          : <p className="loginsignup-login">Already have an account? <span onClick={() => { setState("Login") }}>Login here</span></p>}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
