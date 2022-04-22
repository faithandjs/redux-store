import React from "react";
import { useSelector } from "react-redux";
import { storeData } from "../features/data";
import { dataState } from "../type";
import { Link } from "react-router-dom";

function Details() {
  const count = useSelector((state: any) => state.counter.count);
  const details = useSelector((state: any) => state.data.expandedItem);
  const data: dataState = useSelector(storeData);
  let path = "shop%item%" + data.expandedItem.item.id;

  return (
    <div>
      {data.expandedItem.status === 3 && (
        <div>
          <div>{data.expandedItem.item.title}</div>
          <Link to={path}>
            <button>add to cart</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Details;
