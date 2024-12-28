import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

import '../styles/SignInPage.css';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:5000/users');
      const users = response.data;

      const user = users.find((u) => u.email === email);

      if (user) {
        if (user.password === password) {
          setMessage('Sign in successfully!');
          setUser(user);
          setEmail('');
          setPassword('');
          navigate('/');
        } else {
          setMessage('Incorrect password.');
        }
      } else {
        setMessage('Email not found.');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <Header />
      <div className="signin-page">
        <h1>Sign-In</h1>
        <form className="signin-form" onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit" className="signin-button">Sign In</button>
        </form>
        {message && <p className="signin-message">{message}</p>}
        <div className="signin-options">
          <p>
            <a href="/forgot-password" className="signin-link">Forgot Password?</a>
          </p>
          <p>
            New to our site? <a href="/register" className="signin-link">Register here</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignInPage;
