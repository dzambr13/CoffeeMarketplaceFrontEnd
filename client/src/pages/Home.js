import { Link } from 'react-router-dom'
import { useNavigate } from 'react'
import Search from '../components/Search'
import CoffeeCard from '../components/CoffeeCard'
import React from 'react'

const Home = ({ user, authenticated }) => {
  console.log('User = ', user)

  return (
    <div className="home">
      <p> HOME </p>
      <Link to="/user"> user </Link>
      <Link to="/shop"> shop </Link>
      <Link to="/register"> REGISTER PAGE </Link>

      <div>
        <Search />
        <CoffeeCard />
      </div>
    </div>
  )
}

export default Home
