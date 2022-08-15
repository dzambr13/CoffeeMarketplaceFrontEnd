
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

    return (
        //Conditionally render roaster or member singup
        <div>Sign Up<br/>
        <form>
            <input type="radio" id="member-select" value="member"></input>
            <label for="member-select">Sign up as member</label><br/>
            <input type="radio" id="roaster-select" value="Sign up as roaster"></input>
            <label for="member-select">Sign up as roaster</label><br/>
            <input type="text" placeholder="Username"></input><br/>
            <input type="text" placeholder="email address"></input><br/>
            <input type="text" placeholder="Password"></input><br/>
            <input type="text" placeholder="Confirm Password"></input><br/>
            <input type="Submit" value="Sign up"></input><br/>
            
        </form>
            
        </div>
    )
}


/*
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

*/

export default SignUp;