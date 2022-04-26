import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeData } from "../features/dataSlice";
import { dataState } from "../type";
import { Link, useNavigate } from "react-router-dom";
import { newItem } from "../features/cartSlice";
import { bgRotation, CartImg } from "./extras";
import back from "./images/right-arrow.png";
import "./style/details.scss";

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

function Details() {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.count);
  const details = useSelector((state: any) => state.data.expandedItem);
  const data: dataState = useSelector(storeData);
  let path = "item" + data.expandedItem.item.id + "/cart";
  useEffect(() => {
    bgRotation("cart-bg");
  });
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
                <div className="rate">{data.expandedItem.item.rating.rate}</div>
                <div className="count">
                  {data.expandedItem.item.rating.count}
                </div>
              </div>
            </div>
            <div className="button-box">
              <button onClick={() => dispatch(newItem(data.expandedItem.item))}>
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
