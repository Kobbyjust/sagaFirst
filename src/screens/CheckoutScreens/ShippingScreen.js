import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
  
import { saveShipping } from '../../actions/cartActions';
import CheckoutSteps from '../../components/CheckoutSteps';


  
    
function ShippingScreen(props) {

       const [address, setAddress] = useState('');   
       const [city, setCity] = useState('');
       const [name, setName] = useState('');
       const [email, setEmail] = useState('');
       const [country, setCountry] = useState('');
      
       const dispatch = useDispatch();
      

        
       const submitHandler = () =>{
           dispatch(saveShipping({address, city, name, country,email}));
           props.history.push('/payment')
       }

    return<div>
       
       
    <div class="account-page">
    <div class="container1">
        <div class="row">
            <div class="col-2">
            <img src="img/exclusive.png" width="100%"></img>
            </div>
            <div>
        <CheckoutSteps step1 step2></CheckoutSteps>
            <div class="col-2">
                <div class="form-container">
                    <div class="form-btn_1">
                        
                        <span>Shipping</span>
                     
                    </div>
                 
                      

                    <form id="RegForm" onSubmit={submitHandler}>
                    <input type="text" placeholder="Name"  onChange={(e) => setName(e.target.value)}></input>
                    <input type="text" placeholder="Email"  onChange={(e) => setEmail(e.target.value)}></input>
                    <input type="text" placeholder="City"  onChange={(e) => setCity(e.target.value)}></input>
                    <input type="text" placeholder="Address"  onChange={(e) => setAddress(e.target.value)}></input>
                    <input type="text" placeholder="Country"  onChange={(e) => setCountry(e.target.value)}></input>
                        
                      
                        
                        <button type="submit" class="btn_1">Continue</button>
                       
                    </form>
                </div>
            </div>

        </div>
    </div>
</div>
</div>
</div>
          
}
export default ShippingScreen;

