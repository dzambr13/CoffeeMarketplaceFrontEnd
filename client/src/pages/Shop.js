import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CoffeeCard from "../components/CoffeeCard";
import CoffeeDetails from "../components/CoffeeDetails";
import Search from "../components/Search";
import axios from "axios";

const Shop = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    const GetAllProducts = async () => {
      let res = await axios("http://localhost:3001/api/products");
      setProducts(res.data);
    };
    GetAllProducts();
  }, []);
  console.log(products);

  return (
    <div className="shop">
      <div className="shop-navigation">
        <Link className="shop-links" to="/register">
          create an account
        </Link>
        <Link className="shop-links" to="/signin">
          sign in
        </Link>
        <Link className="shop-links" to="/user">
          profile
        </Link>
        <Link className="shop-links" to="/">
          home
        </Link>
      </div>

      <div className="ShopSearch">
        <Search />
        {/* <CoffeeCard /> */}
        <CoffeeDetails />
      </div>
      <div>
        {products?.map((product) => (
          <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
// onClick to CoffeeDetails within shop function
export default Shop;
