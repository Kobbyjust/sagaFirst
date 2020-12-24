import React, {  useState } from 'react';
import {useDispatch, } from 'react-redux';

import { savePayment } from '../../actions/cartActions';
import CheckoutSteps from '../../components/CheckoutSteps';
  
   
function PaymentScreen(props) {

       const [paymentMethod, setPaymentMethod] = useState('Paypal');
       
      
      
       const dispatch = useDispatch();
      

      
       const submitHandler = (e) =>{
           e.preventDefault();
           dispatch(savePayment(paymentMethod));
           props.history.push('/placeorder'); 
       }

    return<div>
       
       
    <div className="account-page">
    <div className="container1">
        <div className="row">
            <div className="col-2">
            <img src="img/exclusive.png" width="100%"></img>
            </div>
            <div>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <div className="col-2">
                <div className="form-container">  
                    <div className="form-btn_1">
                        
                        <span>Payment</span>
                     
                    </div>

                    <form id="RegForm" onSubmit={submitHandler}>
                      <div className="payment">
                        <input type="radio" id="paypal" value="On Delivery" name="paymentMethod"
                            required  onChange={(e)=> setPaymentMethod(e.target.value)}>
                        </input>
                        <h3  htmlFor="paypal">On Delivery</h3>
                       </div>
                       <div className="payment">
                        <input type="radio" id="strike" value="Mobile Money" name="paymentMethod"
                            required  onChange={(e)=> setPaymentMethod(e.target.value)}>
                        </input>
                        <h3 htmlFor="strike">Strike</h3>
                       </div> 
                      
                        <button type="submit" className="btn_1">Continue</button>
                       
                    </form>
                </div>
            </div>

        </div>
    </div>
</div>
</div>
</div>
          
}
export default PaymentScreen;