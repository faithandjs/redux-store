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
import { CartImg } from "./extras";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data: dataState = useSelector(storeData);
  const [currentCategory, setCurrentCategory] = useState<objectType[]>(
    data.data.items
  );
  const [current, setCurrent] = useState<objectType[]>(data.data.items);
  const [inputvalue, setInputValue] = useState("");
  const path = "item" + data.expandedItem.item.id;
  const passed = useRef(false);
  const passed2 = useRef(false);
  const passed3 = useRef(false);
  const error = useRef(0);

  let pageContent;

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
      if (current.length !== 0 && passed2.current) {
        //console.log("current.length !== 0 &&  passed2.current", current.length !== 0 &&  passed2.current);
        pageContent = current.map((item: any) => {
          return (
            <div key={item.id}>
              <div onClick={() => dispatch(setItems(item))}>{item.title}</div>
              <button onClick={() => dispatch(newItem(item))}>
                add to cart
              </button>
            </div>
          );
        });
      } else if (current.length === 0 && !passed2.current) {
        //console.log("current.length === 0 &&  !passed2.current", current.length === 0 &&  !passed2.current);
        passed2.current = true;
        pageContent = data.data.items.map((item: any) => {
          return (
            <div key={item.id}>
              <div onClick={() => dispatch(setItems(item))}>{item.title}</div>
              <button onClick={() => dispatch(newItem(item))}>
                add to cart
              </button>
            </div>
          );
        });
      } else if (current.length === 0 && passed2.current) {
        //console.log("current.length === 0 &&  passed2.current", current.length === 0 &&  passed2.current);
        pageContent = (
          <div>
             "{inputvalue}" not found in "{document.querySelector("select")!.value}"
          </div>
        );
      }

      break;
    case 4:
      if (error.current < 5) {
        dispatch(storeItems());
        error.current++;
        console.log(error.current);
      } else {
        console.log(error.current, "error");
        pageContent = <div>error occured</div>;
      }
  }

  const categorySelected = () => {
    let value = document.querySelector("select")!.value;
    if (value === "all") {
      setCurrentCategory(data.data.items);
      setCurrent(data.data.items);
    } else {
      let arr: objectType[] = [];
      data.data.items.map((item) => {
        if (item.category === value) {
          arr.push(item);
        }
      });
      setCurrentCategory(arr);
      setCurrent(arr);
    }
  };
  const search = () => {
    console.log(inputvalue);
    if (inputvalue !== "") {
      console.log('!== ""')
      let arr: objectType[] = [];
      currentCategory.map((item) => {
        if (
          item.title
            .toLowerCase()
            .split(" ")
            .join("")
            .includes(`${inputvalue.toLowerCase().split(" ").join("")}`)
        ) {
          arr.push(item);
        }
      });
      setCurrent(arr);
    } else {
      console.log('=== ""')
      setCurrent(currentCategory);
    }
  };
  useEffect(() => {
    if (passed3.current) {
      search();
      console.log("search", current, currentCategory);
    }
  }, [inputvalue, current]);
  useEffect(() => {
    if (data.data.items.length !== 0 && !passed.current) {
      setCurrent(data.data.items);
      //console.log("inside useeffect");
      passed.current = true;
    }
  });
  return (
    <div>
      <h1>home</h1>
      <input
        type="text"
        placeholder="Search for item"
        onChange={(evt: React.FormEvent<HTMLInputElement>) => {
          passed3.current = true
          setInputValue((evt.target as HTMLInputElement).value);
        }}
      />

      <select name="category" onChange={() => categorySelected()}>
        <option value="all">Filter by Category</option>
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
