import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import social from "../../public/SocialMedia.jpeg";
import Ai from "../../public/AiImage.avif";
import book from "../../public/12772.jpg";


// import express from "../../public/express.png";
// import javascript from "../../public/javascript.png";
// import mongodb from "../../public/mongodb.jpg";
// import node from "../../public/node.png";
// import react from "../../public/reactjs.png";

function MyProject() {
  // const cardItem = [
  //   {
  //     id: 1,
  //     logo: html,
  //     name: "BookStore",
  //   },
  //   {
  //     id: 2,
  //     logo: css,
  //     name: "SocialMedia",
  //   },
    // {
    //   id: 3,
    //   logo: javascript,
    //   name: "JavaScript",
    // },
    // {
    //   id: 4,
    //   logo: react,
    //   name: "React.js",
    // },
    // {
    //   id: 5,
    //   logo: mongodb,
    //   name: "mongoDB",
    // },
    // {
    //   id: 6,
    //   logo: express,
    //   name: "Express.js",
    // },
    // {
    //   id: 7,
    //   logo: node,
    //   name: "Node.js",
    // },
  //];
  return (
    <>
      <hr className="border-t-1 border-gray-200 mb-8" />
      <div
        id="My Projects"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20"
      >
        <h1 className="text-3xl font-bold mb-5">My Projects</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-col-1 md:grid-cols-4 gap-3 my-5">
          {/* {cardItem.map(({ id, logo, name }) => {
            return (
              <div
                className="md:w-[250px] md:h-[250] border-[1px] rounded-lg shadow-lg p-2 cursor-pointer hover:scale-105"
                key={1}
              >
                <img
                  src={html}
                  className="w-[100px] h-[100px] p-1 rounded-full border-[2px]"
                  alt=""
                ></img>
                <div>
                  <div className="px-2 font-bold text-xl mb-2">{name}</div>
                  <p className="px-2 text-gray-700 text-sm">
                    This project I am creating for reading books paid an unpaid
                    book this is provide some advance feature
                  </p>
                </div>
                <div className="px-6 py-4 space-x-3 justify-around">
                  <button className="bg-blue-500 text-white font-semibold rounded-md px-3 py-1 hover:bg-blue-600 hover:scale-103 ">
                    View
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        "https://github.com/sandip009716/Book-Store",
                        "_blank"
                      )
                    }
                    className="bg-green-500 text-white font-semibold rounded-md px-3 py-1 hover:bg-green-600 hover:scale-103"
                  >
                    Source Code
                  </button>
                </div>
              </div>
            );
          })} */}


           <div
                className="md:w-[250px] md:h-[250] border-[1px] rounded-lg shadow-lg p-2 cursor-pointer hover:scale-105 "
                key={1}
              >
                <img
                  src={Ai}
                  className="w-[100px] h-[100px] p-1 rounded-full border-[2px]"
                  alt=""
                ></img>
                <div>
                  <div className="px-2 font-bold text-xl mb-2">{"Cognify"}</div>
                  <p className="px-2 text-gray-700 text-sm">
                    Include ai feature like remove backgroud, Ai Articale, and image Gernator etc
                  </p>
                </div>
                <div className="px-3 py-5 mt-5 space-x-3 justify-between items-center flex">
                  <button className="bg-blue-500 text-white font-semibold rounded-md px-3 py-1 hover:bg-blue-600 hover:scale-103 ">
                    View
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        "https://github.com/sandip009716/Book-Store",
                        "_blank"
                      )
                    }
                    className="bg-green-500 text-white font-semibold rounded-md px-3 py-1 hover:bg-green-600 hover:scale-103"
                  >
                    Source Code
                  </button>
                </div>
              </div>




           <div
                className="md:w-[250px] md:h-[250] border-[1px] rounded-lg shadow-lg p-2 cursor-pointer hover:scale-105 "
                key={1}
              >
                <img
                  src={book}
                  className="w-[100px] h-[100px] p-1 rounded-full border-[2px]"
                  alt=""
                ></img>
                <div>
                  <div className="px-2 font-bold text-xl mb-2">{"LibroSense"}</div>
                  <p className="px-2 text-gray-700 text-sm">
                   reading books paid an unpaid
                    book this is also provide some advance feature.
                  </p>
                </div>
                <div className="px-3 py-5 mt-5 space-x-3 justify-between items-center flex">
                  <button className="bg-blue-500 text-white font-semibold rounded-md px-3 py-1 hover:bg-blue-600 hover:scale-103 ">
                    View
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        "https://github.com/sandip009716/Book-Store",
                        "_blank"
                      )
                    }
                    className="bg-green-500 text-white font-semibold rounded-md px-3 py-1 hover:bg-green-600 hover:scale-103"
                  >
                    Source Code
                  </button>
                </div>
              </div>




           <div
                className="md:w-[250px] md:h-[250] border-[1px] rounded-lg shadow-lg p-2 cursor-pointer hover:scale-105"
                key={1}
              >
                <img
                  src={social}
                  className="w-[100px] h-[100px] p-1 rounded-full border-[2px]"
                  alt=""
                ></img>
                <div>
                  <div className="px-2 font-bold text-xl mb-2">{"Connectly"}</div>
                  <p className="px-2 text-gray-700 text-sm">
                    for creating social media create your post and also delete the post
                  </p>
                </div>
                <div className="px-3 py-5 mt-5 space-x-3 justify-between items-center flex">
                  <button className="bg-blue-500 text-white font-semibold rounded-md px-3 py-1 hover:bg-blue-600 hover:scale-105 ">
                    View
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        "https://github.com/sandip009716/Social-Media",
                        "_blank"
                      )
                    }
                    className="bg-green-500 text-white font-semibold rounded-md px-3 py-1 hover:bg-green-600 hover:scale-103 "
                  >
                    Source Code
                  </button>
                </div>
              </div>


        </div>
      </div>
    </>
  );
}

export default MyProject;
