import axios from 'axios';
import Cookie from 'js-cookie';

const { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING, CART_SAVE_PAYMENT } = require("../constants/cartConstants");

const addToCarT = (productId, qty,) => async (dispatch, getState) =>{
try {
    const {data} = await  axios.get('/api/product/Books' + productId);
    dispatch({type: CART_ADD_ITEM, payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
     }});
const {cart:{cartItems}} = getState(); 
Cookie.set("cartItems", JSON.stringify(cartItems));

} catch (error) {
    
}

try {
    const {data} = await  axios.get('/api/product/Provisions' + productId);
    dispatch({type: CART_ADD_ITEM, payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty
    }});
const {cart:{cartItems}} = getState();
Cookie.set("cartItems", JSON.stringify(cartItems));

} catch (error) {
    
}

try {
    const {data} = await  axios.get('/api/product/Phones' + productId);
    dispatch({type: CART_ADD_ITEM, payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty
    }});
const {cart:{cartItems}} = getState();
Cookie.set("cartItems", JSON.stringify(cartItems));

} catch (error) {
    
}

try {
    const {data} = await  axios.get('/api/product/Laptops' + productId);
    dispatch({type: CART_ADD_ITEM, payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty
    }});
const {cart:{cartItems}} = getState();
Cookie.set("cartItems", JSON.stringify(cartItems));

} catch (error) {
    
}

try {
    const {data} = await  axios.get('/api/product/Footwears' + productId);
    dispatch({type: CART_ADD_ITEM, payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty
    }});
const {cart:{cartItems}} = getState();
Cookie.set("cartItems", JSON.stringify(cartItems));

} catch (error) {
    
}

try {
    const {data} = await  axios.get('/api/product/ComputerAccessories' + productId);
    dispatch({type: CART_ADD_ITEM, payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty
    }});
const {cart:{cartItems}} = getState();
Cookie.set("cartItems", JSON.stringify(cartItems));

} catch (error) {
    
}

try {
    const {data} = await  axios.get('/api/product/Bags' + productId);
    dispatch({type: CART_ADD_ITEM, payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty
    }});
const {cart:{cartItems}} = getState();
Cookie.set("cartItems", JSON.stringify(cartItems));

} catch (error) {
    
}

try {
    const {data} = await  axios.get('/api/product/Cosmetics' + productId);
    dispatch({type: CART_ADD_ITEM, payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty
    }});
const {cart:{cartItems}} = getState();
Cookie.set("cartItems", JSON.stringify(cartItems));

} catch (error) {
    
}

try {
    const {data} = await  axios.get('/api/product/Engineerings' + productId);
    dispatch({type: CART_ADD_ITEM, payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty
    }});
const {cart:{cartItems}} = getState();
Cookie.set("cartItems", JSON.stringify(cartItems));

} catch (error) {
    
}

try {
    const {data} = await  axios.get('/api/product/Electronics' + productId);
    dispatch({type: CART_ADD_ITEM, payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty
    }});
const {cart:{cartItems}} = getState();
Cookie.set("cartItems", JSON.stringify(cartItems));

} catch (error) {
    
}




/*



*/
}

const removeFromCart = (productID) => (dispatch, getState) =>{
    dispatch({type: CART_REMOVE_ITEM, payload: productID});

    const {cart:{cartItems}} = getState();
Cookie.set("cartItems", JSON.stringify(cartItems));
}

const saveShipping = (data) => (dispatch) =>{
    dispatch({type: CART_SAVE_SHIPPING, payload: data});
    Cookie.set('shippingAddress', JSON.stringify(data));
} 
const savePayment = (data) => (dispatch) =>{
    dispatch({type: CART_SAVE_PAYMENT, payload: data});
    Cookie.set('paymentMethod', JSON.stringify(data)); 
}
export {addToCarT, removeFromCart, saveShipping, savePayment} 