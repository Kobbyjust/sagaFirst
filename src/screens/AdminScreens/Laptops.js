import React, { useEffect, useState } from 'react';

//import campusShop from '../campusShop';
//import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//import { deleteProvisions, listProvisions, saveProvisions } from '../actions/productActions';
import Axios from 'axios';
import { deleteLaptops, listLaptops, saveLaptops } from '../../actions/AdminActions/addLaptop';


  
   
function ProvisionsScreen(props) {

    const [products, setProduct] = useState([]);
    useEffect (() => {
        const fetchData = async () => {
            const {data} = await  Axios.get('/api/product/Laptops'); 
            setProduct(data); 
        }
        fetchData()
        return() =>{   
                // 
            };
        }, [])



    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(''); 
    const [type, setType] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [description, setDescription] = useState('');

    const productList = useSelector(state => state.productList);
    

    const productSave = useSelector(state => state.productSave);
    const {loading: loadingSave, success: successSave, error: errorSave} = productSave;

    const productDelete = useSelector(state => state.productDelete);
    const {loading: loadingDelete, success: successDelete, error: errorDelete} = productDelete;
    const dispatch = useDispatch();

       useEffect(() => {
        if (successSave) {
            setModalVisible(false);
          }
        dispatch(listLaptops());
        return () =>{
            //
        }; 
 
       }, [successSave, successDelete]);

       const openModal = (product) => {
        setModalVisible(true);
       
        setName(product.name);
        setPrice(product.price);
        setDescription(product.description);
        setImage(product.image);
        setCountInStock(product.countInStock);
      };

       const submitHandler = (e) =>{
           e.preventDefault();
           dispatch(saveLaptops(name, price, type, image, description, countInStock));

       }
       const deleteHandler = (product) => {
        dispatch(deleteLaptops(product.name));
      };

    return<div className="small-container_1">
        <div className="content content-margined">
            <div className="product-header">
                <h3>
                    Products
                </h3>
                <button className="createBtn" onClick={() => openModal({})}>Create Product</button>
            </div> 
            <div className="product-list">
               
            </div>

            {modalVisible && (

            <div class="form-page"> 
    <div class="container1">
        <div class="row">
            <div class="col-2">
            <img src="/img/exclusive.png" width="100%"></img>
            </div>
            <div class="col-2">
                <div class="form-shs-container">
                    <div class="form-btn_1">
                      
                        <span >Create Product</span>    
                    </div>

                    {loadingSave && <div>loading...</div>}
                         {errorSave && <div>{errorSave}</div>}

                    <form id="GuideForm" >  
                        
                        <button type="submit" class="btn_1">Proceed to form</button>
                    </form>
                    <form id="OrderForm" onSubmit={submitHandler}>
                        <input name="name" type="text" class="FormStyle" placeholder="Your Name" value={name} required onChange={(e) => setName(e.target.value)}></input>
                        <br></br>
                        <input name="price" type="text" class="FormStyle" placeholder="Price" value={price} required onChange={(e) => setPrice(e.target.value)}></input>
                        <br></br>
                        <input name="image" type="text" class="FormStyle" placeholder="Image" value={image} required onChange={(e) => setImage(e.target.value)}></input>
                        <br></br>
                        <input name="count" type="text" class="FormStyle" value={countInStock} placeholder="Count In stock" required onChange={(e) => setCountInStock(e.target.value)}></input>
                        <br></br>
                        <input name="type" type="text" class="FormStyle" placeholder="Type" value={type} required onChange={(e) => setType(e.target.value)}></input>
                        <br></br> 
                        <textarea name="description"  cols="49" rows="7" class="FormStyle"   placeholder="Product Description"  required  onChange={(e) => setDescription(e.target.value)}></textarea>
                        <br></br>
                        
                        
                        <button type="submit" class="btn_1">{name ? 'Update' : 'Create'}</button>  
                        <br></br>     
                        <button type="submit" class="btn_1"  onClick={() => setModalVisible(false)}>Back</button>       
                    </form>
                </div>
            </div>

        </div>
    </div>
</div>
            )}
                <div className="product-list">
                    
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Type</th>
                               
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
    products.map(product =>
                            <tr>
                                <td>{product._id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                               
                                <td>{product.type}</td>
                                
                               
                                <td>
                                    <button className="addBtn" onClick={() => openModal()}>Edit</button>
                                    <button className="delBtn" onClick={() => deleteHandler()}>Delete</button>

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
export default ProvisionsScreen;