import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeData } from "../features/data";
import { dataState } from "../type";
import { Link } from "react-router-dom";
import {newItem} from '../features/cartSlice'

function Details() {
    const dispatch = useDispatch()
  const count = useSelector((state: any) => state.counter.count);
  const details = useSelector((state: any) => state.data.expandedItem);
  const data: dataState = useSelector(storeData);
  let path = "shop%item%" + data.expandedItem.item.id;

  return (
    <div>
      {(data.expandedItem.status === 3 || data.expandedItem.status === 5) && (
        <div>
          <div>{data.expandedItem.item.title}</div>
          <Link to='cart'>
            <button onClick={() => dispatch(newItem(data.expandedItem.item))}>add to cart</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Details;
