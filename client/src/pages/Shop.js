import { Link } from 'react-router-dom'
import CoffeeCard from '../components/CoffeeCard'
import CoffeeDetails from '../components/CoffeeDetails'
import Search from '../components/Search'
//Test gt cleanup

const Shop = () => {
  return (
    <div className="shop">
      <p>SHOP</p>
      <Link to="/">Home</Link>
      <Link to="/user">User</Link>
      <Link to="/auth">Auth</Link>

      <div>
        <Search />
        <CoffeeCard />
        <CoffeeDetails />
      </div>
    </div>
  )
}
// this is shop
export default Shop
