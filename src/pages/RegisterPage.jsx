// components/RegisterPage.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/RegisterPage.css'; // Import styles for the register page

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log({ name, email, password });
  };

  return (
    <>
    <Header></Header>
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
    </div>
    <Footer></Footer>
    </>
  );
};

export default RegisterPage;
