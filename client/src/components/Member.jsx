import {Link} from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import AddNewProduct from '../pages/AddProduct'
import TestElement from '../pages/TestElement'


const Member=({user})=>{
    
    let [sellerProducts, setSellerProducts] = useState([]);
    
    useEffect(() => {
        const GetSellerProducts = async () => {
        let res = await axios("http://localhost:3001/api/products")
        let AllProducts = res.data
        let sp = []
        AllProducts.map((product)=>{
            product.roasterId === user.id? sp.push(product):console.log("Not user's product")
        })
            
        setSellerProducts(sp);
        };
        GetSellerProducts();
    }, []);
    console.log(sellerProducts);
    


    return (
        <div className="profile-page">
            <div className='profile-links-container'>
                <Link className='profile-link' to='/shop'>browse</Link>
                <Link className='profile-link' to='/'>home</Link>
            </div>
            <div className='profile'>
                <p className='welcome-user'>Welcome, {user.userName} </p>
                <div className='profile-info'>
                    <div className='info'>profile info
                        <p>{user.email}</p>
                        <p>{user.firstName}</p>
                        <p>{user.lastName}</p>
                        <p>{user.businessName}</p>
    
                    </div>
                    <div className='orders'>Products
                        {sellerProducts?.map((product)=>(
                            <div>
                                <p>{product.name}</p>
                                <p>{product.price}</p>
                                <p>{product.description}</p>
                            </div>
                        ))}
                </div>
                <div className='profile-featured'>
                    <div className='featured-products'><TestElement user={user}/></div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Member