import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";

const Cart = ({ id, name, price, image, addToCart, setAddToCart }) => {
    const delHandler = () => {
        setAddToCart(addToCart.filter(ct => ct.id !== id));        
    }
    return (
        <div className="cartbox">
            <img src={image} alt={name} />
            <div className="cart-text">
                <h5>{name}</h5>
                <div>
                    {price} 달러
                    <IoCloseCircleOutline
                        className="cart-del"
                        onClick={delHandler}
                    />
                </div>
            </div>
        </div>
    )
}

export default Cart