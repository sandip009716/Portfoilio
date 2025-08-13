import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr className="border-t-1 border-gray-200"/>
      <footer className="py-10">
        <div
          id="Footer"
          className="max-w-screen-2xl container mx-auto px-4 md:px-20"
        >
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-6">
              <div className="flex space-x-6 text-xl">
                <a
                  href="https://www.facebook.com/sandip.kumar.388026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://x.com/SandipKuma32117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors duration-300"
                >
                  <FaTwitter />
                </a>

                <a
                  href="https://www.instagram.com/sani_0097016/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition-colors duration-300"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.linkedin.com/in/sandip97/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700 transition-colors duration-300"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-500 pt-8 flex flex-col items-center text-center">
              <p className="text-sm break-words">
                📧 sandipkumar0097016@gmail.com | Firozabad, (UP), India
              </p>
              <p className="text-sm">
                📞{" "}
                <a
                  href="tel:+919876543210"
                  className="hover:text-blue-700 transition-colors duration-300"
                >
                  +91 7668365906
                </a>
              </p>
              <p className="text-sm">
                © 2025 Sandip Kumar. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
