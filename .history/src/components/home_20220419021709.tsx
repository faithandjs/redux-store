import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../features/counterSlice';
import { setData, setItems } from '../features/data';


function Home() {
    //const [storeItems, setStoreItems] = 

    const storeItems:any = useSelector<any>((state) => state.data.data)
    const dispatch = useDispatch()
    const passed = useRef(false)

    useEffect(
        () => {
            if(!passed.current){
                setData()
                passed.current = true
            }
        },[]
    )
    return (
        <div>
            {storeItems.map((item:any) => {
                return(
                    <div><img src={storeItems.image}/>
                    <button onClick={() => dispatch(setItems(item))}> add to cart</button></div>
                )
            })}
        </div>
        
    );
}
/*
<button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>*/
export default Home;