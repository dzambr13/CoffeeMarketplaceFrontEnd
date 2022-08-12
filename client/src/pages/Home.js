import {Link} from 'react-router-dom'
import {useNavigate} from 'react'

const Home=()=>{

    return (
        <div className='home'>
            <p> HOME </p> 
            <Link to='/user'> user </Link>
            <Link to='/shop'> shop </Link>
            <Link to='/auth'> auth </Link>
        </div>
    )
}

export default Home 