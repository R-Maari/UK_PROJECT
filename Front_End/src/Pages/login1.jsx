 import React, { useState } from 'react';
 import './login.css'; // Import the CSS file for styling

 const Login1 = () => {
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');

     const handleUsernameChange = (e) => setUsername(e.target.value);
     const handlePasswordChange = (e) => setPassword(e.target.value);

     const handleSubmit = (e) => {
         e.preventDefault();
         // Perform login logic here (e.g., send credentials to API)
         console.log('Username:', username);
         console.log('Password:', password);

         // Example of a simple validation
         if (username === 'admin' && password === 'password') {
             alert('Login successful');
         } else {
             alert('Invalid username or password');
         }
     };

     return (
         <div className="login-container">
             <h2>Login</h2>
             <form onSubmit={handleSubmit}>
                 <label htmlFor="username">Username:</label>
                 <input
                     type="text"
                     id="username"
                     value={username}
                     onChange={handleUsernameChange}
                     required
                 />

                 <label htmlFor="password">Password:</label>
                 <input
                     type="password"
                     id="password"
                     value={password}
                     onChange={handlePasswordChange}
                     required
                 />

                 <button type="submit">Login</button>
             </form>
         </div>
     );
 };

 export default Login1;
