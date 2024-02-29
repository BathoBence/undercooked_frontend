import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"    

import './RegistrationPage.css'
import RegistrationForm from '../../Components/Forms/RegistrationFrom';

const RegistrationPage = () => {

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
          const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: username,
              email,
              password,
            }),
          });
      
          if (response.ok) {
            console.log('Registration successful'); // Handle successful registration
            navigate('/')
          } else {
            console.error('Registration failed'); // Handle registration error
            setErrorMessage('Registration failed. Please try again.');
          }
        } catch (error) {
          console.error(error); // Handle fetch error
          setErrorMessage('Registration failed. Please try again.');
        }
      };



    return <RegistrationForm 
      onRegister = {handleRegister}
      errorMessage = {errorMessage}
      username = {username} setUsername = {setUsername}
      email = {email} setEmail = {setEmail}
      password = {password} setPassword = {setPassword}
      confirmPassword = {confirmPassword} setConfirmPassword = {setConfirmPassword}
    />;
}

export default RegistrationPage;