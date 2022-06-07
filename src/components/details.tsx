import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD, SUBTRACT, storeData } from "../features/dataSlice";
import { dataState, objArr, objectType, msg, textProp } from "../type";
import { Link, useNavigate } from "react-router-dom";
import { calculateTotal, cart, newItem } from "../features/cartSlice";
import { Back, bgRotation, CartImg, Message, setDisplay } from "./extras";
import "./style/details.scss";
import { Rating } from "react-simple-star-rating";
import { cartItemTextState, setState } from "../features/cartItemSlice";
import { Counter } from "./extras";

function Details() {
  const dispatch = useDispatch();
  const data: dataState = useSelector(storeData);
  const cartData: objArr = useSelector(cart);
  const index = data.data.items.findIndex(
    (item) => item.id === data.expandedItem.item.id
  );
  console.log(index, data.expandedItem);
  const itemE = data.expandedItem.item;
  let path = "item" + itemE.id + "/cart";
  useEffect(() => {
    bgRotation("details-bg");
  });
  useEffect(() => {}, [index]);

  const check = (i: objectType) => {
    console.log("in check");
    if (cartData.cartItems.items.some((item) => item.id === i.id)) {
      dispatch(setState(msg.ALREADYIN));
    } else {
      dispatch(setState(msg.ADDED));
    }
  };
  return (
    <div className="details">
      <Message />
      <div className="icons">
        <Back />
        <CartImg path={path} />
      </div>
      <div className="item-box-box">
        {(data.expandedItem.status === 3 || data.expandedItem.status === 5) && (
          <div key={itemE.id} className="item-box">
            <div className="img-box">
              <img src={itemE.image} />
            </div>
            <div className="content">
              <div className="title">{itemE.title}</div>
              <div className="description">{itemE.description}</div>
              <div className="price-rating">
                <div className="price">${itemE.price}</div>
                <div className="rating">
                  <div className="rate">
                    <Rating
                      ratingValue={itemE.rating.rate * 20}
                      allowHalfIcon
                      readonly
                    />
                  </div>
                  <div className="count">{itemE.rating.count}</div>
                </div>
              </div>
              {/*
                <div className="counter"></div>
              <div className="to-cart"> </div> */}
              <div className="button-box-box">
                <div className="button-box">
                  <button
                    className="minus"
                    onClick={() => {
                      dispatch(SUBTRACT(index));
                      dispatch(calculateTotal());
                    }}
                  >
                    &lt;
                  </button>
                  <button
                    className="to-cart"
                    onClick={() => {
                      setTimeout(() => {
                        setDisplay();
                      }, 500);
                      if (
                        !cartData.cartItems.items.some(
                          (itemX) => itemX.id === itemE.id
                        )
                      ) {
                        dispatch(newItem(itemE));
                      }
                      dispatch(calculateTotal());
                      check(itemE);
                    }}
                  >
                    add{" "}
                    <span>
                      {data.expandedItem.item.count
                        ? data.expandedItem.item.count
                        : null}
                    </span>{" "}
                    to cart
                  </button>
                  <button
                    className="plus"
                    onClick={() => {
                      dispatch(ADD(index));
                      dispatch(calculateTotal());
                    }}
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Details;
