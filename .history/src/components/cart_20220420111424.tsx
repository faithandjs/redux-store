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
import cartIcon from './shopping-bag.png'

export const CartImg = () => {
    return <Link to='cart'><img src={cartIcon}/></Link>
}
function Cart() {
  const dispatch = useDispatch();
  const cartData: objectType[] = useSelector(cart);
  console.log(cartData)
    return (
        <div>
            cart
            <CartImg/>
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