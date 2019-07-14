import React from "react";
import "./CollectionsOverview.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./CollectionsOverview.scss";
import PreviewCollection from "../PreviewCollection/PreviewCollection"
import {selectShopItems} from "../../redux/shop/shopSelectors"

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps=createStructuredSelector({
    collections:selectShopItems
})

export default connect(mapStateToProps)(CollectionsOverview);
