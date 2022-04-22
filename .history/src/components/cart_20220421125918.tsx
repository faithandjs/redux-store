import React, { useState } from "react";
import { deleteItems, clearCart, cart } from "../features/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { objectType } from "../type";
import "./style/cart.scss";
import { Back } from "./details";
import { Counter } from "./extras";

function Cart() {
  const [selected, setSelected] = useState<objectType[]>([]);
  const dispatch = useDispatch();
  const cartData: {
    items: objectType[];
    msg: string;
  } = useSelector(cart);
  return (
    <div>
      cart
      <Back />
      {cartData.items.length >= 1 &&
        cartData.items.map((item, index) => {
          return (
            <div key={item.id} onClick={() => setSelected([...selected, item])}>
              {item.title} <br />
              <Counter n={index} amnt={item.count} />
              <div onClick={() => dispatch(deleteItems([item]))}>delete</div>
            </div>
          );
        })}
      <span onClick={() => dispatch(clearCart())}>clear cart?</span>
      <span
        onClick={() => {
          dispatch(deleteItems(selected));
          setSelected([]);
        }}
      >
        delete selected
      </span>
    </div>
  );
}

export default Cart;
