import { Outlet, Link } from 'react-router-dom';
import './Nav.css';
const Nav = () => {
  return (
    <>
      <ul className="nav">
        <Link className="nav-li" to="/">
          Home
        </Link>
        <Link className="nav-li" to="/about">
          About
        </Link>
        <Link className="nav-li" to="/contact">
          Contact Us
        </Link>
        <Link className="nav-li" to="/todo">
          Todo
        </Link>
      </ul>
      <Outlet />
    </>
  );
};

export default Nav;
