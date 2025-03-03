import { useDispatch, useSelector } from "react-redux";
import { Watch } from "../../types";
import {
  clearBasket,
  decrement,
  increment,
  removeFromBasket,
} from "../../redux/features/BasketSlice";
import type { RootState } from "./../../redux/App/store"

const Basket = () => {
  const basket = useSelector((state: RootState) => state.basket.items);
  const dispatch = useDispatch();
  const totalPrice = basket
    .reduce((acc: number, item: Watch) => acc + item.price * (item.quantity ?? 1), 0)
    .toFixed(2);
  return (
    <div>
      <div className="max-w-[1280px] mx-auto">
        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold py-5 mb-5 ">Basket</h1>
            <button
              onClick={() => dispatch(clearBasket())}
              className="bg-red-500 text-white font-medium transition duration-300 cursor-pointer px-6 py-2 text-lg rounded-3xl hover:bg-red-600"
            >
              Clear
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-gray-500 font-normal p-2 text-left w-40">
                    Product
                  </th>
                  <th className="text-gray-500 font-normal p-2 text-left w-24">
                    Price
                  </th>
                  <th className="text-gray-500 font-normal p-2 text-left w-32">
                    Quantity
                  </th>
                  <th className="text-gray-500 font-normal p-2 text-left w-28">
                    Total
                  </th>
                  <th className="text-gray-500 font-normal p-2 text-left w-24">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {basket && basket.length > 0 ? (
                  basket.map((item: Watch) => (
                    <tr className="border-b border-gray-300" key={item.id}>
                      <td className="p-2 text-gray-500 text-xs flex items-center gap-2 w-40">
                        <img
                          className="h-[60px] md:h-[80px] rounded-lg"
                          src={item.image}
                          alt={item.model}
                        />
                        <span className="truncate w-24">{item.model}</span>
                      </td>
                      <td className="p-2 text-gray-500 text-xs w-24">
                        ${item.price}
                      </td>
                      <td className="p-2 text-gray-500 text-xs w-32">
                        <div className="flex items-center gap-2 border border-gray-400 rounded-md px-2 py-1 w-fit">
                          <button
                            onClick={() => dispatch(decrement(item))}
                            className="px-2 text-xs font-bold border-r border-gray-400 cursor-pointer"
                          >
                            -
                          </button>
                          <span className="text-xs font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => dispatch(increment(item))}
                            className="px-2 text-xs font-bold border-l border-gray-400 cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="p-2 text-gray-500 text-xs w-28">
                        ${(item.price * (item.quantity ?? 1)).toFixed(2)}
                      </td>
                      <td className="p-2 w-24">
                        <button
                          onClick={() => dispatch(removeFromBasket(item))}
                          className="bg-red-500 text-white font-medium transition duration-300 cursor-pointer px-3 py-1 text-xs rounded-3xl hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="p-3 text-center text-gray-500">
                      There is no product you have added to your cart.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="border-b border-gray-300 py-4 text-xl text-gray-500 flex justify-end gap-8 px-3">
            <span>Subtotal:</span> {totalPrice}$
          </div>
          <div className="border-b border-gray-300 py-2 text-xl flex justify-end gap-8 px-3">
            <button className="bg-blue-500 text-white py-2 px-5 rounded-lg cursor-pointer transition duration-300 hover:bg-blue-600">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
