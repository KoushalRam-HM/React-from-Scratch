import { useEffect, useState } from "react";
import { MENU_API } from "../Constants/Utils";

const useRestaurantMenu = (resId) => {
  const [menuData, setMenuData] = useState(null);
 
  const fetchMenu = async () => {
  const data = await fetch(MENU_API + resId);
  const json = await data.json();
  setMenuData(json);
};

  // Use useEffect to run fetchMenu once after the initial render
  useEffect(() => {
    fetchMenu();
  }, []);


  return menuData;
}

export default useRestaurantMenu;