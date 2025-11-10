import { useState } from "react";
import RestaurantCards from "./RestaurantCards"
import { Link } from "react-router";
import useListOfRestaurants from "../Hooks/useListOfRestaurants";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const {listOfRestaurants, filteredRestaurants} = useListOfRestaurants();


        const handleTopRatedRestaurants = () => {
            const filteredList = listOfRestaurants.filter(res => res?.info?.avgRating > 4);
            setFilteredRestaurants(filteredList);
        }

        const handleSearchText = () => {
            const filteredText = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurants(filteredText);
        }

        if(listOfRestaurants.length === 0){
            return <h1>Loading..</h1>                 //Use Shimmer over here. And this is known as conditional rendering
        }

  return (
    <div>
        <div className='flex justify-between m-3 p-2'>
            <div className='flex'>
                <input className='border-black bg-gray-100 rounded-lg p-2' type='text' placeholder='Search the Restaurant' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button className='m-2 p-1 bg-amber-600 cursor-pointer rounded-lg' onClick={handleSearchText}>Search</button>
            </div>
            <div>
                <button className='m-2 p-1 bg-gray-300 rounded-lg cursor-pointer' onClick={handleTopRatedRestaurants}>Top Rated Restaurants</button>
            </div>
        </div>
        
        
        <div className="flex flex-wrap">
            {filteredRestaurants.map((restaurant) =><Link key={restaurant?.info?.id} to={"/restaurants/"+restaurant?.info?.id}> <RestaurantCards  resData={restaurant} /></Link>)}
        </div>
    </div>
  )
}

export default Body