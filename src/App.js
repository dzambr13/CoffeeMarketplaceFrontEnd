import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import User from "./pages/User";
import Register from "./pages/Register";
import axios from "axios";
import SignIn from "./pages/SignIn";
import Member from "./components/Member";
import TestElement from "./pages/TestElement";

import { CheckSession } from "./services/Auth";
import React from "react";

import { useState, useEffect } from "react";
import RegisterAsRoaster from "./components/RegisterAsRoaster";
import AddNewProduct from "./pages/AddProduct";
import UpdateProduct from "./components/UpdateProduct";

const App = () => {
  let [sellerProducts, setSellerProducts] = useState([]);
  let [productToUpdate, setProductToUpdate] = useState(0);

  const GetSellerProducts = async () => {
    let res = await axios.get("http://localhost:3001/api/products");
    let AllProducts = res.data;
    let sp = [];
    AllProducts.map((product) => {
      product.roasterId === user.id
        ? sp.push(product)
        : console.log("Not user's product");
    });
    setSellerProducts(sp);
  };

  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState(null);


  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    toggleAuthenticated(true);

  };

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null);
    toggleAuthenticated(false);
    localStorage.clear();
  };
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkToken();
    }
  }, []);


  return (
    <div className="App">
      <main>
        <Routes>
        <Route path="/shop" element={<Shop user={user} handleLogOut={handleLogOut} />} />
          <Route path="/" element={<Home user={user} handleLogOut={handleLogOut} />} />
          <Route path="/user" element={<User authenticated={authenticated}/>} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/signin"
            element={
              <SignIn
                user={user}
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
                authenticated={authenticated}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Member
                user={user}
                sellerProducts={sellerProducts}
                setSellerProducts={setSellerProducts}
                GetSellerProducts={GetSellerProducts}
                productToUpdate={productToUpdate}
                setProductToUpdate={setProductToUpdate}
                authenticated={authenticated}
              />
            }
          />
          <Route path="/user/addproduct" element={<AddNewProduct authenticated={authenticated} />} />
          <Route path="/test" element={<TestElement />} />
          <Route
            path="/update-product"
            element={
              <UpdateProduct
                sellerProducts={sellerProducts}
                setSellerProducts={setSellerProducts}
                productToUpdate={productToUpdate}
                authenticated={authenticated}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
