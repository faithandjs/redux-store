import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counterSlice";
import { setItems, storeItems } from "../features/data";
import "./style/style.scss";
function Home() {

  const dispatch = useDispatch();
  const data = useSelector((state:any) => state.data.items);
  const [input, setinput] = useState<any>()
  console.log("data");

  useEffect(() => {
    console.log("here calling dispatch");
    dispatch(storeItems());
  }, [dispatch, data.status]);

    console.log(data.items);
  return <div>
      <input onChange={(e) => setinput(e.target.value)}/>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {
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
