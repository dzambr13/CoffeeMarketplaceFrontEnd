import { Link } from 'react-router-dom'
import { useNavigate } from 'react'
import Search from '../components/Search'
import CoffeeCard from '../components/CoffeeCard'

const Home = ({ user, authenticated, handleLogOut }) => {
  console.log('User = ', user)

  let authNote
  let logOutButton
  if(user){
    authNote=(
      <div id='user'>
        <div id='icon'></div>
        <div id='user-name'>{user.userName}</div>
      </div>)
    logOutButton=(
      <button id='logOutButton' onClick={(e)=>{handleLogOut()}}>log out</button>
    )
  }else{
    authNote=(<div></div>)
    logOutButton=(<div></div>)
  }

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
          {logOutButton}
        </div>
        <div className="home-search">
          <Search className="home-search-bar" />
          {authNote}

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
