import React from 'react'
import "./Collection.scss"
import ItemsCollection from "../../components/items-collection/ItemsCollection"
import {connect} from "react-redux"
import {selectCollection} from "../../redux/shop/shopSelectors"

const Collection = ({collection}) => {
    console.log(collection)
    return (
        <div className="Collection">
            <h2>Collection PAGE</h2>
        </div>
    )
}

const mapStateToProps=(state,ownProps)=>({
    collection :selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection)
