import React from 'react';
import { useSelector } from 'react-redux';

function Details() {
    const count = useSelector ((state:any) => state.counter.count)
    
    return (
        <div>
            {count}
        </div>
    );
}

export default Details;