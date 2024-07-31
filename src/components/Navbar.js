import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "./not-alone-logo.png";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <motion.img
              whileHover={{ scale: 1.1 }}
              className="h-8 w-auto mr-2"
              src={logo}
              alt="Logo"
            />
          </Link>
          <div className="flex space-x-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/form">Share Your Story</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-gray-600 hover:text-purple-600 transition duration-300"
    >
      {children}
    </Link>
  );
}

export default Navbar;
