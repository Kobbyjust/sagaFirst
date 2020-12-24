import Axios from "axios";

const { PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } = require("../../constants/constants");


export const detailsProductPhone = (productId) => async (dispatch) =>{
    try { 
        dispatch({type: PRODUCT_DETAILS_REQUEST, payload: productId});
        const {data} = await Axios.get(`/api/product/Phones${productId}`);  
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data});    
    } catch (error) { 
        dispatch({type: PRODUCT_DETAILS_FAIL,  
        payload: error.message});
    } 
}