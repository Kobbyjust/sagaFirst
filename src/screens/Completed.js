import React from 'react';

import {Link} from 'react-router-dom';



function CompletedScreen(props) {
   
   
         

    return<div>
        <h1>Thanks for shopping with Us</h1>
        <br></br>
        <button className="Placebtn">
        <Link to={"/"}> Continue Shopping</Link>
        </button>
        </div>
   

          
}
export default CompletedScreen;