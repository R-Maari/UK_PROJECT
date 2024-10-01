import React, { Component } from 'react'
import Logo from "../images/theos.png";
import Sideimage from "../images/bgimg.jpg";
import "./studentlogin.scss";

export class studentlogin extends Component {
  render() {
    return (
      <div>
        <div className='std-login-header'>
          <img src={Logo} alt='std-login-logo'></img>
          <span id='first-logo-name'>THEOS EDUCATIONAL ACADEMY</span><br></br>
          <span id='second-logo-name'>THRIVING FOR PERFECTION</span>
        </div>

        <div className='container-std-login'>
          <img src={Sideimage} alt='std-login-sideimage'></img>
        </div>

        <div className='form-container'>
          <h1>STUDENT LOGIN</h1>

        </div>

      </div>
    )
  }
}

export default studentlogin
