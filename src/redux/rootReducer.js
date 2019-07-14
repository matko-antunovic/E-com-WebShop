import {combineReducers} from "redux";
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import userReducer from "./user/userReducer"
import cartReducer from "./cart/cartReducer"
import directoryReducer from "./directory/directoryReducer"
import shopReducer from "./shop/shopReducer"

const persistConfig={
    key:"root",   //start storing from the root
    storage,  
    whitelist: ["cart"]    //array containing string names of any reducers that we wanna store
                            //using cart only bc user det are in fb
}

const rootReducer=combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop:shopReducer
})

export default persistReducer(persistConfig,rootReducer)