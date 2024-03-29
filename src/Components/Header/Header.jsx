
import { NavLink } from "react-router-dom";

const Header = () => {
 
  
  
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({isActive}) => {
            return isActive ? "navActive" : "navInActive" 
          } }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/listedbooks`}
          className={({isActive}) => {
            return isActive ? "navActive" : "navInActive" 
          } }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pagestoread"
          className={({isActive}) => {
            return isActive ? "navActive" : "navInActive" 
          } }
        >
          Pages To Read
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="container mx-auto" >
    <div className="navbar bg-base-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">BookVerse</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end hidden md:flex gap-x-4 ">
        <a className="btn signInBtn">Sign In</a>
        <a className="btn signUpBtn">Sign Up</a>
      </div>

      <div className="navbar-end  md:hidden flex-col">
        <details className="dropdown">
          <summary className="m-1 text-white font-bold btn bg-gradient-to-r from-btnBgSignIn to-[#3a7bd5]">
            Sign IN UP
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box gap-y-2 ">
            <li>
              <a className="btn signInBtn">Sign In</a>
            </li>
            <li>
              <a className="btn signUpBtn ">Sign Up</a>
            </li>
          </ul>
        </details>
      </div>
    </div>
    </div>
  );
};

export default Header;
