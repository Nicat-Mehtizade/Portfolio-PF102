import { useDispatch, useSelector } from "react-redux";
import { clearBasket, decrement, increment, removeFromBasket } from "../../../redux/features/BasketSlice";

const Basket = () => {
  const basket = useSelector((state) => state.basket.items);

  const dispatch = useDispatch();
 
  const handleIncrement=(p)=>{
    dispatch(increment(p))
  }
  const handleDecrement=(p)=>{
    dispatch(decrement(p))
  }

  const totalPrice = basket.reduce((acc, item) => 
    acc + ((item.price - (item.price * item.discount) / 100) * item.quantity), 0
  ).toFixed(2);

const handleClearBasket=()=>{
  dispatch(clearBasket())
}

const handleBasketDelete=(p)=>{
  dispatch(removeFromBasket(p))
}
  console.log(basket);
  return (
    <div>
      <div className="max-w-[1280px] mx-auto">
        <div>
          <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold py-5 mb-5 ">Basket</h1>
          <button onClick={()=>{handleClearBasket()}} className="bg-red-500 text-white font-medium transition duration-300 cursor-pointer px-6 py-2 text-lg rounded-3xl hover:bg-red-600">Clear</button>
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-gray-500 font-normal p-3 text-left">Product</th>
                <th className="text-gray-500 font-normal p-3 text-left">Price</th>
                <th className="text-gray-500 font-normal p-3 text-left">Quantity</th>
                <th className="text-gray-500 font-normal p-3 text-left">Total</th>
                <th className="text-gray-500 font-normal p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {basket && basket.length > 0 ? (
                basket.map((item) => (
                  <tr className="border-b border-gray-300" key={item.id}>
                    <td className="p-3 text-gray-500 text-lg font-medium flex items-center gap-3">
                      <img className="h-[150px]" src={item.image} alt={item.name} />
                      {item.name}
                    </td>
                    <td className="p-3 text-gray-500">${(item.price - (item.price * item.discount) / 100).toFixed(2)}</td>
                    <td className="p-3 text-gray-500">
                    <div className="flex justify-center items-center gap-3 border border-gray-400 rounded-md px-2 py-1 w-fit">
                        <button onClick={()=>{handleDecrement(item)}} className="px-2 text-lg font-bold border-r border-gray-400 cursor-pointer">-</button>
                        <span className="text-lg font-medium">{item.quantity}</span>
                        <button onClick={()=>{handleIncrement(item)}} className="px-2 text-lg font-bold border-l border-gray-400 cursor-pointer">+</button>
                      </div>
                    </td>
                    <td className="p-3 text-gray-500">${((item.price - (item.price * item.discount) / 100) * item.quantity).toFixed(2)}</td>
                    <td>
                      <button onClick={()=>{handleBasketDelete(item)}} className="bg-red-500 text-white font-medium transition duration-300 cursor-pointer px-4 py-1 text-sm rounded-3xl hover:bg-red-600">Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-3 text-center text-gray-500">
                    There is no product you have added to your cart.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="border-b border-gray-300 py-4 text-xl text-gray-500 flex justify-end gap-8 px-3"><span>Subtotal:</span> {totalPrice}$</div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
