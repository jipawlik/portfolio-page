import { NavLink, Link } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const hideMenu = () => {
    if (window.innerWidth < 1024) {
      setOpen(!isOpen);
    }
  };
  isOpen ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    <nav className="navigation">
      <div className="logo">
        {" "}
        <Link to={"/"} className="nav-item">
          jp.
        </Link>
      </div>
      <div className="nav-burger">
        <Hamburger
          size={40}
          color="#141414"
          label="Show menu"
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
      <ul className={isOpen ? "burger-menu" : "nav-items"}>
        <li className="nav-item">
          <NavLink
            to={"/"}
            className="nav-link"
            onClick={hideMenu}
            activeClassName="selected"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={"/projects"}
            className="nav-link"
            onClick={hideMenu}
            activeClassName="selected"
          >
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={"/contact"}
            className="nav-link"
            onClick={hideMenu}
            activeClassName="selected"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
