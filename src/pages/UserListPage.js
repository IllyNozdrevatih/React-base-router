import React, { useState, useEffect } from "react";
import "bootstrap/scss/bootstrap.scss";

import axios from "axios";
import UserCard from "../components/UserCard";
import { Link } from "react-router-dom";

function UserListPage() {
  const [userList, setUserList] = useState([]);
  useEffect(async () => {
    try {
      const { data } = await axios.get("https://gorest.co.in/public/v1/users");
      setUserList(data.data);
    } catch (e) {
      console.log(e);
    }
    console.log("useEffect");
  }, []);

  const _LayoutUserList = userList.map((userItem) => {
    return (
      <div className="col-4 p-3" key={userItem.id}>
        <div className="position-relative">
          <UserCard userItem={userItem} />
          <Link
            className="position-absolute w-100 h-100 link-absolute"
            to={`/user-list/${userItem.id}`}
          ></Link>
        </div>
      </div>
    );
  });

  return (
    <div className="App d-flex flex-column min-vh-100">
      <div className="container">
        <div className="row">{_LayoutUserList}</div>
      </div>
    </div>
  );
}

export default UserListPage;
