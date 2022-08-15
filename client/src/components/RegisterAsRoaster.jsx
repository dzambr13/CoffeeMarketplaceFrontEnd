import {useState} from 'react'
import {RegisterUser} from '../services/Auth'
import {useNavigate} from 'react-router-dom'


const RegisterAsRoaster=()=>{

    let navigate=useNavigate()

    const [formValues, setFormValues] = useState({
      userName:'',
      businessName: '',
      email: '',
      firstName: '',
      lastName: '',
      logoImageUrl: '',
      password: '',
      confirmPassword: ''
    })
  
    const handleChange = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      await RegisterUser({
        userName:formValues.userName,
        businessName:formValues.businessName,
        email:formValues.email,
        firstName:formValues.firstName,
        lastName:formValues.lastName,
        logoImageUrl:formValues.logoImageUrl,
        password:formValues.password
      })
      setFormValues({
        userName:'',
        businessName:'',
        email:'',
        firstName:'',
        lastName:'',
        logoImageUrl:'',
        password:'',
        confirmPassword:''
      })
      navigate('/signin')
    }   




    return (
        <div>
            <p> Register_As_Roaster </p>
        <div className="signin col">
        <div className="card-overlay centered">
            <form className="col" onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="name">~~user name~~</label>
                <input
                onChange={handleChange}
                name="userName"
                type="text"
                placeholder="John Smith"
                value={formValues.userName}
                required
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="businessName">~~business name~~</label>
                <input
                onChange={handleChange}
                name="businessName"
                type="text"
                placeholder="bussinessName"
                value={formValues.businessName}
                required
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="firstName">~~first name~~</label>
                <input
                onChange={handleChange}
                name="firstName"
                type="text"
                placeholder="firstName"
                value={formValues.firstName}
                required
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="lastName">~~last name~~</label>
                <input
                onChange={handleChange}
                name="lastName"
                type="text"
                placeholder="lastName"
                value={formValues.lastName}
                required
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="logoImageUrl">~~icon~~</label>
                <input
                onChange={handleChange}
                name="logoImageUrl"
                type="text"
                placeholder="logoImageUrl"
                value={formValues.logoImageUrl}
                required
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="email">~~email~~</label>
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
            <button
                disabled={
                !formValues.email ||
                (!formValues.password &&
                    formValues.confirmPassword === formValues.password)
                }
            >
                register new user
            </button>
            </form>
        </div>
    </div>
    </div>
    )
}

export default RegisterAsRoaster