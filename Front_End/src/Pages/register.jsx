import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './authentication.scss';
import childimg from '../images/kids.jpeg';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  


  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/register', {
        email,
        pass: password,  
      });

      if (response.status === 201) {
        alert('Registration successful');
        navigate('/login');
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('There was an error registering:', error);
      alert('Already user Exist Please Login');
      navigate('/login')
    }
  };

  return (
    <div>
      <div className='register'>
        <div className='container'>
          <div className='body-register'>
            <form onSubmit={submit} method='post'>
              <h1>Register</h1>
              <p id='forlogin'>
                Already Have an Account?{' '}
                <Link to='/login' id='a'>
                  Login
                </Link>
              </p>
              <label htmlFor='email'>Email Address</label>
              <br />
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Email'
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />

              <label htmlFor='password'>Password</label>
              <br />
              <input
                type='password'
                id='pass'
                name='pass'
                placeholder='Password'
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <p id='fpass'>Forgot Password</p>
              <input type='checkbox' id='cbox' />
              <p id='rem'>Remember Me</p>
              <br />
              <button id='reg-btn' type='submit'>
                Register
              </button>
            </form>
            <img src={childimg} alt='childimg' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
