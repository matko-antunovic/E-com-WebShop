import styled,{css}  from "styled-components"


const sharedStyles=css`
    width: 23%;
`
////
export const StyledContainter=styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`
///////

export const ImageContainer=styled.div`
        width: 23%;
      padding-right: 15px;

      img {
    width: 100%;
    height: 100%;
  }
`

export const QuantityStyles=styled.span`
        ${sharedStyles}
        padding-left: 20px;
          display: flex;
`

export const ArrowStyles=styled.div`
        margin:0 9px;
        cursor: pointer;
`

export const PriceStyles=styled.span`
    ${sharedStyles}
`

export const NameStyles=styled.span`
    ${sharedStyles}
`

export const RemoveButtonStyles=styled.div`
    padding-left: 12px;
    cursor: pointer;
`