import planeta77 from "../imgs/planeta77.jpg"
import planeta11 from "./src/imgs/planeta11.jpeg"
import planeta66 from "./src/imgs/planeta66.jpg"

import React from "react";

import GetStart from "./GetStart";
import Consider from "./Consider";
import Sections from "./Sections";


function Home() {
  return (
    <>

        <div className="carousel w-full bg-gray-900">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://i.postimg.cc/BnJtVhqD/planeta77.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="https://i.postimg.cc/wxJvTKML/planeta11.jpeg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="https://i.postimg.cc/jjF5CtyQ/planeta66.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
          </div>
        </div>
      </section>

      <GetStart />
      <Consider />
      <Sections /
      <section>
        <div className="carousel w-full bg-gray-900">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src={planeta77}
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src={planeta11}
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src={planeta66}
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              </div>
            </div>
          </div>
      </section>
        
      </>
  );
}

export default Home;
