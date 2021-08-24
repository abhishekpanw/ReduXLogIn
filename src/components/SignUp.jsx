import React , {useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../Redux/auth.action';
import { useHistory } from 'react-router';


const SignUp = () => {
  const [user, setUser] = useState({
  name: '',
  email: '',
  password: '',
  passwordCheck: ''
});
   
    const authentication = useSelector((state) => state.authentication);
    const dispatch = useDispatch();
    const history = useHistory()
    const handleSubmit =(e) => {
      e.preventDefault();
     dispatch(signUp(user))
     setUser({
          name: '',
          email: '',
          password: '',
          passwordCheck: ''
     })

      }
     
  // history.push('/login')

    return (
        <div class="login">
              <h1> Register</h1>
            <form method="post" onSubmit={handleSubmit}>
    	      <input type="text" 
             name="name" 
              placeholder="Username"
               value={user.name} 
               onChange={(e)=>setUser({...user, name: e.target.value})}/>

             <input type="email" 
             placeholder="Email"
             name="email"
             value={user.email} 
             onChange={(e)=>setUser({...user, email: e.target.value})}/>

              <input type="password"  
             placeholder="Password" 
             name = "password" 
             value={user.password} 
             onChange={(e)=>setUser({...user, password: e.target.value})}/>
        
             <input type="password"  
             placeholder="Confirm_Password"
             name="confirm_password" 
             value={user.passwordCheck} 
             onChange={(e)=>setUser({...user, passwordCheck: e.target.value})}/>
            <input type="submit" />

         </form>
        </div>
    )
    }

export default SignUp;
