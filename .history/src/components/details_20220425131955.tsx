import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeData } from "../features/dataSlice";
import { dataState, objArr,
  objectType, msg } from "../type";
import { Link, useNavigate } from "react-router-dom";
import { calculateTotal, cart, newItem } from "../features/cartSlice";
import { Back, bgRotation, CartImg, Message, setDisplay } from "./extras";
import "./style/details.scss";
import { Rating } from "react-simple-star-rating";
import { setState } from "../features/cartItemSlice";

function Details() {
  const dispatch = useDispatch();
  const data: dataState = useSelector(storeData);
  const cartData: objArr = useSelector(cart);
  const itemE = data.expandedItem.item;
  let path = "item" + itemE.id + "/cart";
  useEffect(() => {
    bgRotation("details-bg");
  });
 
  const check = (i: objectType) => {
    console.log(cart, useSelector(cart))
  //const cartData:objArr = useSelector(cart)
  //console.log(cart.cartItems.items.some(item => item.id === i.id))
  if (cartData.cartItems.items.some(item => item.id === i.id)){
    dispatch(setState( msg.ALREADYIN))
    console.log('already in')
  }else{
   dispatch(setState( msg.ADDED))
    console.log('added')
  }
  }

  return (
    <div className="details">
      
      <div className="icons">
        <Back />
        <CartImg path={path} />
      </div>
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
            <div className="button-box">
              <button
                onClick={() => {
                  setTimeout(() => {
                    setDisplay();
                  }, 500);
                  if (!cartData.cartItems.items.some( (itemX) => itemX.id === itemE.id )
                  ) {
                    dispatch(newItem(itemE));
                  } else {
                    
                  }
                  dispatch(calculateTotal());
                      check(itemE)}}
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
