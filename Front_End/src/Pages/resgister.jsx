// // import React, { Component } from 'react'
// // import { Link } from 'react-router-dom';
// // import './authentication.scss'
// // import childimg  from '../images/kids.jpeg'

// // export class resgister extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <div className='register'>
// //             <div className='container'>
// //             <div className='body-register'>
// //                 <form >
// //                     <h1>Login</h1>
// //                     <p id='forlogin'>Already Have an Account <Link to='/login' id='a'>Login</Link></p>
// //                     <label for='email'>Email Address </label><br></br>
// //                         <input type='email' id='email' name='email' placeholder='Email' required></input><br></br>
                   
// //                     <label for='password'>Password</label><br></br>
// //                         <input  type='password' id='pass' name='pass' placeholder='Password' required></input><br></br>
// //                     <p id='fpass'>Forgot Password</p>
// //                     <input type='checkbox' id='cbox' ></input><p id='rem'>Remember Me</p><br></br>
// //                     <button id='reg-btn'>Register</button>

// //                 </form>
// //                 <img src={childimg} alt='childimg'></img>
// //             </div>
// //             </div>
// //         </div>
// //       </div>
// //     )
// //   }
// // }

// // export default resgister


// import React, { Component } from 'react';
// import { useNavigate } from 'react-router-dom';

// class Resgister extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showFirst: true, // This determines which form is shown
//       role: '' // This stores the selected role
//     };
//   }

//   // This method shows the second form
//   handleNext = () => {
//     this.setState({ showFirst: false });
//   };

//   // This method updates the selected role in the state
//   handleRoleSelection = (role) => {
//     this.setState({ role });
//   };

//   // This method handles form submission and redirects based on the selected role
//   handleSubmit = () => {
//     const { role } = this.state;
//     const { navigate } = this.props;
//     if (role === 'Tutor') {
//       navigate('/tutor');
//     } else if (role === 'Student/Parent') {
//       navigate('/student');
//     }
//   };

//   // This method shows the first form and hides the second one
//   handleGoBack = () => {
//     this.setState({ showFirst: true });
//   };

//   render() {
//     return (
//       <div className='register'>
//         {this.state.showFirst ? (
//           <div className='reg-first'>
//             <label htmlFor='email'>Email</label>
//             <input type='email' id='email' placeholder='Email' required />
//             <label htmlFor='phone'>Mobile No</label>
//             <input type='number' id='phone' placeholder='Mobile No' required />
//             <button id='sub-btn1' onClick={this.handleNext}>Next</button>
//           </div>
//         ) : (
//           <div className='register-second'>
//             <h1>Select Your Role</h1>
//             <div>
//               <input
//                 type='radio'
//                 id='parent-student'
//                 name='role'
//                 value='Student/Parent'
//                 onChange={() => this.handleRoleSelection('Student/Parent')}
//               />
//               <label htmlFor='parent-student'>Parent/Student</label>
//             </div>
//             <div>
//               <input
//                 type='radio'
//                 id='tutor'
//                 name='role'
//                 value='Tutor'
//                 onChange={() => this.handleRoleSelection('Tutor')}
//               />
//               <label htmlFor='tutor'>Tutor</label>
//             </div>
//             <button id='sub-btn2' onClick={this.handleSubmit}>Next</button>
//             <button id='go-back-btn' onClick={this.handleGoBack}>Go Back</button>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// // Custom wrapper to inject `navigate` from `useNavigate` into the class component
// export default function ResgisterWithNavigation(props) {
//   const navigate = useNavigate();
//   return <Resgister {...props} navigate={navigate} />;
// }


import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!email || !password) {
      setError('Email and Password are required');
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);

    setError('');
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {error && <p style={styles.error}>{error}</p>}
        <div style={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '700px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  form: {
    width : '70%',
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '70%',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '15px',
  },
};

export default Register;
