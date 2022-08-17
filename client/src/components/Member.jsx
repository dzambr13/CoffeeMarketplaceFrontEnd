import {Link} from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'


const Member=({user})=>{
    
    let {id}=user
    let [member,setMember]=useState()
    const findUser=async ()=>{
        let res=await axios.get(`http://localhost:3001/api/roasters/${id}`)
        setMember(res.data)
    }
    useEffect(()=>{findUser()},[])

 
    return (
        <div className="profile-page">
            <div className='profile-links-container'>
                <Link className='profile-link' to='/shop'>browse</Link>
                <Link className='profile-link' to='/'>home</Link>
            </div>
            <div className='profile'>
                <p className='welcome-user'>Welcome, {member.userName}  </p>
                <div className='profile-info'>
                    <div className='info'>profile info
                        <p>{member.userName}</p>
                        <p>{member.email}</p>
                        <p>{member.firstName}</p>
                        <p>{member.lastName}</p>
                    </div>
                    <div className='orders'>orders</div>
                </div>
                <div className='profile-featured'>
                    <div className='featured-products'>featured products</div>
                </div>
            </div>
        </div>
    )
}

export default Member