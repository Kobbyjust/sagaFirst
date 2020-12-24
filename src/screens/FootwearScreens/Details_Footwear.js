import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProductFootwear } from '../../actions/FootwearActions/footwearActions';

import Detail from '../../components/details';


function Details(props){  
    const [qty, setQty] = useState(1);
     const productId = props.match.params.id;
    const details = useSelector(state => state.details);
    const {product, loading, error} = details;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProductFootwear(props.match.params.id));
        return () => {
            //    
        };
    }, [dispatch, productId]);  

    const handleAddToCart = () =>{
        props.history.push(`/Cart/${productId}?qty={ qty}`)
    }
    
    return (<div>
    <div > 
        <div>
        <Link to={''}><h3 class="Back"> Back to previous page</h3></Link>
        </div>
        <div class="small-container single-product">
        
        {loading? <div>Loading...</div>:
        error? <div>{error}</div>:
        (<Detail product={product}  
          setQty={setQty} 
          qty={qty} 
          dispatch={dispatch} 
          handleAddToCart={handleAddToCart}
          />)
       }
       
      
       
    
</div>
    </div>   
<div class="small-container">
    <div class="row row-2">
        <h2>Related Products</h2>
        <p>View mode</p>
    </div>
</div>
<div class="row2">
            <div class="col-4">
                <img src="/img/product-6.jpg" alt=""></img>
                <h4>Red Printed T-Shirt</h4>
                <div class="rating">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                </div>
                <p>$50</p>
            </div>
              <div class="col-4">
                  <img src="/img/product-6.jpg" alt=""></img>
                  <h4>Red Printed T-Shirt</h4>
                  <div class="rating">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half-o" aria-hidden="true"></i>
                  </div>
                  <p>$50</p>
              </div>
              <div class="col-4">
                  <img src="/img/product-6.jpg" alt=""></img>
                  <h4>Red Printed T-Shirt</h4>
                  <div class="rating">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half-o" aria-hidden="true"></i>
                  </div>
                  <p>$50</p>
              </div>
        
            <div class="col-4">
                <img src="/img/product-6.jpg" alt=""></img>
                <h4>Red Printed T-Shirt</h4>
                <div class="rating">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                </div>
                <p>$2000</p>
            </div>
            </div>
</div>
    );
}

export default Details;