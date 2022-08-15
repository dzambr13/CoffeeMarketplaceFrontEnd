import "./App.css";
import react, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import User from "./pages/User";
import Register from "./pages/Register";
import axios from "axios";
import Nav from "./components/Nav";
import SignIn from './pages/SignIn'

export const App = () => {

  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  
  return (
    <div className="App">
      {/*<header> <Nav /> </header>*/}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/user" element={<User />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn setUser={setUser} toggleAuthenticated={toggleAuthenticated} />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
