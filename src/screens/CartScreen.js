import React, { useEffect } from 'react';
import { addToCarT, removeFromCart } from '../actions/cartActions';
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
    
function CartScreen(props) {

    const cart = useSelector((state) => state.cart);

    const {cartItems} = cart;

    const productId  = props.match.params.id;
    const  qty = props.location.search? Number(props.location.search.split("=")[1]):1;
    const dispatch = useDispatch();
    const removeFromCartHandler = (productID) => {
        dispatch(removeFromCart(productID));
    } 
    useEffect(() =>{  
        if(productId){
            dispatch(addToCarT(productId,  qty));
        }
    }, [dispatch, productId,qty]) ;

    const checkoutHandler = () => {
        if(cartItems != 0)
     // props.history.push("/Signin?redirect=shipping"); 
      props.history.push("/shipping");   
    }


    return <div className="small-container cart-page">
      <table>
        <tr className=" ">
           
                <th>
                    Shoping Cart
                </th>
                <th>
                   Quantity
                </th> 
               
                
          </tr>
            {
                cartItems.length ===0 ?
                <div>
                   <h2>Cart is empty so cannot proceed to checkout</h2> 
                </div>
                :
                cartItems.map( item =>
                    <tr className="item2">
                        <td>
                   <div  className="cart-info">
                        
                        <img src={item.image} width="" alt="product" />
                       
                      
                            <div>
                               <div className="CartName"> <Link to={"/Books/"+item.product}> { item.name}</Link></div>
                              <br></br>
                               {item.price}
                               <br></br>
                            <Link type="button" onClick={() =>removeFromCartHandler(item.product)}>Delete</Link>
                            </div>
                    </div>
                    </td>
                    <td> 
                                <select value={item.qty} onChange={(e) => dispatch(addToCarT(item.product, e.target.value))}>
                                    {[...Array(item.countInStock).keys()].map(x => 
                                    <option type="number" key={x+1} value={x+0}>{x+0}</option>)
                                    }
                                </select>
                    </td>
                   
                    </tr> 
                 )              
            }
       <div className="total">
            <table>
                <tr>
                    <td>Subtotal</td>
                    <td> ({cartItems.reduce((a, c) => a + c.qty, 1 )} )
                :
               $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</td>
                </tr>
               
            </table>
        </div>
        <tr > 
           <div className="cart-action"> <a href="" class="btn" onClick={checkoutHandler}  disabled={cartItems.length===0}>Proceed to Checkout</a></div>
        </tr>
        </table>  
    </div>
    
 }

export default CartScreen;