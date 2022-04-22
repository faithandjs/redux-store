import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counterSlice";
import { setItems, storeData, storeItems } from "../features/data";
import "./style/style.scss";
function Home() {

  const dispatch = useDispatch();
  const data = useSelector(storeData);
  console.log("data");

  useEffect(() => {
    console.log("here calling dispatch");
    dispatch(storeItems());
  }, [dispatch, data.status]);
  const newState = { ...data, modalOpen: true }
  /*const display = () => {
      if 
  }*/
    console.log(data.status === 3, data.status, data);
  return <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {data.status === 3 && 
          data.items.map(item => {
              return <div>
                  {item.title}
              </div>
          })
      }</div>;
}
/*

passed.current && storeItems.map((item:any) => {
                return(
                    <div><img src={storeItems.image}/>
                    <button onClick={() => dispatch(setItems(item))}> add to cart</button></div>
                )
            })*/
export default Home;
