import { Link } from "react-router-dom";
import { useNavigate } from "react";
import Search from "../components/Search";
import CoffeeCard from "../components/CoffeeCard";

const Home = ({ user, authenticated }) => {
  console.log("User = ", user);

  return (
    <div className="home">
      <div className="home-navigation">
        <Link className="link" to="/register">
          create an account
        </Link>
        <Link className="link" to="/signin">
          sign in
        </Link>
        <Link className="link" to="/shop">
          browse
        </Link>
        <Link className="link" to="/user/addproduct">
          add product
        </Link>
      </div>
      <div className="logo">Kohi</div>
      <div className="home-featured-container">
        <div className="home-featured">
          <div className="feature">
            <p>Shop</p>
          </div>
          <div className="feature"></div>
        </div>
      </div>
      <div className="home-search">
        <Search className="home-search-bar" />
      </div>
    </div>
  );
};

export default Home;
