import React from "react";

function NavBar() {
  return (
    <>
      <div className="navbar  bg-neutral text-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl uppercase text-primary">astr io</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="hover:text-primary">Link 1</a>
            </li>
            <li>
              <a className="hover:text-primary">Link 1</a>
            </li>
            <li>
              <a className="hover:text-primary">Link 1</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
