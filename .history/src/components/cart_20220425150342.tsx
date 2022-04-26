import React, { useEffect, useRef, useState } from "react";
import {
  deleteItems,
  clearCart,
  cart,
  calculateTotal,
} from "../features/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { objArr, objectType } from "../type";
import "./style/cart.scss";
import { Back, HomeIcon } from "./extras";
import { bgRotation, Counter } from "./extras";
import { Checkbox, useCheckboxState } from "pretty-checkbox-react";

function Cart() {
  const [selected, setSelected] = useState<objectType[]>([]);
  const dispatch = useDispatch();
  const cartData: objArr = useSelector(cart);
  const radio = useRef(false);
  const checkbox = useCheckboxState();



  useEffect(() => {
    bgRotation("cart-bg");
  });
  useEffect(() => {
    if (selected.length > 0) {
      radio.current = true;
      console.log(selected.length);
    } else {
      radio.current = false;
      console.log(selected.length);
    }
    //  console.log(radio.current)
  }, [selected]);
  const handleSelection = (item: objectType) => {
    if (selected.some((select) => item.id === select.id)) {
      selected.map((selectItem: objectType, index) => {
        if (selectItem.id === item.id) {
          selected.splice(index, 1);
        }
      });
    } else {
      setSelected([...selected, item]);
    }
  };
  console.log("SELECTED: ", selected, "RADIO: ", radio.current);
  return (
    <div className="cart">
      <header>
        <Back />
        <div className="text"> cart</div>
        <HomeIcon />
      </header>
      <div className="items">
        {cartData.cartItems.items.length >= 1 &&
          cartData.cartItems.items.map((item, index) => {
            return (
              <div className="cart-box" key={item.id}>
                <div
                  className="image-box"
                  onClick={() => handleSelection(item)}
                >
                <Checkbox animation={"pulse"}></Checkbox>
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
        <button>
          checkout ${Math.round(cartData.cartItems.grandTotal * 100) / 100}
        </button>
      </div>
    </div>
  );
}

export default Cart;
