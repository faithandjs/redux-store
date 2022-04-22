import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
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

    console.log(data.items);
  return <div>{}</div>;
}
/*

passed.current && storeItems.map((item:any) => {
                return(
                    <div><img src={storeItems.image}/>
                    <button onClick={() => dispatch(setItems(item))}> add to cart</button></div>
                )
            })*/
export default Home;
