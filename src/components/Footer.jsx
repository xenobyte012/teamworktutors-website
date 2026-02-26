import React from 'react'

import { Link } from 'react-router-dom'
import whatsapp from '../images/whatsapp.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'

function Footer() {

  return (
    <div className="  bg-slate-900 flex flex-col   py-6 text-white text-h4 ">
      <div className="flex flex-row justify-center gap-10 ">
        <div>
          <img loading='lazy' src={whatsapp} alt="whatsapp icon" className=" w-10" />
        </div>
        <div>
          <img loading='lazy' src={facebook} alt="facebook icon" className=" w-10" />
        </div>
        <div>
          <img loading='lazy' src={instagram} alt="instagram icon" className=" w-11" />
        </div>
        <div>
          <img loading='lazy' src={twitter} alt="twitter icon" className=" w-10" />
        </div>
      </div>
      <div className="flex flex-row justify-center gap-2 my-4">
        <div className="hover:text-blue-600">
          <Link to="/">Home</Link>
        </div>
        <div>|</div>
        <div className="hover:text-blue-600">
          <Link to="/about">About Us</Link>
        </div>
        <div>|</div>
        <div className="hover:text-blue-600">
          <Link to="/contact">Contact Us </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center ">
        <h2>
          2026 <span className="p-2">|</span> Vertex Web Studio
          <span className="p-2">|</span> All Right Reserved
        </h2>
      </div>
    </div>
  );
}

export default Footer