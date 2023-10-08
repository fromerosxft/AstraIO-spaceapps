import React from "react";

import Planet from "../components/Planet.jsx";

function Game() {
  return (
    <main className="w-full bg-white flex justify-center">
      <div className="container w-2/3 p-4 m-4 border-4 border-white rounded-xl h-96 bg-black flex items-center justify-center relative">
        <div className="absolute animate-spin-plt left-4">
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
        </div>
      </div>
    </main>
  );
}

export default Game;