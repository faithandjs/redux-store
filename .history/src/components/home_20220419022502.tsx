import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../features/counterSlice';
import { setData, setItems } from '../features/data';


function Home() {

    const storeItems:any = useSelector<any>((state) => state.data.data)
    const dispatch = useDispatch()
    const passed = useRef(false)

    useEffect(
        () => {
            console.log('out', passed.current)
            if(!passed.current){
                setData()
                console.log('in', passed.current)
            }
            console.log(passed.current, storeItems)
            passed.current = true
        }
    )
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