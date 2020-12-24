import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (<>
        <div className="top">
        <a href="#top">Back To Top</a> 
         </div>
     
<div className="footer">
 <div >
     <div className="row1"> 
         <div className="clas">      
         <h3>Useful Links</h3>
         <ul>
             <li><Link to="">Facebook</Link></li>
             <li><Link to="">WhatsApp</Link></li>
             <li><Link to="">Email</Link></li>
         </ul>
     </div> 
     </div>
     <h3>Thanks for shoping from Us.</h3>
 </div>
</div>  
    </>
    )
}

export default Footer
