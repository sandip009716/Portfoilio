import React from "react";
import Cpp from "../../public/Cpp.png";
import css from "../../public/css.jpg";
import html from "../../public/html.png";
import express from "../../public/express.png";
import javascript from "../../public/javascript.png";
import mongodb from "../../public/mongodb.jpg";
import node from "../../public/node.png";

import react from "../../public/reactjs.png";

function TackStack() {
  const cardItem = [
    {
      id: 0,
      logo: Cpp,
      name: "Cpp",
    },
    {
      id: 1,
      logo: html,
      name: "Html",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: react,
      name: "React.js",
    },
    {
      id: 5,
      logo: mongodb,
      name: "mongoDB",
    },
    {
      id: 6,
      logo: express,
      name: "Express.js",
    },
    {
      id: 7,
      logo: node,
      name: "Node.js",
    },
  ];

  return (
    <>
      <hr className="border-t-1 border-gray-200 mb-8" />
      <div
        id="TeckStack"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-16"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">TackStack</h1>
          <p className="">
            These are the technologies I’m most comfortable with and excited to
            work on.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
            {cardItem.map(({ id, logo, name }) => {
              return (
                <div
                  className=" flex flex-col 
               w-[150px] h-[150px] items-center justify-center border-[1px] rounded-full shadow-md p-2 cursor-pointer hover:scale-105 duration-300 md:w-[150px] md:h-[150 px]"
                  key={id}
                >
                  <img src={logo} className="w-[100px] rounded-full" alt="" />
                  <div>
                    <div className="">{name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default TackStack;
