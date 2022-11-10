import React from "react";
import { SiFoodpanda } from "react-icons/si";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <SiFoodpanda className="text-5xl text-orange-500" />
        <p>Copyright © 2022 - All right reserved</p>
      </div>
      <div className="grid-flow-col hidden md:flex gap-4 md:place-self-center md:justify-self-end">
        <a
          className="text-4xl"
          href="https://www.facebook.com/profile.php?id=100072886727482"
          target="_blank"
        >
          <BsFacebook />
        </a>
        <a
          className="text-4xl"
          href="https://www.instagram.com/mohammadashik951/?funlid=p5RajKBHHcHqHvmp&fbclid=IwAR3Mw3BvDyvxxv5aE6x93bzBQNHd8LqAik5OUn6bv-W2949T9X1yNEXXrJs"
          target="_blank"
        >
          <BsInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
