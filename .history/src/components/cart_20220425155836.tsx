import React, { useEffect, useRef, useState } from "react";
import {
  deleteItems,
  clearCart,
  cart,
  calculateTotal,
  subtract,
  add,
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
  const checkbox = useCheckboxState();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    bgRotation("cart-bg");
  //  checkout();
  });
  useEffect(() => {
    checkout();
  }, [cartData.cartItems.grandTotal, selected]);
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
  const checkout = () => {
    let n = 0;
    selected.map((x) => {
      cartData.cartItems.items.map((y) => {
        if (x.id === y.id) {
          n += y.total;
        }
      });
    });
    setTotal(n);
  };
  console.log(
    "SELECTED: ",
    selected,
    "GRAND TOTAL: ",
    cartData.cartItems.grandTotal
  );
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
                  onClick={() => {
                    handleSelection(item);
                   // checkout();
                  }}
                >
                  <Checkbox animation={"smooth"}>
                    <img src={item.image} />
                  </Checkbox>
                </div>
                <div className="content">
                  <div className="upper">
                    <div className="title">{item.title}</div>
                    <div
                      className="delete"
                      onClick={() => {
                        dispatch(deleteItems([item]));
                        dispatch(calculateTotal());
                    //    checkout();
                      }}
                    >
                      x
                    </div>
                  </div>
                  <div className="lower">
                    <div className="counter">
                      <button
                        className="minus"
                        onClick={() => {
                          dispatch(subtract(index));
                          dispatch(calculateTotal());
                        //  checkout();
                        }}
                      >
                        -
                      </button>
                      <span>
                        {cartData.cartItems.items[index].count
                          ? cartData.cartItems.items[index].count
                          : null}
                      </span>
                      <button
                        onClick={() => {
                          dispatch(add(index));
                          dispatch(calculateTotal());
                      //    checkout();
                        }}
                      >
                        +
                      </button>
                    </div>
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
        <button>checkout ${Math.round(total * 100) / 100}</button>
      </div>
    </div>
  );
}

export default Cart;
