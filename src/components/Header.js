import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../reduxUtils/userSlice";
import { AVATAR, HEADER_LOGO } from "../utils/constents";
import { enableSearch } from "../reduxUtils/searchSlice";
import { RiMenuLine } from "react-icons/ri";

const Header = () => {
  const [displaySignOut, setDisplaySignOut] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((store) => store?.userInfo?.displayName);
  const searchEnable = useSelector((store) => store.search.searchToggle);
  //responsive menu
  const [open,setOpen]=useState(true)

  const showSignOut = () => {
    setDisplaySignOut(!displaySignOut);
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };
  //Enabling search component through redux
  const searchSection = () => {
    dispatch(enableSearch(!searchEnable));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));

        navigate("/browse");
      } else {
        navigate("/");
        // User is signed out
        // ...
      }
    });
    //useEffect offers the use of return function, which is used for cleanup function purposes.When
    // component unmounts this return is called
    return () => unsubscribe();
  }, []);
 
  return (
    <div className=" absolute flex w-full  h-10 md:h-16 justify-between px-2  z-50 bg-black ">
      <img src={HEADER_LOGO} alt="logo" />

      {auth.currentUser && (
        <div className="flex  h-full  items-end  flex-col basis-2/6 pt-4 pr-4">
          <RiMenuLine className="text-white block md:hidden cursor-pointer" onClick={()=>setOpen(!open)}/>
          <div className={`${open ?"hidden" :"block"} absolute top-10 w-36  md:top-0 md:relative md:flex md:items-center md:gap-3 border border-white`}>
            <button
              className="text-white px-2  bg-purple-600 rounded"
              onClick={searchSection}
            >
              {!searchEnable ? "search" : "Home"}
            </button>
            <img src={AVATAR} alt="netflix-avatar" className="h-8 " />
            <span
              className={
                "text-white  font-bold hover:cursor-pointer transition-transform ease-in-out duration-100 " +
                (displaySignOut ? "rotate-0" : "rotate-180")
              }
              onClick={showSignOut}
            >
              ^
            </span>
          </div>
          
          {displaySignOut && (
            <div className="  bg-zinc-800 w-28  text-center py-4 my-2 rounded absolute top-16  ">
              <p className="text-white">{userName}</p>
              <button
                className="text-white hover:border-b-2 "
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
