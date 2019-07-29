import React from 'react'
import {ItemsContainer,Image,CollectionFooterStyles,CustomButtonStyles,NameContainer,PriceContainer} from "./ItemStyles"
import {connect} from "react-redux"
import {addItem} from "../../redux/cart/cartActions"

// class ItemsCollection extends React.Component{

//     handleClick=(item)=>{
//         this.props.addItem(item)
//     }

//     render(){
//         const {item}=this.props;
//         return(
//  <div className="items-collection">
//        <div className="image"
//             style={{backgroundImage: `url(${item.imageUrl})`}}
//             />
//             <div className="collection-footer">
//                 <span className="name">{item.name}</span>
//                 <span className="price">{item.price}</span>
//             </div>
//             <CustomButtton handleClick={this.handleClick} item={item} inverted>Add to cart</CustomButtton>
//         </div>
//         )
//     }
// }

const ItemsCollection = ({item,addItem}) => {

    const {name,price,imageUrl}=item;
    return (
        <ItemsContainer>
            <Image className='image' imageUrl={imageUrl}
            />
            <CollectionFooterStyles>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterStyles>
            <CustomButtonStyles onClick={()=>addItem(item)} inverted>Add to cart</CustomButtonStyles>
        </ItemsContainer>
    )
}

const mapDispatchToProps=dispatch=>({
    addItem: item=>dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(ItemsCollection);


