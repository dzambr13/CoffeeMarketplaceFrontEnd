import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const Search = () => {

    const [search, setSearch] = useState("")

    const searchResult = async (e) => {
        e.preventDefault()
        console.log(search)
        let req = { query: search }
        let res = await axios.post('http://localhost:3001/api/products/search', req)
        console.log(res)
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
// add to pull
export default Search