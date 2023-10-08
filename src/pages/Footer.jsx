import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer footer-center p-10 bg-neutral text-base-100">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover hover:text-primary">About us</a>
          <a className="link link-hover hover:text-primary">Contact</a>
          <a className="link link-hover hover:text-primary">Jobs</a>
          <a className="link link-hover hover:text-primary">Press kit</a>
        </nav>
        <aside>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
