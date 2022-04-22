import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setItems,
  storeData,
  storeItems,
  restExpandedStatus,
} from "../features/dataSlice";
import { dataState, objectType } from "../type";
import "./style/home.scss";
import { Link, useNavigate } from "react-router-dom";
import { newItem } from "../features/cartSlice";
import { CartImg } from "./cart";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data: dataState = useSelector(storeData);
  const [current, setCurrent] = useState<objectType[]>(data.data.items);
  const [inputvalue, setInputValue] = useState("");
  const path = "item" + data.expandedItem.item.id;
  const passed = useRef(false)
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
      let array;
      console.log(current.length);
      if (current.length !== 0) {
        console.log("here");
        array = current;
      } else {
        array = data.data.items;
      }
      pageContent = array.map((item: any) => {
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
    let value = document.querySelector("select")!.value;
    console.log("region", value);
    if (value === "all") {
      setCurrent(data.data.items);
    } else {
      let arr: objectType[] = [];
      data.data.items.map((item) => {
        if (item.category === value) {
          arr.push(item);
        }
      });
      setCurrent(arr);
    }
    search()
  };
  const search = () => {
    if (inputvalue !== "") {
      let arr: objectType[] = [];
      current.map((item) => {
        if (item.title.toLowerCase().includes(`${inputvalue.toLowerCase()}`)) {
          arr.push(item);
        }
      });
      setCurrent(arr);
    }
  };
  useEffect(() => {
    if (inputvalue !== "") {
      search();
      console.log("search", current);
    }
  }, [inputvalue]);
  useEffect(() => {
    if(data.data.items.length !== 0 && !passed.current){
      setCurrent(data.data.items)
      console.log('inside useeffect')
      passed.current = true
    }
  });
  return (
    <div>
      <h1>home</h1>
      <input
        type="text"
        placeholder="Search for item"
        onChange={(evt: React.FormEvent<HTMLInputElement>) => {
          setInputValue((evt.target as HTMLInputElement).value);
        }}
      />

      <select name="category" onChange={() => categorySelected()}>
        <option value="all">Filter by Region</option>
        <option value="women's clothing">Women's clothing</option>
        <option value="men's clothing">Men's clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>
      <CartImg path="/" />
      {pageContent}
    </div>
  );
}

export default Home;
