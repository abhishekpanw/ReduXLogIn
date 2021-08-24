import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import { signin } from '../Redux/auth.action';
const Login = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => console.log(state))
   console.log(auth)
     const [creds , setcreds] = useState({
         email: '',
         password:''
     });

         const handleSubmit = e =>{
         e.preventDefault()
         dispatch(signin(creds.email, creds.password));
         setcreds({ email: "", password: "" });
     }
    //  if (auth._id) return <Redirect to="/login" />;
 
    return (
           <div class="login">
	       <h1>Login</h1>
            <form method="post" onSubmit={handleSubmit} >
    	      
             <input type="email" 
             placeholder="Email"
             value={creds.email} 
             onChange={(e)=>setcreds({...creds , email:e.target.value})}/>

              <input type="password"  
             placeholder="Password" 
             value={creds.password} 
             onChange={(e)=>setcreds({...creds , password:e.target.value})}/>
             <p className="message">Not registered? <Link to="/signup">Create an account</Link> </p> 
             <input type="submit" />
            </form>
        </div>
        
    )
}
export default Login;
