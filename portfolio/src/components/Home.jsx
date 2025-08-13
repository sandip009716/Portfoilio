import React, { useState } from "react";
// above change combine use uesState and react
import pic from "../../public/SandipKumar.jpg";
import { ReactTyped, Typed } from "react-typed";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import Certification from "./Certification";

function Home() {
  const [showCertifications, setShowCertifications] = useState(false);
  //  above line add by me
  return (
    <>
      <div
        id="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-15"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1 ">
            <span className="text-3xl">Welcome in My Page</span>
            <div className="flex">
              <h1 className="text-xl">Hello, I'am a<span> </span></h1>

              <ReactTyped
                className="text-red-700 font-bold text-xl"
                strings={[" Developer", "Programmer", "Coder"]}
                typeSpeed={70}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br></br>
            <p className="text-sm md:text-md text-justify">
              I’m a passionate and eager web developer focused on creating
              responsive, user-friendly websites. As a fresher, I’m committed to
              learning new technologies, improving my skills, and turning
              creative ideas into engaging digital experiences.
            </p>
            {/* Social Media icons */}
            <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-5 mt-2">
                  <li>
                    <a
                      href="https://www.instagram.com/sani_0097016/"
                      target="_blank"
                    >
                      <FaInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/sandip97/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/SandipKuma32117" target="_blank">
                      <FaTwitter className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://web.telegram.org/a/" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer" />
                  <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer" />
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer" />
                  <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer" />
                </div>
              </div>
            </div>
            {/* resume my side */}
            <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 mt-7 md:mt-15">
              <div className="space-y-2">
                <h1 className="font-bold">My Resume</h1>
                <a
                  href="/Resume sandip kumar.pdf"
                  download="Sandip_Kumar_Resume.pdf"
                  className="flex space-x-5 mt-2 border-2 w-28 bg-slate-200 rounded-md px-3 py-2"
                >
                  Download
                </a>
              
              <div className="space-y-2">
                <Certification />
              </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 ">
            <img
              src={pic}
              alt=""
              className="rounded-full md:w-[400px] md:h-[400px]"
            ></img>
          </div>
        </div>
      </div>

      <hr className="border-t-1 border-gray-200 mt-[-20px]" />
    </>
  );
}

export default Home;
