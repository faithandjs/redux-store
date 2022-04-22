import React from "react";
import { newItem, deleteItems, clearCart, cart } from "../features/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { objectType, cartProp } from "../type";
import cartIcon from "./images/shopping-bag.png";

export const CartImg:React.FC<cartProp> = ({path}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("cart", { replace: false });
      }}
      className='cartImg'
    >
      <img src={cartIcon} />
    </div>
  );
};
function Cart() {
  const dispatch = useDispatch();
  const cartData: {
    items: objectType[];
    msg: string;
  } = useSelector(cart);
  console.log(cartData);
  return (
    <div>
      cart
      {cartData.items.length >= 1 &&
        cartData.items.map((item) => {
          return <div key={item.id}>{item.title}</div>;
        })}
    </div>
  );
}

export default Cart;
