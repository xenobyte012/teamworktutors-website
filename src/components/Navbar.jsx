import React from 'react'
import { useState } from "react";
import burgerMenu from '../images/burger-bar.png'
import closeButton from '../images/close.png'
import { Link } from 'react-router-dom'
// import Home from '../pages/Home'


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" hidden md:flex item-center text-slate-900 bg-orange-500 py-3 px-4 justify-between items-center w-full  ">
        <div className="text-4xl  font-bold tracking-wide ">
          Teamwork Tutors
        </div>
        <div className=" flex gap-4 text-xl ">
          <span className="hover:text-blue-600">
            <Link to="/">Home</Link>
          </span>
          <span className="hover:text-blue-600">
            <Link to="/about">About</Link>
          </span>
          <span className="hover:text-blue-600">
            <Link to="/contact">Contact</Link>
          </span>
        </div>
      </div>
      <div>
        <div className=" flex md:hidden item-center bg-orange-500 text-slate-900 py-2 pl-4 justify-between items-center w-full  ">
          <div className="flex flex-row items-center">
            <img
              src={burgerMenu}
              alt="burger manu"
              className="w-10 mr-2 "
              onClick={() => setIsOpen(!isOpen)}
            />
            <div className="text-[32px]  font-bold tracking-wide">
              Teamwork Tutors
            </div>
          </div>
        </div>
      </div>
      <div
        className={` p-3 fixed top-0 left-0 h-full w-70 bg-slate-500 text-white transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        <div className="flex flex-row mb-6 items-center">
          <img
            onClick={() => setIsOpen(false)}
            src={closeButton}
            alt="close button icon"
            className="w-7 h-7 mr-2 "
          />
        </div>
        <div className="gap-4">
          <div className=" gap-4 text-xl flex flex-col  text-heading ">
            <span
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              <Link to="/">Home</Link>
            </span>
            <span
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              <Link to="/about">About</Link>
            </span>
            <span
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              <Link to="/contact">Contact</Link>
            </span>
          </div>
        </div>
      </div>

    </>
  );
}
