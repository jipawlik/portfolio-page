import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        {" "}
        <Link to={"/"} className="nav-item">
          jp.
        </Link>
      </div>

      <div className="nav-items">
        <Link to={"/"} className="nav-item">
          Home
        </Link>
        <Link to={"/projects"} className="nav-item">
          Projects
        </Link>
        <Link to={"/contact"} className="nav-item">
          Contact
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
