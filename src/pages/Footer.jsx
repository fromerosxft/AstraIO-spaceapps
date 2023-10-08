import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer footer-center p-10 bg-neutral text-base-100 bg-[url('https://i.pinimg.com/originals/bd/63/3d/bd633d443ea586bd9dd6ae56c690870d.gif')]">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover hover:text-primary" href="https://www.nasa.gov/">Nasa </a>
          <a className="link link-hover hover:text-primary" href="https://www.spaceappschallenge.org/">Space Apps</a>
          <a className="link link-hover hover:text-primary" href="https://stablediffusionweb.com/">Stable Difusion</a>
          <a className="link link-hover hover:text-primary" href="https://www.hyperui.dev/">HyperUI</a>
          <a className="link link-hover hover:text-primary" href="https://heroicons.com/">Heroicons</a>
        </nav>
        <aside>
          <p>2023 - Astra Io</p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
