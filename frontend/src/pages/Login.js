import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function LoginForm() {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Send login request to the backend
    axios.post('/api/login', { username, password })
      .then((response) => {
        // Handle successful login
        console.log(response.data);
        navigate("/home");
      })
      .catch((error) => {
        // Handle login error
        console.error(error);
      });
  };

  return (
    <section className="signup-pages">
      <h1 className="another-text">Login and continue your learning path</h1>
      <img className="login-image" src="./images/login-image.png" alt=""/>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label className="input-label" htmlFor="username">Username:</label>
          <input
            className="inputs"
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="input-label" htmlFor="password">Password:</label>
          <input
            className="inputs"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="other-buttons" type="submit">Login</button>
      </form>
    </section>
  );
}
