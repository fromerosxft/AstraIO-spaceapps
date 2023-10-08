import React from "react";

function NavBar() {
  return (
    <>
      <div className="navbar  bg-neutral z-50 fixed text-base-100 bg-[url('https://i.pinimg.com/originals/bd/63/3d/bd633d443ea586bd9dd6ae56c690870d.gif')]">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl uppercase text-primary">astrA io</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="hover:text-primary" href="#getstart">Explora</a>
            </li>
            
            <li>
              <a className="hover:text-primary" href="#consider">Considera</a>
            </li>

            <li>
              <a className="hover:text-primary" href="#idealiza">Idealiza</a>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
