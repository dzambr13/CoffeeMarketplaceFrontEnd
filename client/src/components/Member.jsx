
const Member=({Member})=>{

import React from 'react';

const Member=()=>{


    return (
        <div className="member-info">

            <h3>{Member.userName}</h3>
            <p>{Member.firstName} {Member.lastName}</p>
            <p>{Member.location}</p>

        </div>
    )
}

export default Member