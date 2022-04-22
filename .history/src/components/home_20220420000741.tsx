import { isAsyncThunkAction } from "@reduxjs/toolkit";
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setItems, storeData, storeItems } from "../features/data";
import "./style/style.scss";
import "./css.css";

function Home() {
  const dispatch = useDispatch();
  const data = useSelector(storeData);
  console.log("data");
  useEffect(() => {
    console.log("here calling dispatch");
    dispatch(storeItems());
    console.log(data.items);
  }, []);
  return <div>{}</div>;
}
/*
<button onClick={() => dispatch(increment())}>+</button>

passed.current && storeItems.map((item:any) => {
                return(
                    <div><img src={storeItems.image}/>
                    <button onClick={() => dispatch(setItems(item))}> add to cart</button></div>
                )
            })
            <button onClick={() => dispatch(decrement())}>-</button>*/
export default Home;
