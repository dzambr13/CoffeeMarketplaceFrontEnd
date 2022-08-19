import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const RegisterAsMember = () => {

    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({
        userName: '',
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await RegisterUser({
            userName: formValues.userName,
            email: formValues.email,
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            password: formValues.password
        })
        setFormValues({
            userName: '',
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: ''
        })
        navigate('/signin')
    }

    return (
        <div>

            <div className="card-overlay centered">
                <form className="col" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="name">Username</label>
                        <input
                            onChange={handleChange}
                            name="userName"
                            type="text"
                            value={formValues.userName}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            onChange={handleChange}
                            name="firstName"
                            type="text"
                            value={formValues.firstName}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastName">Last name</label>
                        <input
                            onChange={handleChange}
                            name="lastName"
                            type="text"

                            value={formValues.lastName}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={handleChange}
                            name="email"
                            type="email"

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
                    <div className="input-wrapper">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            onChange={handleChange}
                            type="password"
                            name="confirmPassword"
                            value={formValues.confirmPassword}
                            required
                        />
                    </div>
                    <button className='complete-reg'
                        disabled={
                            !formValues.email ||
                            (!formValues.password &&
                                formValues.confirmPassword === formValues.password)
                        }
                    >
                        Register New MEMBER
                    </button>
                </form>
            </div>
        </div>

    )
}

export default RegisterAsMember