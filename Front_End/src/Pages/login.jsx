import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './authentication.scss'
import childimg  from '../images/kidlog.jpeg'

export class login extends Component {
  render() {
    return (
      <div>
        <div className='register'>
            <div className='container'>
            <div className='body-register'>
            <img src={childimg} alt='childimg' id='img'></img>

                <form id='form'>
                    <h1>Login</h1>
                    <p id='forlogin'>Already Have an Account <Link to='/register' id='a'>Signup</Link></p>
                    <label for='email'>Email Address </label><br></br>
                        <input type='email' id='email' name='email' placeholder='Email' required></input><br></br>
                   
                    <label for='password'>Password</label><br></br>
                        <input  type='password' id='pass' name='pass' placeholder='Password' required></input><br></br>
                    <p id='fpass'>Forgot Password</p>
                    <input type='checkbox' id='cbox' ></input><p id='rem'>Remember Me</p><br></br>
                    <button id='log-btn' >Login</button>

                </form>
            </div>
            </div>
        </div>
      </div>
    )
  }
}

export default login
