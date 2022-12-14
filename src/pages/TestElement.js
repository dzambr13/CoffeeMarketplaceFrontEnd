import { useState } from "react";
import axios from "axios";
import Client from "../services/api";

const TestElement = ({ user, sellerProducts, setSellerProducts }) => {
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
    let res = await Client.post("http://localhost:3001/api/products/create", {
      name: formValues.name,
      units: formValues.units,
      quantity: formValues.quantity,
      texture: formValues.texture,
      productImageUrl: formValues.productImageUrl,
      price: formValues.price,
      description: formValues.description,
      roasterId: user.id,
    });
    let temp = [...sellerProducts, res.data];
    setSellerProducts(temp);
  };

  return (
    <div className="add-product">
      <form className="col" id='add-new-product' onSubmit={handleSubmit}>
      <div className='add-product-title'>Add Product</div>
        <div className="input-wrapper" id='new-product'>
          <input className="add-product-input" id='new-product'
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Product name"
            value={formValues.name}
            required
          />
        </div>
        <div className="input-wrapper">
          <input className="add-product-input" id='new-product'
            onChange={handleChange}
            name="units"
            type="text"
            placeholder="Units"
            value={formValues.units}
            required
          />
        </div>
        <div className="input-wrapper">
          <input className="add-product-input" id='new-product'
            onChange={handleChange}
            name="quantity"
            type="text"
            placeholder="Quantity"
            value={formValues.quantity}
            required
          />
        </div>
        <div className="input-wrapper">
          <input className="add-product-input" id='new-product'
            onChange={handleChange}
            name="texture"
            type="text"
            placeholder="texture"
            value={formValues.texture}
            required
          />
        </div>
        <div className="input-wrapper">
          <input className="add-product-input" id='new-product'
            onChange={handleChange}
            name="productImageUrl"
            type="text"
            placeholder="Image Url"
            value={formValues.productImageUrl}
            required
          />
        </div>
        <div className="input-wrapper">
          <input className="add-product-input" id='new-product'
            onChange={handleChange}
            name="price"
            type="text"
            placeholder="Price"
            value={formValues.price}
            required
          />
        </div>
        <div className="input-wrapper">
          <input className="add-product-input" id='new-product'
            onChange={handleChange}
            name="description"
            type="text"
            placeholder="Description"
            value={formValues.description}
            required
          />
        </div>
        <button className='add-product-button' disabled={!formValues.name}>Add</button>
      </form>
    </div>
  );
};

export default TestElement;
