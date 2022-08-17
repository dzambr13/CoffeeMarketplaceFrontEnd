import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const SignIn = ({ toggleAuthenticated, setUser, user }) => {

  let msg="this"

  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const payload = await SignInUser(formValues)
      console.log("payload=",payload)
      setFormValues({email: '',password: ''})
      await setUser(payload)
      toggleAuthenticated(true)
      navigate('/profile')
    }catch{console.log('user does exist')}
  }

  return (
    <div className='sign-in-page'>
      <div className='signin-nav'></div>
      <div className="signin-col">
        <div className="card-overlay centered">
          <form className="col" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="example@example.com"
                value={formValues.email}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                value={formValues.password}
                required
              />
            </div>
            <button className='signin-button' disabled={!formValues.email || !formValues.password}>
              Sign In
            </button>
            <div>
              {msg}
            </div>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
