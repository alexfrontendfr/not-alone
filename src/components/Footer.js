import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">You Are Not Alone</h3>
            <p className="text-gray-300">
              Connecting people through shared experiences.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-purple-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-purple-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/form" className="hover:text-purple-300">
                  Share Your Story
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <div className="text-2xl hover:text-purple-300">
                <FaTwitter />
              </div>
              <div className="text-2xl hover:text-purple-300">
                <FaFacebook />
              </div>
              <div className="text-2xl hover:text-purple-300">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 You Are Not Alone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
