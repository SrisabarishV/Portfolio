import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">MyPortfolio</h1>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Links */}
      <ul className={open ? "nav-links open" : "nav-links"}>
        <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
