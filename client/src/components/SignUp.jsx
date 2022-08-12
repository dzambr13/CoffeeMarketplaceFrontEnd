import "./App.css";
import { useState, useEffect } from "react";
import axios from 'axios';

const SignUp = () => {
    const [signUp, setSignup] = useState([]);
    const initialState = {
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        location: ""
    }
}

const [formState, setFormState] = useState([]);

useEffect(()=> {
    const getSignup = async () => {
        try{
            let res = await axios.get("http://localhost:3001/"); //complete route based on condition member/roaster
            setSignup(res.data)
        } catch (error) {
            throw error;
        }
    };
    getSignup();
}, []);

const handleChange = event =>{
    setFormState({...formState, [event.target.id]: event.target.value});
}

const handleSubmit = async (event) => {
    event.preventDefault();

    let res = await axios.post("http://localhost:3001/", formState);
    console.log(res)
    setFormState(initialState)
}


return (
    //Conditionally render roaster or member singup
    <div></div>
)
export default SignUp;