import { Link } from 'react-router-dom'

const Shop = () => {
  return (
    <div className="shop">
      <p>SHOP</p>
      <Link to="/">Home</Link>
      <Link to="/user">User</Link>
      <Link to="/auth">Auth</Link>
    </div>
  )
}
// this is shop
export default Shop
