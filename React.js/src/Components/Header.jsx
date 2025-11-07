import React from 'react'
import { RESTAURANT_LOGO } from '../Constants/Utils'

const Header = () => {
  return (
    <div className='flex justify-between m-3 p-2 bg-amber-200 cursor-pointer'>
        <div>
            <img  className='h-12' src={RESTAURANT_LOGO} alt='Restauran logo'/>
        </div>
        <div>
            <ul className='flex gap-3 mt-3 cursor-pointer'>
                <li >Home</li>
                <li >Contact</li>
                <li >About</li>
                <li >Cart🛒</li>
            </ul>
        </div>
    </div>
  )
}

export default Header