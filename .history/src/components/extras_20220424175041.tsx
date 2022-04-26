import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cartProp, dataState, msgProp, numberProp, objArr, objectType } from "../type";
import { countState } from "../features/counterSlice";
import { storeData } from "../features/dataSlice";
import "./style/cart.scss";
import { useDispatch, useSelector } from "react-redux";
import back from "./images/right-arrow.png";
import home from "./images/home.png";
import cartIcon from "./images/shopping-cart.png";
import cartIcon1 from "./images/shopping-cart(1).png";
import { calculateTotal, add, subtract, cart } from "../features/cartSlice";

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
  const cartData = useSelector(cart);
  return (
    <div
      onClick={() => {
        navigate("cart", { replace: false });
      }}
      className="cartImg"
    >
      <div>
        <span>{cartData.items.length}</span>
      </div>
      <img src={cartIcon} />
    </div>
  );
};
export const Counter: React.FC<numberProp> = ({ n, amnt }) => {
  const dispatch = useDispatch();
  const count: number = useSelector(countState);
  const data: dataState = useSelector(storeData);
  const cartState = useSelector(cart);
  return (
    <div className="counter">
      <button
        className="minus"
        onClick={() => {
          dispatch(subtract({ n, amnt }));
          dispatch(calculateTotal());
        }}
      >
        -
      </button>
      <span>{cartState.items[n].count ? cartState.items[n].count : null}</span>
      <button
        onClick={() => {
          dispatch(add({ n, amnt }));
          dispatch(calculateTotal());
        }}
      >
        +
      </button>
    </div>
  );
}; //{cartState.items.items[n].count ? cartState.items.items[n].count  : null}
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
export const Message: React.FC<msgProp> = ({id}) => {
  const cartData:objArr = useSelector(cart);
  let text = useRef(<>onload</>);
  useEffect(() => {
    if ((id === 1)) {
      text.current = <div className="grey">Item already in cart</div>;
    }
    if ((id === 2)) {
      text.current = <div className="green">Item added to cart</div>;
    }
    console.log(cartData.message);
  }, [id]);



  return <div className="message none">{text.current}</div>;
};
export const setDisplay = () => {
  const classes = document.querySelector(".message")?.classList;
  classes?.remove("none");
  classes?.add("block");
  setTimeout(() => {
    classes?.remove("block");
    classes?.add("none");
  }, 1500);
};
