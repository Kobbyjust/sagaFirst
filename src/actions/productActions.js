import Axios from "axios";
import axios from "axios"; 
import  {PRODUCT_DELETE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS} from "../constants/constants"
import  {PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS} from "../constants/constants"



const listProducts = () => async (dispatch ) => {
    try {
        dispatch(PRODUCT_LIST_REQUEST);
        const  {shop_Books} = await axios.get('/api/product/Books'); 
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: shop_Books});
        

    } catch (error) {
        
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});

    }
 
}  

const saveProduct = (name, price, type, image, description, countInStock) => async (dispatch, getState) =>{

    //original
    try {
        dispatch({type: PRODUCT_SAVE_REQUEST, payload:{name, price, type, image, description, countInStock}});
        const{data} = await Axios.post('/api/product/products', {name, price, type, image, description, countInStock},
        ); 
        dispatch({type:PRODUCT_SAVE_SUCCESS, payload:data});
    } catch (error) {
        
        dispatch({type:PRODUCT_SAVE_FAIL, payload:error.message});  
    }




  /* try {
        dispatch({type: PRODUCT_SAVE_REQUEST, payload:{name, price, type, image, description, countInStock}});
        const {UserSingnin: {userInfo}} = getState();

        if(!name){  
            
        const{data} = await Axios.post('/api/product/products', {name, price, type, image, description, countInStock},
         {headers:{
            'Authorization': 'Bearer' + userInfo.token
        }
    }
    ); 
        dispatch({type:PRODUCT_SAVE_SUCCESS, payload:data});
        }  
       else{
            
      const{data} = await Axios.put('/api/product/products' + name,{name, price, type, image, description, countInStock}, 
        {headers:{
            'Authorization': 'Bearer' + userInfo.token
        }}
       );
       dispatch({type:PRODUCT_SAVE_SUCCESS, payload:data});
     }
       
    } catch (error) {
        
       dispatch({type:PRODUCT_SAVE_FAIL, payload:error.message});  
   }*/
}

const detailsProduct = (productId) => async (dispatch) =>{
    try { 
        dispatch({type: PRODUCT_DETAILS_REQUEST, payload: productId});
        const {data} = await axios.get(`/api/product/Books${productId}`);  
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data});    
    } catch (error) { 
        dispatch({type: PRODUCT_DETAILS_FAIL,  
        payload: error.message});
    } 
}


const deleteProduct = (productID) => async (dispatch, getState) =>{ 
    try {
        const {UserSingnin: {userInfo}} = getState();
        dispatch({type: PRODUCT_DELETE_REQUEST, payload: productID});
        const {data} = await axios.get('/api/product/'+ productID, {
            headers:{
                Authorization: 'Bearer' + userInfo.token
            } 
        });  
        dispatch({type: PRODUCT_DELETE_SUCCESS, payload: data, success: true});    
    } catch (error) {
        dispatch({type: PRODUCT_DELETE_FAIL,  payload: error.message});
    }
}


export { listProducts, detailsProduct,  saveProduct, deleteProduct  }