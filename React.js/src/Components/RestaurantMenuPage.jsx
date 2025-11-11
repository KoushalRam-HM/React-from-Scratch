import { useParams } from "react-router";
import Shimmer from "./Shimmer"
import useRestaurantMenu from "../Hooks/useRestaurantMenu.jsx";
import AccordionTitle from "./AccordionTitle.jsx";
import { useState } from "react";

const RestaurantMenuPage = () => {
  const[showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();

  const menuData = useRestaurantMenu(resId);

  if (!menuData) return <Shimmer />;

  const infoCard = menuData?.data?.cards?.find((c) => c?.card?.card?.info)?.card?.card?.info;
  const { name, cuisines, locality, avgRating } = infoCard || {};
  const categories = menuData?.data?.cards?.[4]
  ?.groupedCard?.cardGroupMap?.REGULAR?.cards
  ?.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


  return (
    <div>
      <div className="text-center m-2 p-2">
       <h1 className="text-xl font-bold">{name}</h1>
       <h1>{cuisines}</h1>
       <h1>{locality}</h1>
       <h1>{avgRating}</h1>        
      </div>

      <div>
        {categories?.map((cat, index) => (
        <div key={index}>
          <AccordionTitle title={cat}
            showItems={index === showIndex ? true : false}
            setShowIndex={()=> setShowIndex(prev => prev === index ? !index : index)}
           />
      </div>
      ))}

      </div>

    </div>
  )
}

export default RestaurantMenuPage;