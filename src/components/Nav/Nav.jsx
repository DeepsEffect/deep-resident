import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";
import { RxAvatar } from "react-icons/rx";
import "./Nav.css";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
    toast.success(`${user.displayName} Logged out successfully`);
  };
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/faq"}>FAQ</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/userProfile"}>User Profile</NavLink>
          </li>
          <li>
            <NavLink to={"/updateProfile"}>Update Profile</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 text-text font-body font-medium lg:font-medium">
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
            className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          to={"/"}
          className="text-xl font-bold lg:text-3xl lg:font-bold font-heading"
        >
          Deep <span className="text-primary">Resident</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4 px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end ">
        {user ? (
          <NavLink to={"/userProfile"}>
            <div
              className="avatar tooltip-bottom z-10 tooltip cursor-pointer"
              data-tip={user.displayName}
            >
              <div className="w-12 rounded-full">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="user profile" />
                ) : (
                  <img src="https://images.unsplash.com/photo-1657642119697-6a70dc74c03d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                )}
              </div>
            </div>
          </NavLink>
        ) : (
          <RxAvatar className="text-4xl mr-4" />
        )}

        {user ? (
          <button onClick={handleLogout} className="btn ml-4">
            Logout
          </button>
        ) : (
          <NavLink to={"/login"} className="btn">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Nav;
