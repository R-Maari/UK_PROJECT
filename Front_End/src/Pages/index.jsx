import React, { Component } from 'react';
import logo from "../images/theos.png";
import indeximg from "../images/index-img.jpg";
import "./index.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export class Index extends Component {
  scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  render() {
    return (
      <div>
        <header id='home1' className='container'>
          <img src={logo} alt='Theos Educational Academy Logo' />
          <h1>Theos Educational Academy <br></br><span id='tp'> Thriving and Perfection</span></h1>
          <nav id='nav'>
            <ul>
              <li onClick={() => this.scrollToSection('subjects')}>Subjects</li>
              <li onClick={() => this.scrollToSection('services')}>Services</li>
              <li onClick={() => this.scrollToSection('explore')}>Explore</li>
              <li onClick={() => this.scrollToSection('about-us')}>About Us</li>
              <li onClick={() => this.scrollToSection('contact-us')}>Contact Us</li>
            </ul>
          </nav>
          <Link to="./login">
          <button id='btn'>Login</button>
          </Link>
        </header>
      <div  className='div-container'>
        <main className='container-body'>
          <img src={indeximg} alt='Theos Academy Overview' />
          <p id='content-container-body'>
           Theos is a platform that specializes in a range of different key stages and exam boards in GCSE , SATS level to help tutees increase their grades or boost their confidence. All tutors are based throughout the country with varying levels of experience.<br />
          </p>
          <Link to="./register"><button id='btn-container-body'>Register Now</button></Link>
        </main>
        </div>
        
        <button id='enquiry'>Enquiry</button>

        <div id='subjects' className='features'>
          <h1>Our Subjects</h1>
          <div className='body-subjects'>
            <h2>Exam Boards <FontAwesomeIcon icon={faBook} /></h2>
            <p id='examboards'>Hello World</p>
            <p id='content-sub'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat enim nisi aliquid, veniam vel pariatur aperiam cumque obcaecati soluta, ipsum, exercitationem magni necessitatibus quibusdam blanditiis esse tempore quidem magnam accusantium!</p>



          </div>
          <div className='body-subjects'>
          <h2>Exam Boards <FontAwesomeIcon icon={faBook} /></h2>
            <p id='examboards'>Hello World</p>
            <p id='content-sub'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat enim nisi aliquid, veniam vel pariatur aperiam cumque obcaecati soluta, ipsum, exercitationem magni necessitatibus quibusdam blanditiis esse tempore quidem magnam accusantium!</p>

            
          </div>
          <div className='body-subjects'>
          <h2>Exam Boards <FontAwesomeIcon icon={faBook} /></h2>
            <p id='examboards'>Hello World</p>
            <p id='content-sub'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat enim nisi aliquid, veniam vel pariatur aperiam cumque obcaecati soluta, ipsum, exercitationem magni necessitatibus quibusdam blanditiis esse tempore quidem magnam accusantium!</p>


            
          </div>
        </div>
        <div className='services' id='services'>
        <div id='explore' className='explore'>

        </div>
        </div>
        <div id='about-us' className='about'>
          {/* About Us content here */}
        </div>
        <div id='contact-us' className='contact'>
          {/* Contact Us content here */}
        </div>
      </div>
    );
  }
}

export default Index;
