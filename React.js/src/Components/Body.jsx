import RestaurantCards from "./RestaurantCards"

const Body = () => {
  return (
    <div>
        <div className='flex justify-between m-3 p-2'>
            <div className='flex'>
                <input className='border-black bg-gray-100 rounded-lg p-2' type='text' placeholder='Search the Restaurant' />
                <button className='m-2 p-1 bg-amber-600 cursor-pointer rounded-lg'>Search</button>
            </div>
            <div>
                <button className='m-2 p-1 bg-gray-300 rounded-lg cursor-pointer'>Top Rated Restaurants</button>
            </div>
        </div>
        
        
        <div>
            <RestaurantCards />
        </div>
    </div>
  )
}

export default Body