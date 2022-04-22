import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setItems, storeData, storeItems } from "../features/data";
import { dataState } from "../type";
import "./style/style.scss";
function Home() {
  const dispatch = useDispatch();
  const data: dataState = useSelector(storeData);
  console.log("data");

  useEffect(() => {
    if (data.data.status === 1) {
      console.log("here calling dispatch");
      dispatch(storeItems());
    }
  }, [dispatch, data.data.status]);
  const newState = { ...data, modalOpen: true };
  /*const display = () => {
      if 
  }*/
  console.log(data.data.status === 3, data.data.status, data);
  return (
    <div>
      {data.data.status === 3 &&
        data.data.items.map((item: any) => {
          return (
          <div key={item.id}>
              <div>{item.title}</div>
              <div onClick={() => dispatch(setItems(item))}>add to cart</div>
          </div>
          );
        })}
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
