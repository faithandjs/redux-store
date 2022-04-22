import React from 'react';
import { 
    newItem, 
    deleteItems, 
    clearCart,
    cart
} from '../features/cartSlice'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { objectType } from '../type';
import cartIcon from './shopping-bag.png'

export const CartImg = () => {
    const navigate = useNavigate()

    return <div onClick={()=>{
        navigate(-1)
        navigate('cart', {replace: false})
    }}><img src={cartIcon}/></div>
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