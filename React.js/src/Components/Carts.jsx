import { useDispatch, useSelector } from 'react-redux';
import { CLOUDINARY_IMG } from '../Constants/Utils';
import { clearCart } from '../redux.Js/cartSlice';

const Carts = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearButton = () => {
    dispatch(clearCart())
  }


  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        <button className="text-red-600 font-semibold cursor-pointer hover:underline" onClick={handleClearButton}>
          Clear All
        </button>
      </div>

      {/* Cart Items */}
      {items.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-8">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => {
            const info = item.card.info;
            const price = info.defaultPrice / 100 || info.price / 100;

            return (
              <div
                key={info.id}
                className="flex justify-between items-start bg-gray-50 rounded-2xl shadow-md p-4 hover:shadow-lg transition-all"
              >
                {/* Item Details */}
                <div className="flex-1 pr-4">
                  <h2 className="text-lg font-semibold text-gray-800">{info.name}</h2>
                  <p className="text-gray-600 text-sm my-1 line-clamp-2">
                    {info.description || "Delicious and freshly prepared!"}
                  </p>
                  <p className="font-medium text-gray-800 mt-1">₹{price}</p>
                </div>

                {/* Image */}
                {info.imageId && (
                  <img
                    className="w-28 h-24 rounded-lg object-cover"
                    src={CLOUDINARY_IMG + info.imageId}
                    alt={info.name}
                  />
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Total Summary */}
      {items.length > 0 && (
        <div className="flex justify-between items-center mt-6 border-t pt-4 text-lg font-semibold">
          <span>Total Items: {items.length}</span>
          <span>
            ₹
            {items.reduce(
              (total, item) =>
                total + (item.card.info.defaultPrice / 100 || item.card.info.price / 100),
              0
            )}
          </span>
        </div>
      )}
    </div>
  );
};

export default Carts;
