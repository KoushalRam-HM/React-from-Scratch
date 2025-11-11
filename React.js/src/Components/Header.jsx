import { useSelector } from 'react-redux'
import { RESTAURANT_LOGO } from '../Constants/Utils'
import { Link } from 'react-router'

const Header = () => {
  const store = useSelector(store => store.cart.items)
  return (
    <div className='flex justify-between m-3 p-2 bg-amber-200 cursor-pointer'>
        <div>
            <img  className='h-12' src={RESTAURANT_LOGO} alt='Restauran logo'/>
        </div>
        <div>
            <ul className='flex gap-3 mt-3 cursor-pointer'>
                <li ><Link to={"/"}>Home</Link></li>
                <li ><Link to={"/contact"}>Contact</Link></li>
                <li ><Link to={"/about"}>About</Link></li>
                <li ><Link to={"/cart"}>Cart🛒-({store.length}items)</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header