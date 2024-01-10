import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import cartimage from '../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png';
import profileimage from '../../../assets/others/profile.png';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthPorvaider/AuthProvaider';
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handlerLogout = () => {
    logout()
      .then()
      .catch(er => console.log(er.message));
  };
  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'text-[#EEFF25]' : '')}
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contuct"
          className={({ isActive }) => (isActive ? 'text-[#EEFF25]' : '')}
        >
          CONTACT us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? 'text-[#EEFF25]' : '')}
        >
          DASHBOARD
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/our-menu"
          className={({ isActive }) => (isActive ? 'text-[#EEFF25]' : '')}
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/order/${'salad' || 'pizza' || 'dessert' || 'soup' || 'drinks'}`}
          className={({ isActive }) => (isActive ? 'text-[#EEFF25]' : '')}
        >
          Our Shop
        </NavLink>
      </li>
      <li>
        <Link>
          <img className="w-8 h-8" src={cartimage} alt="" />
        </Link>
      </li>
      {user ? (
        <li className="flex items-center gap-2">
          <button
            className="btn btn-outline btn-accent"
            onClick={handlerLogout}
          >
            SIGN OUT
          </button>
          <img className="w-8 h-8 rounded-full" src={profileimage} alt="" />
        </li>
      ) : (
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => isActive && 'text-[#EEFF25]'}
          >
            LOGIN
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="fixed  text-white lg:w-[1200px]  w-full  z-10 bg-black/50">
      <div className="navbar h-20  flex justify-between items-center ">
        <div className="flex justify-center items-center lg:block">
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
              className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-black/75 upparcase rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <div className="">
            <Link to="/" className="font-[Cinzel] ">
              <span className="text-xl font-[900]">BISTRO BOSS</span> <br />
              <span className=" font-semibold pb-5 tracking-[6px]">
                Restaurant
              </span>
            </Link>
          </div>
        </div>
        <div className=" hidden w-fit  lg:flex">
          <ul className=" gap-5  flex items-center px-1 uppercase w-full">
            {navLink}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
