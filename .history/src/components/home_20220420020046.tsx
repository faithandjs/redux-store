import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setItems, storeData, storeItems } from "../features/data";
import { dataState } from "../type";
import "./style/style.scss";
import { Link } from "react-router-dom";

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
            let path = "shop%item%" + data.expandedItem.item.id
          return (
          <div key={item.id}>
              <div>{item.title}</div>
              <Link to={path}><button onClick={() => dispatch(setItems(item))}>add to cart</button></Link>
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
