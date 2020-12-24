import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Axios from 'axios';
import Shop from '../../components/shop';
import Next from '../../components/next';

  

function StoreScreen(props){

  const [products, setProduct] = useState([]);
  useEffect (() => {
    const fetchData = async () => {
        const {data} = await  Axios.get('/api/product/ComputerAccessories'); 
        setProduct(data);
    } 
    fetchData()
    return() =>{
            //
        };
    }, []) 
 
    return  <div>
       <Link to={'/'}><h3 class="Back"> Back to previous page</h3></Link>
        <br></br>
        <Shop />
        <div class="small-container_1">
        <div class="row">
  {
    products.map(product => 
            <div class="col-3-stores">
                <Link to={`/DetailscomputerAccessories/${product._id}`}><img src={product.image} alt=""></img></Link> 
      <h4>{product.name}</h4>
                <h3>{product.price}</h3>
            </div>
                 )
  }
   </div>
    </div>
         <Next /> 
    </div>    

}

export default StoreScreen;