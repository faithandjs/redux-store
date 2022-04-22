import React from 'react';
import { useSelector } from 'react-redux';
import { storeData } from '../features/data';
import { dataState } from '../type';

function Details() {
    const count = useSelector ((state:any) => state.counter.count)
    const details = useSelector ((state:any) => state.data. expandedItem)

    
  const data: dataState = useSelector(storeData);
    
    return (
        <div>
            {
            data.expandedItem.status === 3 && 
            <div>{data.expandedItem.item.title }</div>}
        </div>
    );
}

export default Details;