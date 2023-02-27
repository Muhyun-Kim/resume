import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <ul className="flex justify-between w-11/12 h-10 items-center fixed top-0 z-10 bg-gray-100">
        <div>
          <li className="text-xl font-black">
            <Link to="/">Muhyun Kim</Link>
          </li>
        </div>
        <div className="flex justify-between w-52">
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li >
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </div>
      </ul>
    </>
  );
}

export default Nav;
