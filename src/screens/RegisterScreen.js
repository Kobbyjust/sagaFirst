import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {Red} from 'react-router-dom';
import { register } from '../actions/userActions';
import {connect} from 'react-redux';


   
function RegisterScreen(props) {

    //if (isLoggedIn) return <Redirect to="/" />
       const [name, setName] = useState('');
       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');
       const [repassword, setRePassword] = useState('');
       const userRegister = useSelector(state => state.userRegister);
       const {loading, regInfo, error, isLoggedIn} = userRegister;  
       const dispatch = useDispatch();
       const redirect = props.location.search?props.location.search.split("=")[1]:'/';

       useEffect(() => {
        if (regInfo){ 
            props.history.push(redirect);  
        }

        if (isLoggedIn) return <Redirect to="/signin" />
        return () =>{  
            //
        };
 
       }, [regInfo]);

       const submitHandler = (e) =>{
           e.preventDefault();
           dispatch(register( email, password, name));
           props.history.push('signin')
       }

    return<div>
    <div class="account-page">
    <div class="container1">  
        <div class="row">
            <div class="col-2">
            <img src="img/exclusive.png" width="100%"></img>
            </div>
            <div class="col-2">
                <div class="form-container">
                    <div class="form-btn_1">
                        <span>Register</span>
                    </div>
                 
                        {loading && <div>loading...</div>}
                         {error && <div>{error}</div>}

                    <form id="RegForm" onSubmit={submitHandler}>
                        <input type="text" placeholder="Username"  onChange={(e) => setName(e.target.value)}></input>
                        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
                        <input type="password" placeholder="repassword" onChange={(e) => setRePassword(e.target.value)}></input>
                        <ul>
                            <li>
                                Already have an account? <Link to={redirect === "/" ? "signin": "signin?redirect=" + redirect}>Signin</Link>
                            </li>
                        </ul>
                        <button type="submit" class="btn_1">Register</button>
                       
                    </form>
                </div>
            </div>

        </div>
    </div>
</div>
</div>
          
}

const mapStateToProps =  state => (
    {
        isLoggedIn: state.isLoggedIn
    }
)
export default  connect(mapStateToProps,) (RegisterScreen);