import React from "react";

import Planet from "../components/Planet.jsx";

function Game() {
  return (
    <main className="w-full bg-transparent flex justify-center">
      <div className="container w-2/3 p-4 m-4 rounded-xl h-96 bg-black border-2 border-white flex items-center bg-[url('https://i.pinimg.com/originals/bd/63/3d/bd633d443ea586bd9dd6ae56c690870d.gif')] justify-center relative">
        {/* <div className="absolute animate-spin-plt left-4 top-32">
          <Planet
            size="20"
            imageUrl="https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/earth.jpg"
          />
        </div>
        <div>
          <Planet
            size="60"
            imageUrl="https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/sun.jpg"
          />
        </div> */}
        <div className="animate-spin-plt absolute">
          <div className={`h-20 w-20 bg-transparent relative z-2`}>
            <div
              className={`circle h-full w-full animate-moving absolute z-3 rounded-full bg-repeat-x bg-cover bg-[right_0rem_top_0rem]  bg-[url('https://i.postimg.cc/zBBXBJSJ/base.jpg')]`}
            ></div>
            <div
              className={`h-20 w-20 bg-transparent shadow-plt rounded-full absolute z-4`}
            />
          </div>
        </div>

       <div >
          <div className={`h-60 w-60 bg-transparent relative z-2 shadow-sun shadow-red-500 rounded-full`}>
            <div
              className={`circle h-full w-full animate-moving absolute z-3 rounded-full bg-repeat-x bg-cover bg-[right_0rem_top_0rem]  bg-[url('https://i.postimg.cc/JhRzf3sH/red-sun.jpg')]`}
            ></div>
            <div
              className={`h-60 w-60 bg-transparent shadow-plt rounded-full absolute z-4`}
            />
          </div>
        </div>

      </div>
    </main>
  );
}

export default Game;
