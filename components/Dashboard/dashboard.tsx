import React, { useEffect, useState } from "react";
import Card from "../Card/card";
import Chartcomp from "../Chart/chart";
import Card2 from "../Card/card2";
import Addnew from "../Addnew/addnew";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "",instagram:"",youtube:""});
  const [infoRetrieved,setInfoRetrieved] = useState(false);
  const [isAddNewVisible, setAddNewVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCard2Click = () => {
    setAddNewVisible(!isAddNewVisible);
  };

useEffect(() => {
const {name,email,phone}=userInfo;
if(name!="" && email!="" && phone!=""){
  setInfoRetrieved(true);
}
}, [userInfo])


  return (
    <div className="container w-[100vw] h-[100vh]">
      {/* Navigation element */}
      <div className="flex-col sm:flex-row flex mx-2 my-4 py-3 px-3 w-full">
      <div className=" w-full sm:justify-center bg-gradient-to-b from-blue-500 to-blue-500 rounded-2xl flex sm:flex-col px-2 flex-row justify-between">
  {/* Navbar */}
  <div className="text-white sm:text-4xl font-bold text-center my-3 py-3 sm:top-12 left-24 sm:absolute">
  </div>
  <div className="text-white sm:text-4xl font-bold text-center my-3 py-3 sm:top-12 left-24 sm:absolute">
    Board.
  </div>
  <button onClick={toggleMenu} type="button" className="lg:hidden z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {isOpen && (
  <div className="absolute right-1 h-screen top-20 w-40">
    <div className="flex flex-col space-y-6 p-5 bg-gradient-to-b from-blue-500 to-slate-200 rounded-lg shadow-md">
      <a href="#" className="text-sm text-black hover:text-blue-500">
      Dashboard
      </a>
      <a href="#" className="text-sm text-black hover:text-blue-500">
      Transactions
      </a>
      <a href="#" className="text-sm text-black hover:text-blue-500">
      Schedules
      </a>
      <a href="#" className="text-sm text-black hover:text-blue-500">
      Users
      </a>
      <a href="#" className="text-sm text-black hover:text-blue-500">
      Settings
      </a>
      <a href="#" className="text-sm text-black hover:text-blue-500">
      Help
      </a>
      <a href="#" className="text-sm text-black hover:text-blue-500">
      Contact Us
      </a>

    </div>
  </div>
)}



  
  <div className="hidden sm:flex flex-col justify-evenly ">
    <div className="text-white text-lg font-normal my-5 text-center hover:font-bold">
      Dashboard
    </div>
    <div className="text-white text-lg font-normal my-5 text-center hover:font-bold">
      Transactions
    </div>
    <div className="text-white text-lg font-normal my-5 text-center hover:font-bold">
      Schedules
    </div>
    <div className="text-white text-lg font-normal my-5 text-center hover:font-bold">
      Users
    </div>
    <div className="text-white text-lg font-normal my-5 text-center hover:font-bold pb-16">
      Settings
    </div>
    <div className="flex flex-col flex-6">
      <div className="text-white text-sm font-normal my-5 text-center hover:font-bold">
        Help
      </div>
      <div className="text-white text-sm font-normal my-5 text-center hover:font-bold">
        Contact Us
      </div>
    </div>
  </div>
</div>

        {/* Dashboard Element */}
        <div className="w-full mx-5 mt-3 flex flex-col">
          {/* Navigation element */}
          <div className="flex flex-row justify-end w-full">
            <div className="text-black text-3xl font-bold">Dashboard</div>
            <div className="flex flex-row w-full justify-end items-end">
              <div className="mx-3"><NotificationsNoneIcon className="font-bold text-3xl"/></div>
              <div className="mx-3"><AccountCircleIcon className="font-bold text-3xl"/></div>
            </div>
          </div>
          {/* Card elements */}
          <div className="mt-2 pt-2 mb-4 mr-3 pr-3 flex flex-col sm:flex-row justify-between w-full">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          {/* Chart element */}
          <Chartcomp />
          {/* Cards different */}
          <div className="mt-2 pt-2 pr-3 mr-2 flex flex-col sm:flex-row justify-evenly">
          <Card2/>  

          <div className=" relative flex-1 mt-3 pt-3 sm:ml-3 sm:pl-3" >
      <div className="w-full h-64 bg-white rounded-2xl shadow border border-neutral-200" onClick={handleCard2Click} />
    </div>

          </div>
        </div>
      </div>

      {isAddNewVisible && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
          <Addnew userInfo={userInfo} setUserInfo={setUserInfo}/>
        </div>
      )}
    </div>
  );
};
