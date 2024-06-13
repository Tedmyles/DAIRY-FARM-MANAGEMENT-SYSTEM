import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import './styles/sidebar.css'; // Import the external CSS file

const Sidebar = () => {
  return (
    <aside className="sidebar w-64 bg-gray-800 text-white h-screen p-4">
      <ul>
        <li className="my-4">
          <NavLink
            to="/animals"
            className="block py-2 px-4 rounded"
            activeClassName="active-link"
          >
            Animals
          </NavLink>
        </li>
        <li className="my-4">
          <NavLink
            to="/milk-production"
            className="block py-2 px-4 rounded"
            activeClassName="active-link"
          >
            Milk Production
          </NavLink>
        </li>
        <li className="my-4">
          <NavLink
            to="/feed-management"
            className="block py-2 px-4 rounded"
            activeClassName="active-link"
          >
            Feed Management
          </NavLink>
        </li>
        <li className="my-4">
          <NavLink
            to="/health-records"
            className="block py-2 px-4 rounded"
            activeClassName="active-link"
          >
            Health Records
          </NavLink>
        </li>
        <li className="my-4">
          <NavLink
            to="/sales"
            className="block py-2 px-4 rounded"
            activeClassName="active-link"
          >
            Sales
          </NavLink>
        </li>
        <li className="my-4">
          <NavLink
            to="/reports"
            className="block py-2 px-4 rounded"
            activeClassName="active-link"
          >
            Reports
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
