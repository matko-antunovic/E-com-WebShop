import shopData from "../../pages/shop/ShopData";
import ShopActionTypes from "./shopActionTypes"

const initialState={
   collections: shopData
}

const shopReducer=(state=initialState,action)=>{
    switch(action.type){
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return{
                ...state,
                collections:action.payload
            }

        default:
            return state;
    }
}

export default shopReducer;