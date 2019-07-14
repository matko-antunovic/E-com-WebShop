import React from 'react'
import "./Directory.scss"
import MenuItem from "../menu-item/MenuItem"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {selectDirectorySection} from "../../redux/directory/directorySelectors"

const Directory=({sections})=>(
            <div className="directory-menu">
                {
                   sections.map(({id, ...otherSectionProps})=>(
                        <MenuItem key={id} {...otherSectionProps}/>
                    )
                    )
                }
            </div>
)

const mapStateToProps=createStructuredSelector({
  sections:selectDirectorySection
})


export default connect(mapStateToProps)(Directory);
