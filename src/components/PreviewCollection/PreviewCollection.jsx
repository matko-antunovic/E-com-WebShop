import React from 'react'
import "./PreviewCollection.scss"
import ItemsCollection from "../items-collection/ItemsCollection"

const PreviewCollection = ({title, items}) => {
    return (
        <div className="preview-collection">
            <h1>{title.toUpperCase()}</h1>
            <div className="preview">
            {
                items.filter((item,i)=>i<4).map(item=>(
                    <ItemsCollection key={item.id} item={item}/>
                ))
            }
            </div>
        </div>
    )
}

export default PreviewCollection
