import React  from 'react';

import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { createOrder } from '../../actions/orderActions';
import CheckoutSteps from '../../components/CheckoutSteps';



  
function PlaceOrderScreen(props) {

 
 const cart = useSelector((state) => state.cart);
 const country = cart.shippingAddress.country;
 const address = cart.shippingAddress.address;
 const city = cart.shippingAddress.city;
 const name = cart.shippingAddress.name;
 const email = cart.shippingAddress.email;
 const payment = cart.paymentMethod

 const itemName = cart.cartItems.name;
 const itemQty =  cart.cartItems.qty;
 const itemPrice = cart.totalPrice;



  if(!cart.paymentMethod){
   props.history.push('/payment');
 }  

 const orderCreate = useSelector((state) => state.orderCreate);
 const {} = orderCreate;

 const toPrice = (num)  => Number(num.toFixed(2));
 cart.itemsPrice = toPrice(cart.cartItems.reduce((a,c) => a + c.qty * c.price, 0));
 cart.shippingPrice = cart.itemsPrice > 100? toPrice(0): toPrice(10);
 cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
 cart.totalPrice =  cart.itemsPrice + cart  .shippingPrice + cart.taxPrice;

 const dispatch = useDispatch();
/*const placeOrderHandler = () =>{
   dispatch(createOrder({...cart, orderItems: cart.cartItems   }))
 }*/

 
 const placeOrderHandler = () =>{
  
  dispatch(createOrder(name,
    address,
    email,
    city,
    payment,
    country,
   
    itemPrice,
     itemName,
      itemQty,
    ));
}
  /*
 useEffect(() =>{ 
  if(success){
    props.history.push(`/order/${order._id}`);
    dispatch({type: ORDER_CREATE_RESET});
  }
 },[dispatch, order, props.history ,success]); 
 */

  return <div>
    <CheckoutSteps step1 step2 step3 step4 ></CheckoutSteps>
     <div className="placeWhole">
   
       <ul> 
      
         <li>
         <div className="flex">
           <div>
             <h2>
              Your Order
             </h2>
             <br></br>
             <br></br>
             <div className="customerInfo">
             <h2> 
             Personal Details
             </h2>
             <br />
             <p>
               <strong>Name:</strong>{cart.shippingAddress.name }<br />
               <strong>Email:</strong>{cart.shippingAddress.email }<br />
               <strong>Address:</strong>{cart.shippingAddress.address}<br />
               <strong>City:</strong>{cart.shippingAddress.city}<br />
               <strong>Country:</strong>{cart.shippingAddress.country}
             </p>
             <br />
             </div>
           </div>
           </div> 
         </li> 
         <br></br>
        

         <li>
         <div className="flex">
         <div className="customerPay">
             <h2> 
             Payment
             </h2>
             <br />
             <p>
               <strong>Method:</strong>{cart.paymentMethod } 
             
             </p>
             <br />
           </div>
           </div>
           <br></br>
        
         </li>
         <li>
         <div >
         <div className="customerItems">
             <h2>
               Order Items
             </h2>
             <br />
             <ul>
            
             {cart.cartItems.map((item) =>(
             <li>
           
           <h3>Product Name: { item.name}</h3> <br />
            {item.qty} <br />
            <img src={item.image} width="60px" alt="product" />
            <div>{item.qty} x ${item.Price} = ${item.qty * item.price}
            </div>
            
          </li>
          ))}
          
          </ul>
          <br />
          </div>
           </div>
          <br></br>
          <br></br>
          
           <div className="orderSummary">
             <ul>
               <li>
                 <h2>
                   Order Summary
                 </h2>
                 <br />
                 </li>
                 <li>
                 <div>
                 <h3> Items:
                   ${cart.itemsPrice} 
                 </h3>
                  
                 </div>
             
               </li>

               <li>
                 <div>
                  <h3>Shipping:
                    ${cart.shippingPrice}
                  </h3>
                 </div>
            
               </li>

               <li>
                 <div>
                  <h3>Tax:
                    ${cart.taxPrice}
                  </h3>
                 </div>
               </li>

               <li>
                 <div>
                 <h3>Total Price:
                   ${cart.totalPrice}</h3> 
                 </div>
               
               </li>

               <li>
                 <button className="Placebtn"
                  onClick={placeOrderHandler}
                  disabled ={cart.cartItems.length === 0}
                  
                 > Place Order</button>
               </li>
             </ul>
           </div>
         </li>
       </ul>
    </div>
    <br></br>
    <br></br>
    <br></br>
    </div>

}

export default PlaceOrderScreen;