import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import React from 'react';

const BASE_URL = '/api'

const CoffeeDetails = (props) => {

    const [coffee, setCoffee] = useState('')
    let { id } = useParams()
    // console.log('testing use effect')

    useEffect (() => {
        const getCoffeeById = async () => {
            let data = await axios.get(`${BASE_URL}/coffee/${id}`)
            // not sure if line 15 should contain id instead of how we referred to it in the backend
            setCoffee(data.data)
        }
        getCoffeeById()
    }, [])

    return (
        <div className="coffee-details">
            
            <img className="CoffeeImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG" alt="product image"/>
            <p> Coffee Details <br/></p>
            <p> Price<br/></p>
            <p> Contact roaster here<br/></p>

        </div>
    )

}

export default CoffeeDetails