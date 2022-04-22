import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setItems,
  storeData,
  storeItems,
  restExpandedStatus,
} from "../features/data";
import { dataState, objectType } from "../type";
import "./style/style.scss";
import { Link, useNavigate } from "react-router-dom";
import { cart, newItem } from "../features/cartSlice";
import { CartImg } from "./cart";
function Home() {
  const dispatch = useDispatch();
  const data: dataState = useSelector(storeData);
  const navigate = useNavigate();
  const path = "item" + data.expandedItem.item.id;
  let pageContent;
  const cartData: {
    items: objectType[];
    msg: string;
  } = useSelector(cart);
  console.log(cartData.items);
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
      pageContent = (
        <div>error occured, check internet connectivity and reload</div>
      );
  }
  return (
    <div>
      <h1>home</h1>
      <CartImg path="/" />
      {pageContent}
    </div>
  );
}
/*

passed.current && storeItems.map((item:any) => {
                return(
                    <div><img src={storeItems.image}/>
                    <button onClick={() => dispatch(setItems(item))}> add to cart</button></div>
                )
            })*/
export default Home;
