import React from 'react'
import { socialData } from '../../../data/social-data'
import './contact.css'

function Contacts() {
    const data=socialData;
    return (
        <div className='contacts'>
            {data.map(el=>{
                return(
                    <a href={el.link}>
                        <div className='icon-div'>
                        <img src={el.icon} className='icon' />
                    </div>
                    </a>
                    
                )
            })}
        </div>
    )
}

export default Contacts
