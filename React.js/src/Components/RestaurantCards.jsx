import { CLOUDINARY_IMG } from "../Constants/Utils";

const RestaurantCards = ({resData}) => {
  const{name, cuisines, cloudinaryImageId, costForTwo,avgRating} = resData.info;

  return (
    <div>
      <div className='m-3 p-2 bg-gray-200 w-48 hover:bg-gray-300 cursor-pointer'>
        <img className="w-48 h-36" src={CLOUDINARY_IMG + cloudinaryImageId} alt="Restaurant Logo" />
        <h1 className="text-xl font-bold">{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <h3>{costForTwo}</h3>
        <h3>{avgRating}⭐Ratings</h3>
      </div>
    </div>
  )
}

export default RestaurantCards