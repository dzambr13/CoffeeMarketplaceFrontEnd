import { Link } from 'react-router-dom'
import CoffeeCard from '../components/CoffeeCard'
import CoffeeDetails from '../components/CoffeeDetails'
import Search from '../components/Search'

const Shop = () => {
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
    </div>
  )
}

export default Shop
