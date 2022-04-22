import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../features/counterSlice';


function Home() {
    //const [storeItems, setStoreItems] = 
    const storeItems = useSelector<any>((state) => state.data.data)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        
    );
}


export default Home;