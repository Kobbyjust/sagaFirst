import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../../actions/productActions';
import Detail from '../../components/details'; 

  
function Details(props){  
    const [qty, setQty] = useState(1);
    const productId = props.match.params.id;
    const details = useSelector((state) => state.details);
    const {product, loading, error} = details;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(productId));
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
        <div class="small-container_1 single-product">
        {loading? <div>Loading...</div>:
        error? <div>{error}</div>:
        (
          <Detail product={product}  
          setQty={setQty}   
          qty={qty} 
          dispatch={dispatch} 
          handleAddToCart={handleAddToCart}
          />
        )
       }
       
        

</div>

    </div>   
   
</div>
    );
}

export default Details;