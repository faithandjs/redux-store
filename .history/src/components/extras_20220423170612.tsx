import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { cartProp, dataState, numberProp } from "../type";
import { countState } from "../features/counterSlice";
import { storeData } from "../features/dataSlice";
import "./style/cart.scss";
import { useDispatch, useSelector } from "react-redux";
import back from "./images/right-arrow.png";
import home from "./images/home.png";
import cartIcon from "./images/shopping-cart.png";
import cartIcon1 from "./images/shopping-cart(1).png";
import { calculateTotal, add, subtract } from "../features/cartSlice";

export const HomeIcon = () => {
  return (
    <div className="homeIcon">
      <Link to="/">
        <img alt="home icon" src={home} />
      </Link>
    </div>
  );
};
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
export const Counter: React.FC<numberProp> = ({ n, amnt }) => {
  const dispatch = useDispatch();
  const count: number = useSelector(countState);
  const data: dataState = useSelector(storeData);
  return (
    <div className="counter">
      <button
        className="minus"
        onClick={() => {
          dispatch(subtract({ n, amnt }));
          dispatch(calculateTotal('-'));
        }}
      >
        -
      </button>
      <span>{data.ca.items[n].count ? data.cartItems.items[n].count : null}</span>
      <button
        onClick={() => {
          dispatch(add({ n, amnt }));
          dispatch(calculateTotal('+'));
        }}
      >
        +
      </button>
    </div>
  );
};
export const Back = () => {
  const navigate = useNavigate();
  return (
    <div
      className="backBox"
      onClick={() => {
        navigate(-1);
      }}
    >
      <img className="back" src={back} />
    </div>
  );
};
export const bgRotation = (color: string) => {
  let body = document.querySelector(".app")?.classList;
  if (!body?.contains(color)) {
    //body?.classList.replace(body?.classList, 'app' + color)
    body?.forEach((value) => {
      if (value !== "app") {
        body?.remove(value);
      }
    });
    body?.add(color);
  }
};
