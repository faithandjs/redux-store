import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setItems,
  storeData,
  storeItems,
  restExpandedStatus,
} from "../features/dataSlice";
import { dataState,objectType } from "../type";
import "./style/home.scss";
import { Link, useNavigate } from "react-router-dom";
import { newItem } from "../features/cartSlice";
import { CartImg } from "./cart";

function Home() {
  const dispatch = useDispatch();
  const data: dataState = useSelector(storeData);
  const [current,  setCurrent] = useState<objectType[]>(data.data.items)
  const navigate = useNavigate();
  const path = "item" + data.expandedItem.item.id;
  let pageContent;

  console.log(data, current);
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
      pageContent = current.map((item: any) => {
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

  const categorySelected = () => {
    let value = document.querySelector('select')!.value
    console.log('region', value)
    if(value === 'all'){
      setCurrent(data.data.items)
    }else{
      let arr:objectType[] =[]
      data.data.items.map(item => {
        if(item.category === value){
          arr.push(item)
        }
      })
      setCurrent(arr)
    }
  }
  return (
    <div>
      <h1>home</h1>
      <input type="text" />
      <select name="category" onChange={() => categorySelected()}>
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
