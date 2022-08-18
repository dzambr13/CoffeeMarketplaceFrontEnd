import { Link } from 'react-router-dom'
import { useNavigate } from 'react'
import Search from '../components/Search'
import CoffeeCard from '../components/CoffeeCard'

const Home = ({ user, authenticated }) => {
  console.log('User = ', user)

  return (
    <div className="home-home">
      <div className="home-navigation">
        <div className="home-links">
          <Link className="link" to="/shop">
            Shop
          </Link>
          <Link className="link" to="/register">
            Sign up
          </Link>
          <Link className="link" to="/signin">
            Sign in
          </Link>
        </div>
        <div className="home-search">
          <Search className="home-search-bar" />
        </div>
      </div>
      <div className="logo"> K o h i </div>
      <div className="home-featured-container">
        <div className="home-featured"></div>
      </div>
    </div>
  )
}

export default Home
