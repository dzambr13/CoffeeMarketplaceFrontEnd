import "./App.css";
import react, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import User from "./pages/User";
import Auth from "./pages/Auth";
import axios from "axios";
import Nav from "./components/Nav";

export const App = () => {
  return (
    <div className="App">
      <header>{/* <Nav /> */}</header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/user" element={<User />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
