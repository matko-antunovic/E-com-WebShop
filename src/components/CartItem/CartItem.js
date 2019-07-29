import React from 'react'
import {CartItemImage,ItemDetails,CartItemContainer} from "./CartItemStyles"

const CartItem = ({item:{imageUrl,price,name, quantity}}) => {
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt="item"/>
            <ItemDetails>
            <span > {name} </span>
            <span >{quantity} x ${price} </span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem
