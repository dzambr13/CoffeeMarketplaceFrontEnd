import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

const BASE_URL = '/api'

const CoffeeDetails = (props) => {

    const [coffee, setCoffee] = useState('')
    let { id } = useParams()
    console.log('testing use effect')

    useEffect (() => {
        const getCoffeeById = async () => {
            let data = await axios.get(`${BASE_URL}/coffee/${id}`)
            // not sure if line 15 should contain id instead of how we referred to it in the backend
            setCoffee(data.data)
        }
        getCoffeeById
    }, [])

    return boba ? (
        <div className="CoffeeDetailsCSS">
            <div className="CoffeeDetailHeader">

            </div>
        </div>
    ) : null;
}

export default CoffeeDetails