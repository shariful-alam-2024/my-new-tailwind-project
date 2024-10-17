import React from 'react';
import { useState } from 'react';
import {NavLink,Outlet,outlet } from 'react-router-dom'

const Navbar1 = () => {
  const [isMenuOpen,setIsMenuOpen] =useState(false)
      return (
           <section className='bg-[#E4E4E780] '>
                  <nav className="bg-[#E4E4E780] p- flex justify-between items-center">
  {/* Left side - Logo/Image */}
  <div className="flex items-center space-x-2">
    <img src="Img/Logo.png" alt="Logo" className="h-131px w-36px" />
  </div>

  {/* Mobile Menu Button */}
  <div className="md:hidden">
    <button
      className="text-gray-600 focus:outline-none"
      onClick={() => setIsMenuOpen(!isMenuOpen)} // You can toggle the menu with a state
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>

  {/* Center - Navigation Links */}
  <ul
    className={`${
      isMenuOpen ? 'block' : 'hidden'
    } md:flex space-x-6 text-gray-600 md:static absolute w-full left-0 top-[60px]  md:bg-transparent md:w-auto md:space-x-6`}
  >
    <li>
     <NavLink to= "/Dashboard">Dashboard</NavLink>
    </li>
    <li>
     <NavLink to="/Incidents">Incidents</NavLink>
    </li>
    <li>
      <NavLink to="/Locations">Locations</NavLink>
    </li>
    <li>
      <NavLink to="/Activities">Activities</NavLink>
    </li>
    <li>
      <NavLink to="/Documents">Documents</NavLink>
    </li>
    <li>
     <NavLink to="/Cypher AI">Cypher AI</NavLink>
    </li>
  </ul>

  {/* Right side - Notification Bell and Profile */}
  <div className="flex text-center space-x-4">
    {/* Bell Icon */}
    <div className="relative border-[1px] bg-[#FFFFFF] rounded-full w-[40px] h-[41px]">
      <button className=" ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-[17.84px] h-[17.66px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a7.003 7.003 0 00-5-6.708V4a2 2 0 10-4 0v.292A7.003 7.003 0 004 11v3.159c0 .538-.214 1.055-.595 1.436L2 17h5m4 0v1a2 2 0 11-4 0v-1m4 0H9"
          />
        </svg>
      </button>
      <span className="absolute top-0 right-0 block h-2 w-2 bg-[#4ADE80] rounded-full ring-2 ring-[#FFFFFF]"></span>
    </div>

    {/* Profile Picture */}
    <div className="relative flex items-center">
      <img src="Img/Rectangle.png" alt="Profile" className="h-10 w-10 rounded-full" />
      <div className="ml-2">
        <h3>Usman Zafar</h3>
        <p className="text-sm text-gray-600">usmanzafar@gmail.com</p>
      </div>
    </div>
  </div>
  <Outlet />
</nav>

          <hr className='border-[1px] w-[1440px] border-[#3F3F46]'></hr>


              <div className="flex justify-between pt-6 pb-5">
                  <div className="">
                  <p className='font-medium text-[12px] lending-[12.3] text-[#71717A]'>Welcome back</p>
                  <h1 className='font-bold text-[26px] lending-[33.15px] text-[#09090B]'>Dashboard</h1>
                  </div>
                  <div className="flex gap-1">
                  <button className='flex items-center border w-[190px] h-[42px] rounded-[6px] bg-[#FAFAFA] pt-3 pr-[10px] pb-3 pl-[10px]' >
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
             <path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" />
             </svg>Search incident</button>
                 <button className='border-[1px] bg-[#FAFAFA] w-[188px] h-[42] pt-3 pr-[10px] pb-3 pl-[10px] text-[10px] text-center rounded-[6px]'>Sort By: Date modified</button>
                 <button className='bg-[#F26922] border-[1px] text-[#FAFAFA] w-[108px] h-[42px] rounded-[6px] pt-2 pb-2 pr-[25px] pl-[25px] text-[12px]'>Cypher AI</button>
                 
                  </div>
              </div>
             

           </section>
          
      );
};
//
const Cards =[
  {
       img:"Img/img1.png",
        title:"Whitechapel Rd.",
        address:"Tulare County,  Los Angles, CA 23415",
        price:"$1,456,654.00",
  },
  {
        img:"Img/img2.png",
         title:"Whitechapel Rd.",
         address:"Tulare County,  Los Angles, CA 23415",
         price:"$1,456,654.00",
   },
   {
        img:"Img/img3.png",
         title:"Tulare County",
         address:"Tulare County,  Los Angles, CA 23415",
         price:"$1,456,654.00",
   },
   {
        img:"Img/img4.png",
         title:"Tulare County.",
         address:"Tulare County,  Los Angles, CA 23415",
         price:"$1,456,654.00",
   },
   {
        img:"Img/img5.png",
         title:"Tulare County",
         address:"Tulare County,  Los Angles, CA 23415",
         price:"$1,456,654.00",
   },
   {
        img:"Img/img6.png",
         title:"Tulare County",
         address:"Tulare County,  Los Angles, CA 23415",
         price:"$1,456,654.00",
   },
]





const MyCard = () => {
  return (
    <div className="container pt-3">
      <div className="flex flex-wrap justify-center pt-5">
        {Cards.map(({ img, title, address, price }, i) => (
          <div className=" p-4" key={i}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
              {img && <img src={img} alt={title} className="w-[306px] h-[253px] object-cover" />}
              
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-[#09090B]">{title}</h3>
                <p className="text-[#71717A]">{address}</p>
                <p className="text-[#09090B] font-bold">{price}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

//
const Chat = () => {
  return (
        <div className='pl-[1293px ] '>
              <span className='text-[#FFFFFF] font-[52.2px] border rounded-full bg-[#F26922] text-6xl p-6'>c</span>
        </div>
  );
};










function Navbar() {
  return (
    <div>
      <Navbar1></Navbar1>
      <MyCard></MyCard>
      <Chat></Chat>
    </div>
  )
}

export default Navbar

