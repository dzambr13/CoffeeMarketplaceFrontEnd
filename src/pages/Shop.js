import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CoffeeCard from '../components/CoffeeCard'
import CoffeeDetails from '../components/CoffeeDetails'
import Search from '../components/Search'
import axios from 'axios'

const Shop = ({ authenticated, user, handleLogOut }) => {
  let authNote
  let logOutButton
  if (user) {
    authNote = (
      <div id="user">
        <div id="icon"></div>
        <div id="user-name">{user.userName}</div>
      </div>
    )
    logOutButton = (
      <button
        id="logOutButton"
        onClick={(e) => {
          handleLogOut()
        }}
      >
        Log Out
      </button>
    )
  } else {
    authNote = <div></div>
    logOutButton = <div></div>
  }

  let [products, setProducts] = useState([])

  useEffect(() => {
    const GetAllProducts = async () => {
      let res = await axios('http://localhost:3001/api/products')
      setProducts(res.data)
    }
    GetAllProducts()
  }, [])
  console.log(products)

  return (
    <div className="shop">
      <div className="shop-navigation">
        <div className="ShopSearch">
          {authNote}
          <Search />
        </div>
        {logOutButton}
        {!user && (
          <Link className="shop-links" to="/register">
            create an account
          </Link>
        )}
        {!user && (
          <Link className="shop-links" to="/signin">
            sign in
          </Link>
        )}
        {/* <Link className="shop-links" to="/profile">
          profile
        </Link> */}
        <Link className="shop-links" to="/">
          home
        </Link>
        {user && (
          <Link className="shop-links" to="/profile">
            profile
          </Link>
        )}
      </div>
      <div className="aisle">
        {products?.map((product) => (
          <div className="coffee-tile">
            <p>{product.name}</p>
            <p>${product.price}.99</p>
            <div className="img-container">
              <div className="coffee-pic"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// onClick to CoffeeDetails within shop function
export default Shop
