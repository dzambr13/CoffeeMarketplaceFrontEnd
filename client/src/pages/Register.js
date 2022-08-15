
import {useState} from 'react'
import {useNavigate,Link} from 'react-router-dom'

import RegisterAsRoaster from '../components/RegisterAsRoaster'
import RegisterAsMember from '../components/RegisterAsMember'

const Register = () => {
  const [registrationType, setRegistrationType] = useState(false)
  let registration
  let text

  if(registrationType){
    registration=<RegisterAsMember/>
    text="Register as a seller"
  }else{
    registration=<RegisterAsRoaster/>
    text="Register as a member"
  }

  return (
    <div>
      <div>
        <h2> Register Page </h2>
        <button
          onClick={() => {
            registrationType
              ? setRegistrationType(false)
              : setRegistrationType(true)
          }}
        >
          {text}
        </button>
      </div>
      <Link to='/'> Go Home </Link>
      <div>{registration}</div>
    </div>
  )
}

// cleanup
export default Register
