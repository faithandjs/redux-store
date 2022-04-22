import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeData } from "../features/data";
import { dataState } from "../type";
import { Link, useNavigate } from "react-router-dom";
import {newItem} from '../features/cartSlice'
import {CartImg} from './cart'

function Details() {
  const navigate = useNavigate()
    const dispatch = useDispatch()
  const count = useSelector((state: any) => state.counter.count);
  const details = useSelector((state: any) => state.data.expandedItem);
  const data: dataState = useSelector(storeData);
  let path = "item" + data.expandedItem.item.id + '/*';
  console.log(navigate(-1))

  return (
    <div>
      <CartImg/>
      {(data.expandedItem.status === 3 || data.expandedItem.status === 5) && (
        <div>
          <div>{data.expandedItem.item.title}</div>
            <button onClick={() => dispatch(newItem(data.expandedItem.item))}>add to cart</button>
        </div>
      )}
    </div>
  );
}

export default Details;
