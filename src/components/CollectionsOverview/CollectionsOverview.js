import React from "react";
import {CollectionsContainer} from "./CollectionsOverviewStyles"
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PreviewCollection from "../PreviewCollection/PreviewCollection"
import {selectCollectionForPreview} from "../../redux/shop/shopSelectors"

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </CollectionsContainer>
  );
};
const mapStateToProps=createStructuredSelector({
    collections:selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
