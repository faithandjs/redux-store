import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeData } from "../features/data";
import { dataState } from "../type";
import { Link, useNavigate } from "react-router-dom";
import {newItem} from '../features/cartSlice'
import {CartImg} from './cart'

function Details() {
  //const navigate = useNavigate()
  const dispatch = useDispatch()
  const count = useSelector((state: any) => state.counter.count);
  const details = useSelector((state: any) => state.data.expandedItem);
  const data: dataState = useSelector(storeData);
  let path = "item" + data.expandedItem.item.id + '/cart'

  return (
    <div>
      <CartImg path={path}/>
      {(data.expandedItem.status === 3 || data.expandedItem.status === 5) && (
        <div key={data.expandedItem.item.id}>
        <div>{data.expandedItem.item.image}</div>
        <div>
          <div>{data.expandedItem.item.title}</div>
          <div>{data.expandedItem.item.description}</div>
          <div>
          <div>{data.expandedItem.item.price}</div>
          <div>
          <div>{data.expandedItem.item.rating.rate}</div>
          <div>{data.expandedItem.item.rating.count}</div>
          </div>
          </div>
        </div>
            <button onClick={() => dispatch(newItem(data.expandedItem.item))}>add to cart</button>
        </div>
      )}
    </div>
  );
}

export default Details;
