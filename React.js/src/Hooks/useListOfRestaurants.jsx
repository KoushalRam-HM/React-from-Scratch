import { useEffect, useState } from "react";
import { SWIGGY_API } from "../Constants/Utils";


const useListOfRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  
          useEffect(()=>{
            fetchData();
        },[])

        const fetchData = async () => {
            const data = await fetch(SWIGGY_API);
            const json = await data.json();
            const res =json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            setListOfRestaurants(res);
            setFilteredRestaurants(res);
        };

    return {
            listOfRestaurants,
            filteredRestaurants
    }
}

export default useListOfRestaurants