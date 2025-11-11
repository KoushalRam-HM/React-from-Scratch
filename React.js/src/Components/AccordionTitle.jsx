import AccordionBody from './AccordionBody'

const AccordionTitle = ({title, showItems, setShowIndex}) => {

    const handleHeader = () =>{
        setShowIndex();
    }

  return (
    <div>
        <div className='text-center w-1/2 bg-blue-200 mx-auto flex justify-between m-2 p-2 cursor-pointer shadow-lg' onClick={handleHeader}>
        <div>
            <span className='text-xl font-bold'>{title?.card?.card?.title}</span> 
            <span className='text-xl font-bold'>-({title.card.card.itemCards.length})</span>
        </div>
            <span>⬇️</span>            
        </div>

        <div>
            {showItems && <AccordionBody body={title.card.card.itemCards}/>}
        </div>

    </div>
  )
}

export default AccordionTitle