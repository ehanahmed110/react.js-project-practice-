import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container mx-auto bg-gray-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">User Management</div>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="hover:bg-blue-700 px-3 py-2 rounded transition"
            >
              User List
            </Link>
          </li>
          <li>
            <Link
              to="/adduser"
              className="hover:bg-blue-700 px-3 py-2 rounded transition"
            >
              Add User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

