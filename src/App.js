import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/scss/bootstrap.scss";

import DefaultHeader from "./layout/DefaultHeader";
import DefaultFooter from "./layout/DefaultFooter";
import { Route, Routes } from "react-router";
import Welcome from "./pages/Welcome";
import UserList from "./pages/UserList";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <div className="mb-auto">
        <DefaultHeader />
      </div>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="/user-list" element={<UserList />} />
        </Routes>
      </div>
      <div className="mt-auto">
        <DefaultFooter />
      </div>
    </div>
  );
}

export default App;
