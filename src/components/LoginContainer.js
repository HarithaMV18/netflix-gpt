import React, { useRef, useState } from "react";
import { Link} from "react-router-dom";
import formValidate from "../utils/checkFormValidation";
import {
  createUserWithEmailAndPassword,

  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { addUser } from "../reduxUtils/userSlice";
import Header from "./Header";

const LoginContainer = () => {
  const dispatch=useDispatch()
  const [signInUser, setSignInUser] = useState(true);
  //state variables for catching errors
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [nameError, setNameError] = useState(null);
  //using useRef we are getting input values
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  //Toggle between signin and signup
  const handleSignUp = () => {
    setSignInUser(!signInUser);
  };

  //validating form
  const handleFormSubmit = () => {
    const { emailStatus, passwordStatus, nameStatus } = formValidate(
      email.current.value,
      password.current.value,
      signInUser ? null : name.current.value
    );
    setEmailError(emailStatus);
    setPasswordError(passwordStatus);
    setNameError(nameStatus);
    // validation falis
    if (emailStatus || passwordStatus || nameStatus) return;
    // validation success and firebase signup
    if (
      emailStatus === null &&
      passwordStatus === null &&
      nameStatus === null &&
      !signInUser
    ) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName:  name.current.value
          }).then(() => {
         
            const {uid,displayName,email}=auth.currentUser
        dispatch(addUser({uid:uid,displayName:displayName,email:email}))
   
          }).catch((error) => {
            // An error occurred
            // ...
          });

        })
        .catch((error) => {
          const errorCode = error.code;
          setPasswordError(errorCode.slice(5));
        });

    }
    // validation success and firebase signin
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          
          // const {uid,displayName,email}=auth.currentUser
          // dispatch(addUser({uid:uid,displayName:displayName,email:email}))
      
        })
        .catch((error) => {
          const errorCode = error.code;
          setPasswordError(errorCode.slice(5));
        });
     
    }
  };

  return (
    <div className=' w-full  relative login-wrapper bg-[url("https://preview.redd.it/how-can-someone-make-this-background-with-html-and-css-i-v0-zjgs096khv591.jpg?auto=webp&s=9659527da9196c27a8875200b41d20a8e901c341")] bg-no-repeat bg-center bg-cover'>
    
      <Header/>
      <div className="bg-section w-full h-screen bg-black bg-opacity-45 "></div>
      <div className="login-form max-[340px]:w-56 w-64 sm:w-80 md:w-96  py-2 bg-black bg-opacity-60 text-white absolute top-2/4 left-0 right-0 m-auto -translate-y-2/4">
        <h1 className=" w-[80%] md:w-72 m-auto  font-bold text-sm md:text-xl">
          {signInUser ? "Sign In" : "Sign Up"}
        </h1>
        <form className="m-auto w-[80%]  md:w-72" onSubmit={(e) => e.preventDefault()}>
          {signInUser ? (
            ""
          ) : (
            <input
              type="text"
              ref={name}
              placeholder="name"
              className=" w-full bg-transparent border border-white  m-auto text-xs md:text-sm py-1 px-2 my-2 rounded "
            />
          )}
          <span className="text-red-500 text-sm">{nameError}</span>
          <input
            type="email"
            name="email"
            id="email"
            ref={email}
            placeholder="Email"
            className=" text-xs md:text-sm w-full bg-transparent border border-white  py-1 px-2 my-2 rounded "
          />
          <span className="text-red-500 text-sm">{emailError}</span>
          <input
            type="password"
            name="password"
            id="password"
            ref={password}
            placeholder="Password"
            className="w-full bg-transparent border border-white text-xs md:text-sm py-1 px-2 my-2 rounded"
          />
          <span className="text-red-500 text-sm">{passwordError}</span>
          <button
            className="bg-red-600 block text-xs md:text-sm py-1 md:px-2 w-full my-2 rounded"
            onClick={handleFormSubmit}
          >
            {signInUser ? "Sign In" : "Sign Up"}
          </button>
        </form>
        {signInUser ? (
          <p className="m-auto w-[80%] md:w-72 my-4 text-xs md:text-sm">
            New to Netflix?{" "}
            <span onClick={handleSignUp} className="hover:border-b-2">
              <Link to="/signup">Sign up now.</Link>
            </span>
          </p>
        ) : (
          <p className="m-auto w-[80%] md:w-72 my-2 text-xs md:text-sm">
            Already Registered?{" "}
            <span onClick={handleSignUp} className="hover:border-b-2">
              <Link to="/">Sign In now.</Link>
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginContainer;
