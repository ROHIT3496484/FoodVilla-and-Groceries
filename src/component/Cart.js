import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Foodlist from "./Foodlist";
import Payment from "./Payment";
import { clearcart } from "../utils/cartslice";

const Cart = () => {
  const Cartitems = useSelector((store) => store.cart.items);
  const [showPayment, setShowPayment] = useState(false);

  const dispatch = useDispatch();
  const handleclearcart = () => {
    dispatch(clearcart());
  };

  const totalPaise = Cartitems.reduce((sum, item) => {
    const price = item?.price ?? item?.defaultPrice ?? 0;
    return sum + price;
  }, 0);
  const total = (totalPaise / 100).toFixed(2);

  return (
    <div className="max-w-3xl mx-auto px-2 py-4">
      <h1 className="text-center text-2xl font-bold mb-4">Cart</h1>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
        <button
          onClick={handleclearcart}
          className="p-2 rounded-2xl bg-black text-white w-full sm:w-auto"
        >
          Clear Cart
        </button>
        <span className="text-lg font-semibold">
          {Cartitems.length} item{Cartitems.length !== 1 ? "s" : ""}
        </span>
      </div>
      <div className="flex flex-col gap-4">
        {Cartitems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          Cartitems.map((item, index) => <Foodlist key={index} item={item} />)
        )}
      </div>

      {Cartitems.length > 0 && (
        <div className="mt-6 border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-xl font-bold text-orange-600">₹{total}</span>
          </div>
          <button
            onClick={() => setShowPayment(true)}
            className="w-full bg-orange-600 hover:bg-orange-500 text-white font-semibold py-3 rounded-lg shadow"
          >
            Proceed to Payment
          </button>
        </div>
      )}

      {showPayment && (
        <Payment
          amount={total}
          onClose={() => setShowPayment(false)}
          onSuccess={() => {
            dispatch(clearcart());
            setShowPayment(false);
          }}
        />
      )}
    </div>
  );
};

export default Cart;
