import React from 'react'
import "./ItemsCollection.scss"
import CustomButtton from "../Button/CustomButton"
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
//             <CustomButtton onClick={()=>this.handleClick(item)} inverted>Add to cart</CustomButtton>
//         </div>
//         )
//     }
// }

const ItemsCollection = ({item,addItem}) => {

    const {name,price,imageUrl}=item;
    return (
        <div className="items-collection">
            <div className="image"
            style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButtton onClick={()=>addItem(item)} inverted>Add to cart</CustomButtton>
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    addItem: item=>dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(ItemsCollection);


