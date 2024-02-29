import React, { useState } from 'react';

import './Login.css'
import LoginForm from '../../Components/Forms/LoginForm';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        //Need to implement login logic
        console.log("success")
    }

    return <LoginForm 
    username = {username}
    setUsername = {setUsername} 
    password = {password} 
    setPassword = {setPassword}
    onLogin = {handleLogin}/>
}

export default LoginPage;