import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeData } from "../features/dataSlice";
import { dataState } from "../type";
import { Link, useNavigate } from "react-router-dom";
import { calculateTotal, newItem } from "../features/cartSlice";
import { Back, bgRotation, CartImg } from "./extras";
import "./style/details.scss";
//import { Rating } from 'react-simple-star-rating'
//import {StarsRating} from 'stars-rating'

function Details() {
  const Rating = require('react-rating');
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.count);
  const details = useSelector((state: any) => state.data.expandedItem);
  const data: dataState = useSelector(storeData);
  console.log(data.expandedItem.item)
  let path = "item" + data.expandedItem.item.id + "/cart";
  useEffect(() => {
    bgRotation("details-bg");
  });
  const SVGIcon = (props:any) =>
  <svg className={props.className} pointerEvents="none">
    <use xlinkHref={props.href} />
  </svg>;
  return (
    <div className="details">
      <div className="icons">
        <Back />
        <CartImg path={path} />
      </div>
      {(data.expandedItem.status === 3 || data.expandedItem.status === 5) && (
        <div key={data.expandedItem.item.id} className="item-box">
          <div className="img-box">
            <img src={data.expandedItem.item.image} />
          </div>
          <div className="content">
            <div className="title">{data.expandedItem.item.title}</div>
            <div className="description">
              {data.expandedItem.item.description}
            </div>
            <div className="price-rating">
              <div className="price">${data.expandedItem.item.price}</div>
              <div className="rating">
                <div className="rate">
              {  /*<Rating ratingValue= {data.expandedItem.item.rating.rate} allowHalfIcon readonly />*/}
                 
              <Rating
  emptySymbol={<SVGIcon href="#icon-star-empty" className="icon" />}
  fullSymbol={<SVGIcon href="#icon-star-full" className="icon" />}
/>
                  </div>
                <div className="count">
                  {data.expandedItem.item.rating.count}
                </div>
              </div>
            </div>
            <div className="button-box">
              <button onClick={() => {
                dispatch(newItem(data.expandedItem.item))
                dispatch(calculateTotal())}}>
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
