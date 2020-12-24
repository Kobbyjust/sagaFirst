import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, withRouter} from 'react-router-dom'
import {  signin } from '../actions/userActions';


 
   
function SigninScreen(props) {

       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');
       const userSignin = useSelector(state => state.userSignin);
       const {loading, userInfo,regInfo, error} = userSignin;
       const dispatch = useDispatch();
       const redirect = props.location.search ? props.location.search.split("=")[1]:'/';

       useEffect((isAdmin) => {
        if (regInfo){
            if(isAdmin){
                console.log('is Admin')
            }
            return props.history.push("admin");
           //return <Redirect to="/" />
        }
       
        return () =>{
            //
        };

       }, [userInfo]);

       const submitHandler = (e) =>{
           e.preventDefault();
           dispatch(signin(email, password));
           console.log('Successful')
           if(userInfo){
            return props.history.push('admin')
            
        } 
       }

    return<div>
    <div className="account-page">
    <div className="container1">
        <div className="row">
            <div className="col-2">
            <img src="img/exclusive.png" width="100%"></img>
            </div>
            <div className="col-2">
                <div className="form-container">
                    <div className="form-btn_1">
                        <span>Login</span>
                    </div>
                        {loading && <div>loading...</div>}
                         {error && <div>{error}</div>}
                   
                    <form id="RegForm" onSubmit={submitHandler}>
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required></input>
                    <input type="password" placeholder="password"  onChange={(e) => setPassword(e.target.value) } required ></input>
                    <button type="submit" className="btn_1">Signin</button>
                    <a href="">Forget password</a>
                    <ul>
                        <h3><Link to={redirect === "/" ? "register": "register?redirect=" + redirect}>Register</Link></h3>
                    </ul>
                    </form>
                </div>
            </div>
 
        </div>
    </div>
</div>
</div>         
}
export default withRouter (SigninScreen);