import React from 'react'
import { Button } from 'react-bootstrap';
import Cart from './Cart';

const CartList = ({ addToCart, setAddToCart, closeOpenClick }) => {
    let sum = 0;
    for (let i = 0; i < addToCart.length; i++) {
        sum += Math.round(addToCart[i].price * 100) / 100;
    }    
    return (
        <div className="cart-list">
            <ul>
                {
                    addToCart.map(mcart => (
                        <li>
                            <Cart
                                key={mcart.id} id={mcart.id} name={mcart.name} price={mcart.price}
                                image={mcart.image} addToCart={addToCart} setAddToCart={setAddToCart}
                            />
                        </li>
                    ))
                }
            </ul>
            <div className="text-center">
                <div>
                    <label> 총 금액 : </label>
                    {sum.toFixed(2)}달러
                </div>
                < Button className="button" variant="danger" onClick={closeOpenClick} >닫기</Button>
            </div>
        </div>
    )
}

export default CartList