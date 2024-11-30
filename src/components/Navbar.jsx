import logo from "../assets/HenokSisayLogo.png";
import { FaLinkedin, FaGithub, FaTelegramPlane, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-2 border-b border-gray-300">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-10 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/henok-sisay-3647ab295" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-600" />
        </a>
        <a href="https://github.com/Henok-svg" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-900" />
        </a>
        <a href="https://www.instagram.com/hen.undertones" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-600" />
        </a>
        <a href="https://t.me/Wikihen" target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane className="hover:text-blue-400" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
