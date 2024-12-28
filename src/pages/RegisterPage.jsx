import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/RegisterPage.css';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState(''); // New state for mobile number

  const [message, setMessage] = useState('');
    const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validation: Check if all fields are filled
    if (!name || !email || !mobile || !password) {
      setMessage('Please fill in all fields.');
      return;
    }
  
    try {
      // Send a POST request to the mock API
      const response = await axios.post('http://localhost:5000/users', {
        name,
        email,
        mobile,
        password,
      });
  
      // Update the UI with a success message and clear the input fields
      setMessage('Account created successfully!');
      setName('');
      setEmail('');
      setMobile('');
      setPassword('');
    } catch (error) {
      console.error('Error during registration:', error);
      setMessage('Failed to create an account. Please try again.');
    }
  };
  
  

  return (
    <>
      <Header />
      <div className="register-page">
        <h1>Create Your Account</h1>
        <form className="register-form" onSubmit={handleSubmit}>
  <label>
    Name:
    <input
      type="text"
      placeholder="Enter your name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </label>
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
    Mobile Number:
    <input
      type="tel"
      placeholder="Enter your mobile number"
      value={mobile}
      onChange={(e) => setMobile(e.target.value)}
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
  <button type="submit" className="register-button">Register</button>
</form>

        {message && <p className="message">{message}</p>}
        <div className="info-section">
          <p>
            <a href="/business-account" className="info-link">Buying for work?</a>
            Create a free business account
          </p>
          <p>
            Already have an account? <a onClick={() => navigate('/signin')} className="info-link">Sign in</a>
          </p>
        </div>
        <p className="terms">
          By creating an account or logging in, you agree to Amazon’s{' '}
          <a href="/conditions" className="info-link">Conditions of Use</a> and{' '}
          <a href="/privacy" className="info-link">Privacy Policy</a>.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default RegisterPage;
