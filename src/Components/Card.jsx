import React from 'react'
import "./Card.css";

function Card({img,title}) {
  return (
    <div className='menu'>
        <div className='img_container'>
            <img src ={img} className='img_menu'/>
        </div>
      
        <div className='menutext'>{title}</div>
    </div>
  )
}

export default Card
