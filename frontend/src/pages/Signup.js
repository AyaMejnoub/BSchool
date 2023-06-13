import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


function Signup() {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== retypePassword) {
      setError("Passwords do not match");
      return;
    }

    // Send signup request to the backend
    axios.post('/api/signup', { username, password })
      .then((response) => {
        // Handle successful signup
        console.log(response.data);
        navigate("/welcome");
      })
      .catch((error) => {
        // Handle signup error
        console.error(error.response.data);
      });
  };

  return (
    <section className="signup-pages">
      <h1 className="another-text">Sign-up and Start your learning path</h1>
      <img className="login-image" src="./images/login-image.png" alt=""/>
      <form onSubmit={handleSignup} className="login-form">
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
        <div className="form-group">
          <label className="input-label" htmlFor="retypePassword">Retype Password:</label>
          <input
            className="inputs"
            type="password"
            id="retypePassword"
            name="retypePassword"
            placeholder="Retype your password"
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button className="other-buttons" type="submit">Signup</button>
      </form>
    </section>
  );
}

export default Signup;