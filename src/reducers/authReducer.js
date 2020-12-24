const initialState ={
    token: localStorage.getItem('token'),
    isAllowedTologin: false,
    errors: {}
}

const authReducer =(state ={}, action) =>{
const {type,payload} = action;
switch(type){
    default:
        return state;
}
}

export default authReducer;