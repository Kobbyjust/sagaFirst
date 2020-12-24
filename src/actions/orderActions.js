import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS } from "../constants/orderConstants";
import {CART_EMPTY} from "../constants/cartConstants"
import Axios from 'axios';

import Cookie from 'js-cookie';

 

export const createOrder = (
    name,
    address,
    email,
    city,
    payment,
    country,
    itemName,
    itemQty,
    itemPrice
    ) => async (dispatch, getState) => {
dispatch({type: ORDER_CREATE_REQUEST, payload: { name,
    address,
    email,
    city,
    payment,
    country,
    itemName,
    itemQty,
    itemPrice } });
/*try {
    const {
        userSignin: {userInfo},
    } = getState();
    const {data} = await Axios.post('/api/orders/order', order, {  
        headers: {  
            Authorization: 'Bearer' + userInfo.token
        },
    });
    dispatch({type: ORDER_CREATE_SUCCESS, payload: data.order});
    dispatch({type: CART_EMPTY, payload: data.order});
   //Cookie.remove('cartItems');
} catch (error) {
    dispatch({type: ORDER_CREATE_FAIL,
    payload: error.message })
}  
*/


try {
    const {data} = await Axios.post('/api/orders/order', {
        name,
        address,
        email,
        city,
        payment,
        country,
        itemName,
        itemQty,
        itemPrice});
    dispatch({type: ORDER_CREATE_SUCCESS, payload: data });
    Cookie.set('shippingAddress', JSON.stringify(data));
} catch (error) {
    dispatch({type: ORDER_CREATE_FAIL, payload:error.message});  
}
}  