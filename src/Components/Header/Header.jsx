import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <NavLink to="/">
            <img
              src="https://mrplumberindy.com/wp-content/uploads/2021/01/WCA_MP_Logo_Full_Color512x512.png"
              alt=""
              className="w-24 rounded-full"
            />
          </NavLink>
        </div>
        <div className="flex-none gap-2">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/service">service</NavLink>
            </li>
            <li>
              <NavLink to="/sign-up">Registration</NavLink>
            </li>
            <li>
              <NavLink to="/login">Lgoin</NavLink>
            </li>
          </ul>
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
