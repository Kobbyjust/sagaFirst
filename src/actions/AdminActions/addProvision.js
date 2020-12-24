const { default: Axios } = require("axios");
const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL } = require("../../constants/constants");

export const listProvisions = () => async (dispatch ) => {
    try {
        dispatch(PRODUCT_LIST_REQUEST);
        const  {shop_Books} = await Axios.get('/api/product/Provisions'); 
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: shop_Books});
        

    } catch (error) {
        
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});

    }
 
}  

export const saveProvisions = (name, price, type, image, description,brand, countInStock) => async (dispatch, getState) =>{

    //original
    try {
        dispatch({type: PRODUCT_SAVE_REQUEST, payload:{name, price, type, image, description,brand, countInStock}});
        const{data} = await Axios.post('/api/product/Provisions', {name, price, 
            type, 
            image, 
            description, 
            brand, 
            countInStock},
        ); 
        dispatch({type:PRODUCT_SAVE_SUCCESS, payload:data});
    } catch (error) {
        
        dispatch({type:PRODUCT_SAVE_FAIL, payload:error.message});  
    }
}

export const deleteProvisions = (productID) => async (dispatch, getState) =>{ 
    try {
        const {UserSingnin: {userInfo}} = getState();
        dispatch({type: PRODUCT_DELETE_REQUEST, payload: productID});
        const {data} = await Axios.get('/api/product/Provisions'+ productID, {
            headers:{
                Authorization: 'Bearer' + userInfo.token
            } 
        });  
        dispatch({type: PRODUCT_DELETE_SUCCESS, payload: data, success: true});    
    } catch (error) {
        dispatch({type: PRODUCT_DELETE_FAIL,  payload: error.message});
    }
}
