import {Link} from 'react-router-dom'
import {useNavigate} from 'react'
import Search from '../components/Search'
import CoffeeCard from '../components/CoffeeCard'

const Home=()=>{

    return (
        <div className='home'>
            <p> HOME </p> 
            <Link to='/user'> user </Link>
            <Link to='/shop'> shop </Link>
            <Link to='/auth'> auth </Link>

            <div>
                <Search/>
                <CoffeeCard/>
            </div>
        </div>
    )
}

export default Home 