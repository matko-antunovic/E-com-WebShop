import React from 'react'
import "./PreviewCollection.scss"
import Item from "../item/Item"

const PreviewCollection = ({title, items}) => {
    return (
        <div className="preview-collection">
            <h1>{title.toUpperCase()}</h1>
            <div className="preview">
            {
                items.filter((item,i)=>i<4).map(item=>(
                    <Item key={item.id} item={item}/>
                ))
            }
            </div>
        </div>
    )
}

export default PreviewCollection
