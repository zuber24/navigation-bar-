import React, { useState } from 'react'
// import {Link} from 'react-router-dom';
//import Registration from './Registration';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
  <div className='log'>
  <h1>Login</h1>
  <form action=''>
  <div className='log1'>
      <label htmlFor="email">Email Id </label>
      <input type="email" autoComplete='off' value={email} onChange={(e)=> setEmail(e.target.value)} name="email" id='email'/>

  </div>

  <div>
      <label htmlFor="password">Password</label>
      <input type="password" autoComplete='off' value={password} onChange={email} onChange={(e)=> setPassword(e.target.value)} name="email" id='email'/>

  </div>
   <button type='submit'> Login</button>

   {/* <div className='reg-link'>
    <Link className='link' to='/registration'>
     <li>Register Now</li>
    </Link>
</div> */}
  </form>

  </div>
    
    );
}

export default Login;