import React, { Component } from 'react'
import ShopData from "./ShopData"
import PreviewCollection from "../../components/PreviewCollection/PreviewCollection"

class Shop extends Component {


    state={
        collections:ShopData
    }

    render() {
        const {collections}=this.state;
        return (
            <div className="shop-page">
             {
                 collections.map(({id, ...otherCollectionProps})=>(
                     <PreviewCollection key={id} {...otherCollectionProps} />
                 ))
             }
            </div>
        )
    }
}
export default Shop;
