import React from 'react'

function CenterMenu() {
    const liClass = "mr-[5rem] hover:cursor-pointer";
    const liStyle = {fontSize:'20px', color:"#42855B", fontWeight: "bolder"};
  return (
    <div className="menu flex">
        <ul className='flex w-[100%] justify-between'>
            <li className={liClass} style={liStyle}>Home</li>
            <li className={liClass} style={liStyle}>About</li>
            <li className={liClass} style={liStyle}>Goal</li>
            
        </ul>
    </div>
    )
}

export default CenterMenu