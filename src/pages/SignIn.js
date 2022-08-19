import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = ({ toggleAuthenticated, setUser, user }) => {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formValues)
    const payload = await SignInUser(formValues)

    setFormValues({ email: '', password: '' })
    await setUser(payload.user)

    toggleAuthenticated(true)
    navigate('/profile')
  }

  return (
    <div className="sign-in-page">
      <div className="signin-nav">
        <Link className="profile-link" id="sign-in-page-link" to="/">
          Home
        </Link>
      </div>
      <div className="signin-col">
        <div className="card-overlay centered">
          <form className="sigin-col-input" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                id="sign-in-input"
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
                id="sign-in-input"
                onChange={handleChange}
                type="password"
                name="password"
                value={formValues.password}
                required
              />
            </div>
            <button
              className="signin-button"
              disabled={!formValues.email || !formValues.password}
            >
              Sign In
            </button>
            <div></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
