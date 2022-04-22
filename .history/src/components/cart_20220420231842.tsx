import React from "react";
import { newItem, deleteItems, clearCart, cart } from "../features/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { objectType, cartProp, dataState, numberProp } from "../type";
import cartIcon from "./images/shopping-bag.png";
import { decrement, increment, countState } from "../features/counterSlice";
import { add, storeData, subtract } from "../features/data";

export const CartImg: React.FC<cartProp> = ({ path }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("cart", { replace: false });
      }}
      className="cartImg"
    >
      <img src={cartIcon} />
    </div>
  );
};
export const Counter: React.FC<numberProp>  = ({n, amnt}) => {
const dispatch = useDispatch();
  const count:number = useSelector(countState);
  const data: dataState = useSelector(storeData);
  return (
    <div>
      <button onClick={() => dispatch(add({n, amnt}))}>plus </button>
      <span>{data.data.items[n].count? data.data.items[n].count: null}</span>
      <button onClick={() => dispatch(subtract({n, amnt}))}> minus</button>
    </div>
  );
};
function Cart() {
  const cartData: {
    items: objectType[];
    msg: string;
  } = useSelector(cart);
  console.log(cartData);
  return (
    <div>
      cart
      {cartData.items.length >= 1 &&
        cartData.items.map((item, index) => {
          return <div key={item.id}>
            {item.title} <br/>
            
      <Counter n={index} amnt={item.count}/>
            </div>;
        })}
    </div>
  );
}

export default Cart;
