const { default: Axios } = require("axios");
const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL } = require("../../constants/constants");

export const listEngineerings = () => async (dispatch ) => {
    try {
        dispatch(PRODUCT_LIST_REQUEST);
        const  {shop_Books} = await Axios.get('/api/product/Engineerings'); 
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: shop_Books});
        

    } catch (error) {
        
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});

    }
 
}  

export const saveEngineerings = (name, price, type, image, description, countInStock) => async (dispatch, getState) =>{

    //original
    try {
        dispatch({type: PRODUCT_SAVE_REQUEST, payload:{name, price, type, image, description, countInStock}});
        const{data} = await Axios.post('/api/product/Engineerings', {name, price, type, image, description, countInStock},
        ); 
        dispatch({type:PRODUCT_SAVE_SUCCESS, payload:data});
    } catch (error) {
        
        dispatch({type:PRODUCT_SAVE_FAIL, payload:error.message});  
    }
}

export const deleteEngineerings = (productID) => async (dispatch, getState) =>{ 
    try {
        const {UserSingnin: {userInfo}} = getState();
        dispatch({type: PRODUCT_DELETE_REQUEST, payload: productID});
        const {data} = await Axios.get('/api/product/Engineerings'+ productID, {
            headers:{
                Authorization: 'Bearer' + userInfo.token
            } 
        });  
        dispatch({type: PRODUCT_DELETE_SUCCESS, payload: data, success: true});    
    } catch (error) {
        dispatch({type: PRODUCT_DELETE_FAIL,  payload: error.message});
    }
}
