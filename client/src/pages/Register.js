import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import RegisterAsRoaster from '../components/RegisterAsRoaster'
import RegisterAsMember from '../components/RegisterAsMember'


const Register = () => {






  return (
    <div>
      <div>
        <h2> Register Page </h2>
      </div>
      <div>
        <RegisterAsMember />
        <button></button>
      </div>



      <div>
        <RegisterAsRoaster />
      </div>


    </div>

  )

}

export default Register
