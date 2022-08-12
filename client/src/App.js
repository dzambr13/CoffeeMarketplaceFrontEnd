import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

export const App = () => {
  return (
    <div className="App">
      <Nav />
      <header></header>
      <main>
        <Routes>{/* <Route path='/' element={<Home/>} /> */}</Routes>
      </main>
    </div>
  );
};

export default App;
