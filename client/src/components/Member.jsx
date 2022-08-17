import {Link} from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import AddNewProduct from '../pages/AddProduct'
import TestElement from '../pages/TestElement'


const Member=({user})=>{
    console.log(user)
    console.log(AddNewProduct)


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
                    <div className='orders'>orders</div>
                </div>
                <div className='profile-featured'>
                    <div className='featured-products'><TestElement /></div>
                </div>
            </div>
        </div>
    )
}

export default Member