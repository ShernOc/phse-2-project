import React, { useState,  } from "react";
import {Link,useNavigate, Navigate} from "react-router-dom";
import { userAuth } from "../Context/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

const Login =()=>{
   // State event to manage form data
  const [formData, setFormData]= useState({});

   // const [user, setUser] = useState();
    const { login, user, logOut } = userAuth();
    
    const navigate = useNavigate();

  // Handle change event for form inputs
  const handleChange =(e)=>{
     setFormData({...formData, [e.target.name]: e.target.value});
  }

// Handle form submission 
  const handleSubmit= async (e)=>{
    e.preventDefault();
    try{
      await login(formData.email, formData.password);
            navigate("/")
        } catch (error) {
            console.log(error);
    }
}
  if (user) {
        return <Navigate to="/" />
    }

  return(
    <>
    <h1>Login </h1>
    {/* Creates a login username, password inputs */}
    <form className="login" onSubmit={handleSubmit}>
      <div>
        {/* Username */}
        <label>Username</label>
        <input type="text" name="username"   placeholder="Enter Username" onChange={handleChange}>
        </input>

        <br /><br />

        {/* Password */}
        <label>Log-in</label>
        <input type="password"  name = "password" placeholder="Enter Password " onChange={handleChange}>
        </input>

        <br /><br />

        {/* Submit Button  */}
        <button type="submit">Login</button>
        
        <br /><br />

        <span> Join the community and <Link to = "/signup" >Sign Up</Link></span>
          <p onClick={() => logOut()}>Logout</p>
        
      </div>
    </form>
    </>
  )

}


export default Login;