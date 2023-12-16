import React from "react";
import { useState } from "react";
import "./navbar.css";
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMenuBook } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";

const NavBar = () => {
  const [active, setActiveNav] = useState("#/");
  return (
    <nav>
      <a
        href="#/"
        onClick={() => setActiveNav("#/")}
        className={active === "#/" ? "active" : ""}
      >
        <IoHomeOutline />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <CiUser />
      </a>
      <a
        href="#exprience"
        onClick={() => setActiveNav("#exprience")}
        className={active === "#exprience" ? "active" : ""}
      >
        <MdOutlineMenuBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={active === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <IoIosCall />
      </a>
      {/* <Link to="/about"> Contact us </Link> */}
    </nav>
  );
};

export default NavBar;
