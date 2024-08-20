import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './authentication.scss';
import childimg from '../images/kidlog.jpeg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Initialize useNavigate hook

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        pass: password,
      });

      if (response.status === 200) {
        alert("Login Successful");
        navigate('/home');  // Redirect to home.jsx
      }
    } catch (err) {
      alert("Login Failed");
    }
  };

  return (
    <div className='login'>
      <div className='container'>
        <div className='body-register'>
          <form onSubmit={submit} >
            <h1>Login</h1>
            <p id='forlogin'>
              Don't have an account? <Link to='/register' id='a'>Register</Link>
            </p>
            <label htmlFor='email'>Email Address</label><br/>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Email'
              required
              onChange={(e) => setEmail(e.target.value)}
            /><br/>
            <label htmlFor='password'>Password</label><br/>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              required
              onChange={(e) => setPassword(e.target.value)}
            /><br/>
            <p id='fpass'>Forgot Password?</p>
            <input type='checkbox' id='cbox' /><p id='rem'>Remember Me</p><br/>
            <button id='reg-btn' type='submit'>Login</button>
          </form>
          <img src={childimg} alt='childimg' id='img' />
        </div>
      </div>
    </div>
  );
};

export default Login;
