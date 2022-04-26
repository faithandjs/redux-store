import React, { useEffect, useState } from "react";
import {
  deleteItems,
  clearCart,
  cart,
  calculateTotal,
} from "../features/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { objectType } from "../type";
import "./style/cart.scss";
import { Back, HomeIcon } from "./extras";
import { bgRotation, Counter } from "./extras";

function Cart() {
  const [selected, setSelected] = useState<objectType[]>([]);
  const dispatch = useDispatch();
  const cartData: {
    items: objectType[];
    msg: number;
    grandTotal: number;
  } = useSelector(cart);
  console.log(cartData)
  useEffect(() => {
    bgRotation("cart-bg");
  });

  return (
    <div className="cart">
      <header>
        <Back />
        <div className="text"> cart</div>
        <HomeIcon />
      </header>
      <div className="items">
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
                    <div className="title">{item.title}</div>
                    <div
                      className="delete"
                      onClick={() => {
                        dispatch(deleteItems([item]));
                        dispatch(calculateTotal());
                      }}
                    >
                      x
                    </div>
                  </div>
                  <div className="lower">
                    <Counter n={index} amnt={item.count} />
                    <div className="total">
                      ${Math.round(item.total * 100) / 100}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="footer">
        <button>checkout ${Math.round(cartData.grandTotal * 100) / 100}</button>
      </div>
    </div>
  );
}

export default Cart;
