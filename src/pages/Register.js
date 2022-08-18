import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import RegisterAsRoaster from '../components/RegisterAsRoaster'
import RegisterAsMember from '../components/RegisterAsMember'

const Register = () => {
  const [registrationType, setRegistrationType] = useState(false)
  let registration
  let text

  if (!registrationType) {
    registration = <RegisterAsMember />
    text = 'create a seller account'
  } else {
    registration = <RegisterAsRoaster />
    text = 'create a buyer account'
  }

  return (
    <div className='registration-page'>
      <div className='registration-nav'>
        <Link className='registration-links' to="/">home</Link>
        <Link className='registration-links' to="/shop">browse</Link>
      </div>
      <div className='registration-container'>
        {registration}
        <button className='switch-reg-type'
          onClick={()=>{registrationType? setRegistrationType(false):setRegistrationType(true)}}>{text}
        </button>
      </div>
        
      
    </div>
  )
}

export default Register
