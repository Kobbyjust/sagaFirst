import Axios from 'axios';
import Cookie, { set } from 'js-cookie';
import {setToken} from '../setToken';
import dotenv from 'dotenv';
import { AUTH_ERROR, LOAD_USER, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS,
     USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from '../constants/userConstant';


 dotenv.config();

const signin = (email, password ) => (dispatch, getState) => {
    dispatch({type: USER_SIGNIN_REQUEST, payload:{email, password}});

    try {
        const {data} =  Axios.post('/api/users/signin', {email, password});
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
      //  localStorage.setItem('userInfo', JSON.stringify(data))
        if(localStorage.getItem('token')){
            setToken(localStorage.getItem('token'));
        } 
        const {userSignin:{userInfo}} = getState();
        Cookie.set('userInfo', JSON.stringify(userInfo)); 
    } catch (error) {
        dispatch({type: USER_SIGNIN_FAIL, payload:error.message});
    }   
}
 
export const loadUser = (email, password) => async dispatch =>{
    if(localStorage.getItem('token')){ 
        setToken(localStorage.getItem('token'));
    } 
    try {  
       const response = await Axios.get('/api/users/', {email, password});
       dispatch({
           type: LOAD_USER,
           payload: response.data
       })

    } catch (error) {
        dispatch({type: AUTH_ERROR, payload: error})
    }
}

  export const registerUser = ( email, password) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

      //  const body = JSON.stringify({email,password});

      const response =   await Axios.post('http://localhost:9000/api/users/register',{ email, password}, config);
      dispatch({
          type: REGISTER_SUCCESS,
          payload: response,
          
      });

      dispatch(loadUser());

    } catch (error) {
        dispatch({type: REGISTER_FAIL, payload: error})
    
    }
}
export const loginUser = ( email, password) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({email, password});

      const response =   await Axios.post('/api/users/login', body, config);
      dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data
      });

      dispatch(loadUser());

    } catch (error) {
        dispatch({type: LOGIN_FAIL, payload: error})
    
    }
}









const signout = () => (dispatch) =>{
    Cookie.remove('userInfo');
    Cookie.remove('cartItems'); 
    Cookie.remove('regInfo'); 
    dispatch({type: USER_SIGNOUT})
}

const register = (email, password, name) => (dispatch) => {
    dispatch({type: USER_REGISTER_REQUEST, payload:{ email, password, name}});
  
    try {
        const {data} =  Axios.post('/api/users/register', { email, password, name});
        dispatch({type: USER_REGISTER_SUCCESS, payload: data});   
        localStorage.setItem('userInfo', JSON.stringify(data));
        dispatch(loadUser());
    } catch (error) {
        dispatch({type: USER_REGISTER_FAIL, payload:error.message});
    }

    
} 

export {signin, register, signout, }; 