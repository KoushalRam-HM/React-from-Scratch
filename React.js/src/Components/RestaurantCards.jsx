import React from 'react'
import { RESTAURANT_LOGO } from '../Constants/Utils'

const RestaurantCards = () => {
  return (
    <div>
      <div className='m-3 p-2 bg-gray-200 w-48 hover:bg-gray-400 cursor-pointer'>
        <img src={RESTAURANT_LOGO} alt="restaurant cards" />
        <h1>Meghana Foods</h1>
        <h2>Banglore</h2>
        <h3>Cusines</h3>
      </div>
    </div>
  )
}

export default RestaurantCards