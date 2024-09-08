import React, { Component } from 'react';
import './index.scss';
import Logo from '../images/theos.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight, faClose, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import { Link } from 'react-router-dom';
import StaffRegistration from './staffregistration';

export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTutionCheck: true,
      ads: true,
      showStudentForm: true,  // Show student form by default
      showStaffForm: false
    };
  }

  handleHideClick = () => {
    this.setState({ showTutionCheck: false });
  };

  handleAdsClick = () => {
    this.setState({ ads: false });
  };

  showStudentForm = () => {
    this.setState({ showStudentForm: true, showStaffForm: false });
  };

  showStaffForm = () => {
    this.setState({ showStudentForm: false, showStaffForm: true });
  };

  render() {
    return (
      <div>
        <div className='container'>
          <header className='nav-bar'>
            <img src={Logo} alt='logo' />
            <p id='logo-name'>
              <span id='logo-first-name'>Theos Education Academy</span>
              <br />
              <span id='logo-second-name'>Thriving For Perfection</span>
            </p>
            <nav id='nav-bar-list'>
              <li className="dropdown">
                Classes <FontAwesomeIcon icon={faCaretDown} />
                <ul className="dropdown-content">
                  <li className='dropright'>Online <FontAwesomeIcon id='arrowright' icon={faCaretRight} />
                    <ul className='dropright-content'>
                      <li>Theos Education Academy</li>
                    </ul>
                  </li>
                  <li className='dropright'>Offline <FontAwesomeIcon id='arrowright' icon={faCaretRight} />
                    <ul className='dropright-content'>
                      <li>UK England</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                Subjects <FontAwesomeIcon icon={faCaretDown} />
                <ul className="dropdown-content">
                  <li>Math <FontAwesomeIcon id='arrowright' icon={faCaretRight} /></li>
                  <li>Science <FontAwesomeIcon id='arrowright' icon={faCaretRight} /></li>
                  <li>History <FontAwesomeIcon id='arrowright' icon={faCaretRight} /></li>
                </ul>
              </li>
              <li className="dropdown">
                TTC <FontAwesomeIcon icon={faCaretDown} />
                <ul className="dropdown-content">
                  <li>UK England <FontAwesomeIcon id='arrowright' icon={faCaretRight} /></li>
                  <li>TN India <FontAwesomeIcon id='arrowright' icon={faCaretRight} /></li>
                </ul>
              </li>
              <li className='dropdown'>
                Exams <FontAwesomeIcon icon={faCaretDown} />
                <ul className='dropdown-content'>
                  <li>NEET <FontAwesomeIcon id='arrowright' icon={faCaretRight} /></li>
                  <li>VIT <FontAwesomeIcon id='arrowright' icon={faCaretRight} /></li>
                </ul>
              </li>
              <li>
                Success Stories
              </li>
              <button id='login-btn'>Login</button>
              <a href="tel:+919778550817" data-tooltip-id="phone-tooltip" data-tooltip-content="+919778550817">
                <FontAwesomeIcon id='toll-free' icon={faPhone} />
              </a>
              <Tooltip id="phone-tooltip" place="bottom" type="dark" effect="solid" />
            </nav>
           
          </header>
          {/* {this.state.showTutionCheck && (
            // <div className='tutionlivecheck'>
            //   <p id='check'>Online Live Tuition Classes Year 2024 - 2025 </p>
            //   <button id='check-btn'>Check</button>
            //   <FontAwesomeIcon id='cross' icon={faClose} onClick={this.handleHideClick} />
            // </div>
          )} */}

          {this.state.ads && (
            <div className='ads'>
              <div className='ads-content'>
                <FontAwesomeIcon id='ads-cross' icon={faClose} onClick={this.handleAdsClick} />
              </div>
            </div>
          )}

          <div className='main-img'>
            {/* <img src='' alt='main-img'></img> */}
          </div>

          <div className='form'>
            <button id='staffbtn' onClick={this.showStaffForm}>For Staff</button>
            <button id='studentbtn' onClick={this.showStudentForm}>For Student</button>
            
            {this.state.showStudentForm && (
              <form id='student-form'>
                <label htmlFor='child name'>Child Name</label>
                <input type='text' required id='name' name='name' placeholder='child name'></input>
                <label htmlFor='parent name'>Parent Name</label>
                <input type='text' required id='pname' name='pname' placeholder='parent name'></input>
                <label htmlFor='email'>Email</label>
                <input type='email' required id='email' name='email' placeholder='example@gmail.com'></input>
                <label htmlFor='phonenumber'>Phone Number</label>
                <select>
                  <option value={+91}>+91</option>
                  <option value={+92}>+92</option>
                  <option value={+93}>+93</option>
                </select>
                <input type='text' required id='phone' name='phone' placeholder='1234567890'></input>
                <button id='student-submit-btn'><Link to={Index}>Register</Link></button><br></br>
              </form>
            )}

            {this.state.showStaffForm && (
              <form id='staff-form'>
                <label htmlFor='First Name'>First Name</label>
                <input type='text' required id='name' name='name' placeholder='child name'></input>
                <label htmlFor='Last name'>Last Name</label>
                <input type='text' required id='pname' name='pname' placeholder='parent name'></input>
                <label htmlFor='email'>Email</label>
                <input type='email' required id='email' name='email' placeholder='example@gmail.com'></input>
                <label htmlFor='phonenumber'>Phone Number</label>
                <select>
                  <option value={+91}>+91</option>
                  <option value={+92}>+92</option>
                  <option value={+93}>+93</option>
                </select>
                <input type='text' required id='phone' name='phone' placeholder='1234567890'></input>
                <button id='staff-submit-btn'><Link to={StaffRegistration}>Register</Link></button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
