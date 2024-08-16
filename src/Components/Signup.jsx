import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import {userAuth } from "../Context/AuthContext";

const Signup =()=>{
  // event state to manage form data
  const [formData, setFormData]= useState({});
   const {signUp, user} = userAuth();
    const navigate= useNavigate();

  console.log("user is: ", user);

 // Handle change event for form inputs
  const handleChange =(e)=>{
    setFormData({...formData, [e.target.name]: e.target.value});
}
// event change for sign up that Handles form submission
const handleSubmit= async (e)=>{
    e.preventDefault();
     try {
            await signUp(formData.email, formData.password);
            navigate("/login")
        } catch (error) {
            console.log(error); 
        }
}

  return(
     <>
    <h1>Signup </h1>

    {/* Signup Form  */}
    <form className="signup" onSubmit={handleSubmit}>

    <div>
        <label>Your Name</label>
        <input type="text" name="name" placeholder="Enter Your Username" onChange={handleChange}></input>

         <br /><br />

        <label>Your Email</label>
        <input type="email" name="email" placeholder="Enter Your Email" onChange={handleChange}></input>
        
        <br /><br />
        <label>Password</label>
        <input type="Password" name="password"   placeholder="Enter Password " onChange={handleChange}></input>

        <br /><br />

        {/* Sign up Button */}
        <button type="submit">Sign Up</button>
      </div>

      <span> Not yet Logged <Link to = "/login" >Log in </Link></span>
      </form>
    </>
  );
}

export default Signup;