import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setItems, storeData, storeItems,restExpandedStatus } from "../features/data";
import { dataState } from "../type";
import "./style/style.scss";
import { Link, useNavigate } from "react-router-dom";
import { newItem } from "../features/cartSlice";

function Home() {
  const dispatch = useDispatch();
  const data: dataState = useSelector(storeData);
  const navigate = useNavigate()
            const path = "shop%item%" + data.expandedItem.item.id
  console.log("data");

  useEffect(() => {
    if (data.data.status === 1) {
      console.log("here calling dispatch");
      dispatch(storeItems());
    }
  }, [dispatch, data.data.status]);
  useEffect(
    () => {
       if(data.expandedItem.status === 3)( navigate(`${path}`, {replace: false}))
    }, [data.expandedItem.item]
  )
  const newState = { ...data, modalOpen: true };
  console.log(data.data.status === 3, data.data.status, data);
  return (
    <div>
      {data.data.status === 3 &&
        data.data.items.map((item: any) => {
          return (
          <div key={item.id}>
              <div onClick={() => dispatch(setItems(item))}>{item.title}</div>
              <button onClick={() => dispatch(newItem(item))}>add to cart</button>
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
