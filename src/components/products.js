import React, { useState } from 'react';
import {Link} from 'react-router-dom';


const Product = ({products}) =>{
   // setProduct({productID});

   //const [links, setLink] = useState([]);

    return(  
        <div class="small-container_1">
        <div class="row">
  {
    products.map(product => 
            <div class="col-3-stores">
                
                <Link to={`/Details/${product._id}`}><img src={product.image} alt=""></img></Link> 
      <h4>{product.name}</h4>
                <h3>{product.price}</h3>
            </div>
                 )
  } 
   </div>
    </div>
    )  
}

export default Product;