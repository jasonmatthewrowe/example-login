
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';

let users = JSON.parse(localStorage.getItem('users') || '{}');

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className="container">
      <h2>Welcome to the Home Page</h2>
      <p>Please sign up or log in to continue.</p>
    </div>
  );
}

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!username || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      if (users[username]) {
        setError('Username already exists.');
        return;
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      users[username] = hashedPassword;
      localStorage.setItem('users', JSON.stringify(users));
      setSuccess('User created');
