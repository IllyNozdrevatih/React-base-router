import "react";
import { Link, NavLink } from "react-router-dom";
import UserListPage from "../pages/UserListPage";
import Welcome from "../pages/Welcome";

function DefaultHeader() {
  return (
    <header>
      <div className="container">
        <div className="d-flex justify-content-center py-3">
          <nav>
            <ul className="list-unstyled d-flex">
              <li>
                <NavLink
                  className="px-3"
                  to="/"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : "",
                    };
                  }}
                >
                  Welcome
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="px-3"
                  to="/invoices"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : "",
                    };
                  }}
                >
                  Invoices
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="px-3"
                  to="/user-list"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : "",
                    };
                  }}
                >
                  User list
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default DefaultHeader;
