import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../reduxUtils/userSlice";
import { AVATAR, HEADER_LOGO } from "../utils/constents";
import { addNowPlayingMovies } from "../reduxUtils/movieSlice";
const Header = () => {
    const [displaySignOut,setDisplaySignOut]=useState(false)
    const dispatch=useDispatch()
    const navigate=useNavigate()
 const userName=useSelector((store)=>store?.userInfo?.displayName)
   
    const showSignOut=()=>{
        setDisplaySignOut(!displaySignOut)
    }
    const handleSignOut=()=>{
      
        signOut(auth).then(() => {
          dispatch(removeUser())
         
          }).catch((error) => {
            // An error happened.
          });
    }
    useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,displayName,email }= user;
          dispatch(addUser({uid:uid,displayName:displayName,email:email}))
       
         navigate("/browse")
        } else {
          navigate("/")
          // User is signed out
          // ...
        }
      });
      //useEffect offers the use of return function, which is used for cleanup function purposes.When
      // component unmounts this return is called
      return ()=>unsubscribe()
    },[])
  return (
    <div className=" absolute flex w-full h-16 justify-between px-2  z-50 bg-gradient-to-r from-black ">
      <img
        src={HEADER_LOGO}
        alt="logo"
      />
   {auth.currentUser&&<div className="h-full flex items-end flex-col  basis-1/6 pt-4">
        <div className="flex items-center gap-1">
        <img
          src={AVATAR}
          alt="netflix-avatar" className="h-8 " 
        />
        <span className={"text-white  font-bold hover:cursor-pointer transition-transform ease-in-out duration-100 "+(displaySignOut?"rotate-0":"rotate-180")} onClick={showSignOut}>^</span>
        </div>
       
        {displaySignOut&&<div className="  bg-zinc-800 w-28  text-center py-4 my-2 rounded absolute top-16  ">
          <p className="text-white">{userName}</p>
          <button className="text-white hover:border-b-2 " onClick={handleSignOut}>Sign Out</button>
          </div>}
      </div>}
    </div>
  );
};

export default Header;
