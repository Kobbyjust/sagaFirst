
import Axios from "axios";
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from "../../constants/constants";

export const detailsProductFootwear = (productId) => async (dispatch) =>{
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST, payload: productId});
        const {data} = await Axios.get(`/api/product/Footwears${productId}`);  
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data});    
    } catch (error) {
        dispatch({type: PRODUCT_DETAILS_FAIL , 
             payload: error.message});
    }
}  

