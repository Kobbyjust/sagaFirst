const { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_REGISTER_REQUEST,
     USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_SIGNOUT, REGISTER_SUCCESS, LOGIN_FAIL, REGISTER_FAIL, AUTH_ERROR, LOAD_USER } = require("../constants/userConstant");

function userSigninReducer(state={}, action){
    switch(action.type){
        case USER_SIGNIN_REQUEST:  
         return{loading: true};
        case USER_SIGNIN_SUCCESS:
            return {loading: false, userInfo: action.payload};  
        case USER_SIGNIN_FAIL:
            return {loading: false, error: action.payload}   
        case USER_SIGNOUT:  
            return {};      
        default: return state;        
    }
} 
const authReducer =(state ={}, action) =>{
    const {type,payload} = action;
    switch(type){
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token)
            return{
                ...state,
                isLoggedIn: false
            }
        case LOAD_USER:
            localStorage.getItem('token', payload.token)
            return{
                ...state,
                isLoggedIn: true
            }  
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case AUTH_ERROR:    
            localStorage.removeItem('token', payload.token)
            return{
                ...state,
                isLoggedIn: false,
                errors: payload
            }  

        default:
            return state;
    }
    } 
function userRegisterReducer(state={}, action){
    switch(action.type){
        case USER_REGISTER_REQUEST:
         return{loading: true}; 
        case USER_REGISTER_SUCCESS:
            return {loading: false, regInfo: action.payload};
        case USER_REGISTER_FAIL:
            return {loading: false, error: action.payload}
        default: return state;        
    }
}

export {userSigninReducer, userRegisterReducer, authReducer}