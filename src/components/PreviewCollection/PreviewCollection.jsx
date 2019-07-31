import React from 'react'
import "./PreviewCollection.scss"
import Item from "../item/Item"
import {withRouter} from "react-router-dom"

const PreviewCollection = ({title, items, match, history}) => {
    return (
        <div className="preview-collection">
            <h1 className="title" onClick={()=>history.push(`${match.url}/${title.toLowerCase()}`)}>{title.toUpperCase()}</h1>
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

export default withRouter(PreviewCollection);
