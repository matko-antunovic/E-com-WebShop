import React from 'react'
import {StyledContainter,ImageContainer,QuantityStyles,ArrowStyles,RemoveButtonStyles,PriceStyles,NameStyles} from "./CheckoutItemStyles"
import {removeItem,decreaseQuantity,addItem} from "../../redux/cart/cartActions"
import {connect} from "react-redux"

const CheckoutItem = ({cartItem,removeItem,decreaseQuantity,addItem}) => {
    const{name,quantity,price,imageUrl}=cartItem;
    return (
        <StyledContainter>
            <ImageContainer>
                <img src={imageUrl} alt="item"/>
            </ImageContainer>
            <NameStyles>{name}</NameStyles>
            <QuantityStyles>
            <ArrowStyles onClick={()=>decreaseQuantity(cartItem)}>&#10094;</ArrowStyles>
            <span className="value">{quantity}</span> 
            <ArrowStyles onClick={()=>addItem(cartItem)}>&#10095;</ArrowStyles>
            </QuantityStyles>
            <PriceStyles>{price}</PriceStyles>
            <RemoveButtonStyles onClick={()=>removeItem(cartItem)}>&#10005;</RemoveButtonStyles>
        </StyledContainter>
    )
}

const mapDispatchToProps=dispatch=>({
    removeItem: item=>dispatch(removeItem(item)),
    addItem:item=>dispatch(addItem(item)),
    decreaseQuantity:item=>dispatch(decreaseQuantity(item))
})


export default connect(null,mapDispatchToProps)(CheckoutItem)