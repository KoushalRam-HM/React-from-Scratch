import { useDispatch } from 'react-redux';
import { CLOUDINARY_IMG } from '../Constants/Utils';
import { addItems } from '../redux.Js/cartSlice';

const AccordionBody = ({body}) => {
  const dispatch = useDispatch()
   
  const handleAdd = (bod) => {
    dispatch(addItems(bod))
  }

  return (
    <div>
        {body.map(bod=>  <div key={bod.card.info.id} className='flex justify-between w-1/2 shadow-lg m-1 p-2 mx-auto bg-gray-100'>
            <div>  
            <div>
             <span>{bod.card.info.name} - ₹{bod.card.info.defaultPrice/100 || bod.card.info.price/100}</span> 
            </div>
            <span>{bod.card.info.description}</span> 
            </div>
            <div>
                <span className='absolute bg-amber-100 cursor-pointer p-2' onClick={()=>handleAdd(bod)}>Add +</span>
                <img className='w-36 h-32' src={CLOUDINARY_IMG + bod.card.info.imageId } alt="Food Images" />
            </div>
        </div>)}
    </div>
  )
}

export default AccordionBody