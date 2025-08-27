import React, { useState } from "react";
//import pic from "../../public/SandipKumar.jpg";
import { MdMenu, MdTextDecrease } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "My Projects",
    },
    {
      id: 4,
      text: "TeckStack",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          {/* <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Sandip Kuma<span className="text-blue-500 text-2xl">r</span>
              <p className="text-sm">Web Devloper</p>
            </h1>
          </div> */}

          <div className="flex space-x-2">
           {/* <img src="/SandipKumar.JPG" className="h-12 w-12 rounded-full" alt="Sandip Kumar" /> */}
           <img src="/SandipKumar.JPG" className="h-12 w-12 rounded-full" alt="Sandip Kumar" />

           <h1 className="font-semibold text-xl cursor-pointer">
             Sandip Kuma<span className="text-blue-500 text-2xl">r</span>
            <p className="text-sm">Web Devloper</p>
           </h1>
           </div>

          <div>
            {/* Desktop Navbar */}
            <ul className="hidden md:flex space-x-8 cursor-pointer">
              {navItems.map(({ id, text }) => (
                <li key={id} className="hover:scale-110 duration-205 hover:underline">
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoIosClose size={24} /> : <MdMenu size={24} />}{" "}
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li key={id} className="hover:scale-110 duration-200">
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
