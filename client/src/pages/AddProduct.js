import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CheckSession } from "../services/Auth";
// import Client from "./api";
import Roaster from "../components/Roaster";
import axios from "axios";
const BASE_URL = "/api";

const AddNewProduct = () => {
  let navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: "",
    units: "",
    quantity: "",
    texture: "",
    productImageUrl: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await AddNewProduct({
      name: formValues.name,
      units: formValues.units,
      quantity: formValues.quantity,
      texture: formValues.texture,
      productImageUrl: formValues.productImageUrl,
      price: formValues.price,
      description: formValues.description,
    });

    return (
      <form className="col" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          {/* <label htmlFor="name">~~name~~</label> */}
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Product name"
            value={formValues.name}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            name="units"
            type="text"
            placeholder="Units"
            value={formValues.units}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            name="quantity"
            type="text"
            placeholder="Quantity"
            value={formValues.quantity}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            name="texture"
            type="text"
            placeholder="texture"
            value={formValues.texture}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            name="productImageUrl"
            type="text"
            placeholder="firstName"
            value={formValues.productImageUrl}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            name="price"
            type="text"
            placeholder="Price"
            value={formValues.price}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            name="description"
            type="text"
            placeholder="Description"
            value={formValues.description}
            required
          />
        </div>
      </form>
    );
  };
};
export default AddNewProduct;
