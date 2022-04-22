import { isAsyncThunkAction } from '@reduxjs/toolkit';
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setItems, storeData, storeItems } from '../features/data';

function Home() {
    const dispatch = useDispatch()
    const data = useSelector(storeData);
    const passed = useRef(false)
    console.log('data')
    useEffect(
        () => {
            if(data.status === 1){
                dispatch(storeItems()) 
            }
                console.log(storeData)
        }
    )
    return (
        <div>
            {}
        </div>
        
    );
}
/*
<button onClick={() => dispatch(increment())}>+</button>

passed.current && storeItems.map((item:any) => {
                return(
                    <div><img src={storeItems.image}/>
                    <button onClick={() => dispatch(setItems(item))}> add to cart</button></div>
                )
            })
            <button onClick={() => dispatch(decrement())}>-</button>*/
export default Home;