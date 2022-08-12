import { Link } from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogout }) => {
    let authenticatedOptions
    if (user) {
        <nav>
            <h3>ayo wassup {user.email}</h3>
            <Link to="/shop">Shop</Link>
            <Link onClick={handleLogout} to="/">Sign Out</Link>
        </nav>
    }

    const publicOptions = (
        <nav>
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
        </nav>
    )

    return (
        <header>
            <Link to="/">
            <div className="logo-time" alt="logo">
                <img className="logo" src="TBD" alt="Warm Welcomes"/>
            </div>
            </Link>
            {authenticated && user ? authenticatedOptions : publicOptions}
        </header>
    )
}

export default Nav