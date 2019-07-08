import React from 'react'
import "./ItemsCollection.scss"


const ItemsCollection = ({id,name,price,imageUrl}) => {
    return (
        <div className="items-collection">
            <div className="image"
            style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}

export default ItemsCollection
