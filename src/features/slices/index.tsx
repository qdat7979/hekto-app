import { combineReducers } from "redux";
import cartReducer from './Cart/cartSlice'
import authReducer from './auth';

export * from './Cart/cartSlice';

const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
})

export default rootReducer