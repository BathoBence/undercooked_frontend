import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"    

import './Registation.css'
import { useNavigate } from 'react-router-dom';

const RegistationPage = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
      
        // Validate password format
        const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
          setErrorMessage('Password must contain at least one number and one capital letter, and be at least 6 characters long.');
          return;
        }
      
        // Check if passwords match
        if (password !== confirmPassword) {
          setErrorMessage('Passwords do not match.');
          return;
        }
      
        try {
          const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username,
              email,
              password,
            }),
          });
      
          if (response.ok) {
            console.log('Registration successful'); // Handle successful registration
            navigate('/home')
          } else {
            console.error('Registration failed'); // Handle registration error
            setErrorMessage('Registration failed. Please try again.');
          }
        } catch (error) {
          console.error(error); // Handle fetch error
          setErrorMessage('Registration failed. Please try again.');
        }
      };



    return (
        <div className='register'>
          <form onSubmit={handleRegister}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div style={{ color: 'red' }}>{errorMessage}</div>
            <button type="submit">Register</button>
          </form>
        </div>
      );
}

export default RegistationPage;