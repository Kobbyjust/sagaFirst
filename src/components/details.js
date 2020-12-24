import React from 'react'

const Detail = ({product, setQty, qty, dispatch, handleAddToCart}) =>{



    
return(<>
<div class="row"> 
        <div class="col-2">
            <img src={product.image} width="100%" id="productImg"></img>

        </div>
        
        <div class="col-2">
          <div className="info">  
            <p>{product.type}</p>  
            <h1>{product.name}</h1>
            <h4>Price: GHS {product.price}</h4>
          </div>
         
          {product.countInStock>0?
            <a href="" class="btn" onClick={handleAddToCart}>Add to Cart</a>
            :
            <div>Out of Stock.</div>
           }
         
          
        </div>
       
      
    </div>
    <div>
        <h3>Product details  <i class="fa fa-indent"></i></h3>

<h5>{product.description}</h5>
<h5>{product.brand}</h5>
        </div>
    </>
)
}

export default Detail;