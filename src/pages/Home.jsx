import React from "react";


function Home() {
  return (
    <>
    <section>
    <div className="carousel w-full bg-gray-900">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="/src/imgs/planeta77.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="/src/imgs/planeta11.jpeg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="/src/imgs/planeta66.jpg"
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
