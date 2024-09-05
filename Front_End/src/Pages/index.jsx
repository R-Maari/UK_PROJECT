import React, { Component } from 'react';
import './index.scss';
import Logo from '../images/theos.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight, faClose, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';

export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTutionCheck: true // State to control visibility
    };
  }

  handleHideClick = () => {
    this.setState({ showTutionCheck: false }); // Hide the div
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
          {this.state.showTutionCheck && (
            <div className='tutionlivecheck'>
              <p id='check'>Online Live Tuition Classes Year 2024 - 2025 </p>
              <button id='check-btn'>Check</button>
              <FontAwesomeIcon id='cross' icon={faClose} onClick={this.handleHideClick} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Index;
