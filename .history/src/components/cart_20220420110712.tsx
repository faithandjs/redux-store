import React from 'react';
import { 
    newItem, 
    deleteItems, 
    clearCart,
    cart
} from '../features/cartSlice'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { objectType } from '../type';

function Cart() {
  const dispatch = useDispatch();
  const cartData: objectType[] = useSelector(cart);
  console.log(cartData)
    return (
        <div>
            cart
            {cartData.length >= 1 && cartData.map(item => {
                return (
                    <div key={item.id}>
                {item.title}
            </div>
                )
            })
            
            }
        </div>
    );
}

export default Cart;