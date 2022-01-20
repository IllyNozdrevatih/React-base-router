import "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserListPage from "../pages/UserList";
import Welcome from "../pages/Welcome";

function DefaultHeader() {
  return (
    <header>
      <div className="container">
        <div className="d-flex justify-content-center py-3">
          <nav>
            <ul className="list-unstyled d-flex">
              <li>
                <Link className="px-3" to="/">
                  Welcome
                </Link>
              </li>
              <li>
                <Link className="px-3" to="/user-list">
                  User list
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default DefaultHeader;
