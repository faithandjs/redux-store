import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setItems,
  storeData,
  storeItems,
  restExpandedStatus,
} from "../features/dataSlice";
import { dataState } from "../type";
import "./style/home.scss";
import { Link, useNavigate } from "react-router-dom";
import { newItem } from "../features/cartSlice";
import { CartImg } from "./cart";

function Home() {
  const dispatch = useDispatch();
  const data: dataState = useSelector(storeData);
  const navigate = useNavigate();
  const path = "item" + data.expandedItem.item.id;
  let pageContent;

  console.log(data);
  useEffect(() => {
    if (data.data.status === 1) {
      dispatch(storeItems());
    }
  }, [dispatch, data.data.status]);
  useEffect(() => {
    if (data.expandedItem.status === 3) {
      navigate(`${path}`, { replace: false });
      dispatch(restExpandedStatus());
    }
  }, [data.expandedItem.status]);
  switch (data.data.status) {
    default:
      pageContent = null;
      break;
    case 1:
    case 2:
      pageContent = <div>loading</div>;
      break;
    case 3:
      pageContent = data.data.items.map((item: any) => {
        return (
          <div key={item.id}>
            <div onClick={() => dispatch(setItems(item))}>{item.title}</div>
            <button onClick={() => dispatch(newItem(item))}>add to cart</button>
          </div>
        );
      });
      break;
    case 4:
      dispatch(storeItems());
      pageContent = <div>error occured, retrying...</div>;
  }
  return (
    <div>
      <h1>home</h1>
      <input type="text" />
      <select name="category">
        <option value="all">Filter by Region</option>
        <option value="women's clothing">Europe</option>
        <option value="men's clothing">Africa</option>
        <option value="jewelery">Americas</option>
        <option value="electronics">Asia</option>
      </select>
      <CartImg path="/" />
      {pageContent}
    </div>
  );
}

export default Home;
