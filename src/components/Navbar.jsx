import { Link } from "react-router-dom";
import "./NavbarStyles.scss";
import { useState } from "react";

const navItems = [
  {
    name: "Home",
    icon: "fa-solid fa-house-user",
    url: "/",
    cName: "nav-links",
  },
  {
    name: "About",
    icon: "fa-solid fa-circle-info",
    url: "/about",
    cName: "nav-links",
  },
  {
    name: "Service",
    icon: "fa-solid fa-briefcase",
    url: "/service",
    cName: "nav-links",
  },
  {
    name: "Contact",
    icon: "fa-solid fa-address-book",
    url: "/contact",
    cName: "nav-links",
  },
  {
    name: "SignUp",
    url: "/signup",
    cName: "nav-link-mobile",
  },
];

export default function Navbar() {
  const [isToggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar-items">
      <h1 className="navbar-logo">KeralaTours</h1>
      <div className="menu-icons">
        <li
          className={`fas ${isToggleMenu ? "fa-times" : "fa-bars"}`}
          onClick={() => setToggleMenu(!isToggleMenu)}
        ></li>
      </div>
      <ul className={`${isToggleMenu ? "nav-menu active" : "nav-menu"}`}>
        {navItems.map((item, index) => (
          <li key={index} className={item.cName}>
            <i className={item.icon}></i>
            <Link
              to={item.url}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {item.name}
            </Link>
          </li>
        ))}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
}
