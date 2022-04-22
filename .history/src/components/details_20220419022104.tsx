import React from 'react';
import { useSelector } from 'react-redux';

function Details() {
    const count = useSelector ((state:any) => state.counter.count)
    const details = useSelector ((state:any) => state.data. expandedItem)
    
    return (
        <div>
            { details.name}
        </div>
    );
}

export default Details;