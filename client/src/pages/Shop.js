import { Link } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";
import CoffeeDetails from "../components/CoffeeDetails";
import Search from "../components/Search";

const Shop = () => {
  return (
    <div className="shop">
      <p>SHOP</p>
      <Link to="/">Home</Link>
      <Link to="/user">User</Link>
      <Link to="/auth">Auth</Link>

      <div>
        <CoffeeCard/>
        <CoffeeDetails/>
        <Search />
      </div>
    </div>
  );
};

export default Shop;
