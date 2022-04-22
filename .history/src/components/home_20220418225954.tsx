import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../features/add/counterSlice';

function Home() {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        
    );
}


export default Home;