import React, { useEffect, useState } from 'react';

import campusShop from '../../campusShop';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, listProducts, saveProduct } from '../../actions/productActions';
import Axios from 'axios';
  
  
function ProductsScreen(props) {
   const [modalVisible, setModalVisible] = useState(false);
   
   const [products, setProduct] = useState([]);
    useEffect (() => {
        const fetchData = async () => {
            const {data} = await  Axios.get('/api/orders/order'); 
            setProduct(data); 
        }
        fetchData()
        return() =>{   
                // 
            };
        }, [])

    const dispatch = useDispatch();

        const getOrderHandler = () =>{
            props.history.push(`/placeorder/${products._id}`)
        }

        const deleteOrderHandler = () => {
            dispatch(deleteOrderHandler());
        } 
         

    return<div>  
        <div className="content content-margined">   
            <div className="product-header">
                <br />
                <h3>
                    Orders
                </h3>
                
            </div> 
            <div className="Order-list">
               
            </div>

            {modalVisible && (

            <div class="form-page"> 
    <div class="container1">
        <div class="row">
            <div class="col-2">
            <img src="/img/exclusive.png" width="100%"></img>
            </div>
           

        </div>
    </div> 
</div>
            )}
                <div className="Order-list">
                    
                    <table>
                        <thead>
                            <tr>
       
                                <th>Name</th>
                                <th>Address</th>
                                <th>Price</th>
                                <th>Items</th>
                                <th>Payment Method</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
    products.map(product => 
                            <tr className="ordertable">
                                
                                <td>{product.name} </td>

                                <td>{product.address}</td>
                                <td>GHS {product.itemPrice}</td>
                                <td> {product.itemName}</td>
                                <td>{product.payment}</td>  
                                <td className="orderbut">
                                    <button className="btn_1" onClick={getOrderHandler}>Details</button>
                                    
                                    <button className="btn_1" onClick={deleteOrderHandler}>Delete</button>
                                </td>
                                
                               
                            </tr> 
                             )
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
     

          
}
export default ProductsScreen;