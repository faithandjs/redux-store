import React, { useEffect, useState } from "react";
import { deleteItems, clearCart, cart } from "../features/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { objectType } from "../type";
import "./style/cart.scss";
import { Back } from "./extras";
import { bgRotation, Counter } from "./extras";

function Cart() {
  const [selected, setSelected] = useState<objectType[]>([]);
  const dispatch = useDispatch();
  const cartData: {
    items: objectType[];
    msg: string;
  } = useSelector(cart);
  useEffect(() => {
    bgRotation("cart-bg");
  });
  return (
    <div>
      <header>
       <div> cart</div>
        <Back />
      </header>
      {cartData.items.length >= 1 &&
        cartData.items.map((item, index) => {
          return (
            <div
              className="cart-box"
              key={item.id}
              onClick={() => setSelected([...selected, item])}
            >
              <div className="image-box">
                <img src={item.image} />
              </div>
              <div className="content">
                <div className="upper">
                  <div>{item.title}</div>
                  <div onClick={() => dispatch(deleteItems([item]))}>x</div>
                </div>
                <div className="lower">
                  <Counter n={index} amnt={item.count} />
                  <div>{item.total}</div>
                </div>
              </div>
            </div>
          );
        })}
      {/*<span onClick={() => dispatch(clearCart())}>clear cart?</span>
      <span
        onClick={() => {
          dispatch(deleteItems(selected));  ////
          setSelected([]);
        }}
      >
        delete selected
      </span>*/}
    </div>
  );
}

export default Cart;
