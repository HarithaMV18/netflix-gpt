import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginContainer = () => {
  const [signInUser,setSignInUser]=useState(true)
  const handleSignUP=()=>{
    setSignInUser(!signInUser)
  }
  return (
    <div className='w-full  relative login-wrapper bg-[url("https://preview.redd.it/how-can-someone-make-this-background-with-html-and-css-i-v0-zjgs096khv591.jpg?auto=webp&s=9659527da9196c27a8875200b41d20a8e901c341")] bg-no-repeat bg-center bg-cover'>
      <div className="w-36 absolute">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      <div className="bg-section w-full h-screen bg-black bg-opacity-45 "></div>
      <div className="login-form w-96  py-2 bg-black bg-opacity-60 text-white absolute top-2/4 left-0 right-0 m-auto -translate-y-2/4">
        <h1 className="w-72 m-auto  font-bold text-xl">{signInUser?"Sign In":"Sign Up"}</h1>
        <form className="m-auto w-72">
          {signInUser?"":<input type="text" placeholder="name" className=" w-full bg-transparent border border-white  py-1 px-2 my-2 rounded "/>}
          <input type="email" name="email" id="email" placeholder="Email" className=" w-full bg-transparent border border-white  py-1 px-2 my-2 rounded " />
          <input type="password" name="password" id="password" placeholder="Password"  className="w-full bg-transparent border border-white py-1 px-2 my-2 rounded"/>
          <button className="bg-red-600 block py-1 px-2 w-full my-2 rounded">Sign In</button>
        </form>
        {signInUser?<p className="m-auto w-72 my-4">New to Netflix? <span onClick={handleSignUP} className="hover:border-b-2"><Link to="/signup">Sign up now.</Link></span></p>:
        <p className="m-auto w-72 my-2">Already Registered? <span onClick={handleSignUP} className="hover:border-b-2"><Link to="/signIn">Sign In now.</Link></span></p>}
      </div>
    </div>
  );
};

export default LoginContainer;
