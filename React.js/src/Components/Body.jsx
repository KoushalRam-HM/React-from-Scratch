import { useEffect, useState } from "react";
import RestaurantCards from "./RestaurantCards"
import { SWIGGY_API } from "../Constants/Utils";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

        useEffect(()=>{
            fetchData();
        },[])

        const fetchData = async () => {
            const data = await fetch(SWIGGY_API);
            const json = await data.json();
            const res =json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ;

            setListOfRestaurants(res);
        };

        const handleTopRatedRestaurants = () => {
            const filteredList = listOfRestaurants.filter(res => res?.info?.avgRating > 4);
            setListOfRestaurants(filteredList);
        }

        if(listOfRestaurants.length === 0){
            return <h1>Loading..</h1>                 //Use Shimmer over here. And this is known as conditional rendering
        }

  return (
    <div>
        <div className='flex justify-between m-3 p-2'>
            <div className='flex'>
                <input className='border-black bg-gray-100 rounded-lg p-2' type='text' placeholder='Search the Restaurant' />
                <button className='m-2 p-1 bg-amber-600 cursor-pointer rounded-lg'>Search</button>
            </div>
            <div>
                <button className='m-2 p-1 bg-gray-300 rounded-lg cursor-pointer' onClick={handleTopRatedRestaurants}>Top Rated Restaurants</button>
            </div>
        </div>
        
        
        <div className="flex flex-wrap">
            {listOfRestaurants.map((restaurant) => <RestaurantCards key={restaurant?.info?.id} resData={restaurant} />)}
        </div>
    </div>
  )
}

export default Body