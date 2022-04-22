import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../features/counterSlice';
import { setItems } from '../features/data';


function Home() {

    const storeItems:any = useRef(useSelector<any>((state) => state.data.data))
    const dispatch = useDispatch()
    const passed = useRef(false)
    console.log(storeItems)
    /*useEffect(
        () => {
            console.log('out', passed.current)
            if(!passed.current){
                setData()
                console.log('in', passed.current)
                passed.current = true
                storeItems.current = useSelector<any>((state) => state.data.data)
            }
            console.log(passed.current, storeItems)
        }
    )*/
    return (
        <div>
            {passed.current && storeItems.map((item:any) => {
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