import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router'

const Search = ({ products, setProducts }) => {

    const nav = useNavigate()
    const [search, setSearch] = useState("")

    const searchResult = async (e) => {
        e.preventDefault()

        nav('/shop')
        let req = { query: search }
        try {
            let res = await axios.post('http://localhost:3001/api/products/search', req)
            res.data.length > 0 ? setProducts(res.data) : setProducts(products)
        } catch (error) { throw error }

    }
    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    return (
        <div>
            <form onChange={(e) => {
                handleSearch(e)
            }} onSubmit={(e) => { searchResult(e) }}>
                <input className="search-bar" type="text"
                    placeholder="Search products" />
            </form>
        </div>
    )
}

export default Search