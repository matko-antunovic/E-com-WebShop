import React from 'react'
import {ItemsContainer,Image,CollectionFooterStyles,CustomButtonStyles,NameContainer,PriceContainer} from "./ItemStyles"
import {connect} from "react-redux"
import {addItem} from "../../redux/cart/cartActions"

const ItemsCollection = ({item,addItem}) => {

    const {name,price,imageUrl}=item;
    return (
        <ItemsContainer>
            <Image className='image' imageUrl={imageUrl}
            />
            <CollectionFooterStyles>
                <NameContainer>{name} :</NameContainer>
                <PriceContainer>{price}$</PriceContainer>
            </CollectionFooterStyles>
            <CustomButtonStyles onClick={()=>addItem(item)} inverted>Add to cart</CustomButtonStyles>
        </ItemsContainer>
    )
}

const mapDispatchToProps=dispatch=>({
    addItem: item=>dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(ItemsCollection);


