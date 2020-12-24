import {applyMiddleware, combineReducers, compose, createStore, } from 'redux';
import {productDeleteReducer, productDetailsReducer, productListReducer, productSaveReducer} from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducers';
//import authReducer from './reducers/authReducer';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';

import { userRegisterReducer, userSigninReducer, authReducer } from './reducers/userReducer';
import { orderCreateReducer } from './reducers/orderReducers';

const cartItems = Cookie.getJSON("cartItems") || [];
const shippingAddress = Cookie.getJSON("shippingAddress") || [];
const paymentMethod = Cookie.getJSON("paymentMethod") || [];
const userInfo = Cookie.getJSON("userInfo") || [];
const regInfo = Cookie.getJSON("regInfo") || null;


   


const initialState= {cart: {cartItems, shippingAddress:{}, payment:{}},
userSignin:{
  token: localStorage.getItem('token'),
  isAllowedTologin: false,
  errors: {},
  userInfo, 
  regInfo 
},
userRegister:{
  token: localStorage.getItem('token'),
  isAllowedTologin: true,
  errors: {},
  regInfo
},
userAuth:{
    token: localStorage.getItem('token'),
    isAllowedTologin: false,
    errors: {}
}
,
cart: {
  cartItems,
  shippingAddress,
  paymentMethod
  
}
};
const reducer = combineReducers({
  //bookStore: productListReducer,
  details: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userAuth: authReducer,
  productSave: productSaveReducer,  
  productDelete: productDeleteReducer,
  orderCreate: orderCreateReducer

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));
export default store;  