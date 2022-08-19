import {Link, useNavigate} from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import AddNewProduct from '../pages/AddProduct'
import TestElement from '../pages/TestElement'
import Client from "../services/api";


const Member=({user, sellerProducts, setSellerProducts, GetSellerProducts, setProductToUpdate})=>{

    const nav=useNavigate()
    
    useEffect(() => {GetSellerProducts();},[]);

    const deleteProduct=async (pd)=>{
        let res=await Client.delete(`/api/products/delete/${pd}`)
        GetSellerProducts()
    }

    const navToUpdate=(pk)=>{
        setProductToUpdate(pk)
        nav('/update-product')
    }
    
    // random comment 5
    // random comment 5
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
                                <p>{product.id}</p>
                                <button onClick={(e)=>{deleteProduct(product.id)}}>Delete</button>
                                <button onClick={(e)=>{navToUpdate(product.id)}}>Update</button>
                            </div>
                        ))}
                </div>
                <div className='profile-featured'>
                    <div className='featured-products'><TestElement 
                        sellerProducts={sellerProducts}
                        setSellerProducts={setSellerProducts}
                        user={user}
                    />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Member