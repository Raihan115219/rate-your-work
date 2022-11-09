import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

function Header() {
  const { userSignOut, user } = useContext(AuthContext);

  // const handleLogout=()=>{
  //   userSignOut()
  // }
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

            {user ? (
              <>
                <li>
                  <NavLink to="/review">My Review</NavLink>
                </li>
                <li>
                  <NavLink to="/add">Add Service</NavLink>
                </li>
                <li onClick={userSignOut}>
                  <NavLink to="/login">Log out</NavLink>
                </li>
              </>
            ) : (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
            <li>
              <NavLink to="/sign-up">Registration</NavLink>
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
                {/*  */}
                {user ? (
                  <img src={user?.photoURL} alt={user.displayName} />
                ) : (
                  <img
                    src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?b=1&s=612x612&w=0&k=20&c=IJ1HiV33jl9wTVpneAcU2CEPdGRwuZJsBs_92uk_xNs="
                    alt="user"
                  />
                )}
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
                {user ? (
                  <button onClick={userSignOut}>Logout</button>
                ) : (
                  <Link to="/login">
                    <button className="btn btn-primary">sign-in</button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
