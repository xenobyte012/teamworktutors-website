import React from "react";
import { Link } from "react-router-dom";

// import assets
import whatsapp from "../images/whatsapp.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";

function Footer() {
  return (
    // main container
    <footer className="bg-slate-900 flex flex-col py-10 text-white text-sm">
      
      {/* Social Media Section */}
      <div className="flex justify-center gap-8">

        {/* Each icon is now clickable (IMPORTANT for real projects) */}
        <a
          href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsapp} alt="WhatsApp" className="w-10 hover:scale-110 transition" />
        </a>

        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" className="w-10 hover:scale-110 transition" />
        </a>

        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" className="w-11 hover:scale-110 transition" />
        </a>

        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter" className="w-10 hover:scale-110 transition" />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center gap-3 my-4 text-gray-300">
        <Link className="hover:text-blue-500 transition" to="/">Home</Link>
        <span>|</span>
        <Link className="hover:text-blue-500 transition" to="/about">About</Link>
        <span>|</span>
        <Link className="hover:text-blue-500 transition" to="/contact">Contact</Link>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} | Xenobyte Web Studio | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;