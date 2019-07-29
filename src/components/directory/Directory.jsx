import React from 'react'
import {DirectoryContainer} from "./DirectoryStyles"
import MenuItem from "../menu-item/MenuItem"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {selectDirectorySection} from "../../redux/directory/directorySelectors"

const Directory=({sections})=>(
            <DirectoryContainer>
                {
                   sections.map(({id, ...otherSectionProps})=>(
                        <MenuItem key={id} {...otherSectionProps}/>
                    )
                    )
                }
            </DirectoryContainer>
)

const mapStateToProps=createStructuredSelector({
  sections:selectDirectorySection
})


export default connect(mapStateToProps)(Directory);
