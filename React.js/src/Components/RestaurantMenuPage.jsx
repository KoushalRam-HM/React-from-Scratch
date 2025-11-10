import { useParams } from "react-router";
import Shimmer from "./Shimmer"
import useRestaurantMenu from "../Hooks/useRestaurantMenu.jsx";

const RestaurantMenuPage = () => {

  const { resId } = useParams();

  const menuData = useRestaurantMenu(resId);

  if (!menuData) return <Shimmer />;

  const infoCard = menuData?.data?.cards?.find((c) => c?.card?.card?.info)?.card?.card?.info;
  const { name, cuisines, locality, avgRating } = infoCard || {};

  return (
    <div>
      <div>
       <h1>{name}</h1>
       <h1>{cuisines}</h1>
       <h1>{locality}</h1>
       <h1>{avgRating}</h1>        
      </div>

      <div>
        
      </div>

    </div>
  )
}

export default RestaurantMenuPage;