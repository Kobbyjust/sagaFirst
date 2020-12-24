import React, { useEffect} from 'react';

import { Link } from 'react-router-dom';



 
function AdminScreen(props){
  /*  const userSignin = useSelector(state => state.userSignin);
    const {} = userSignin;

    useEffect(() => {
       
        
        
        console.log('Hello world')
    }, [])*/
  
    return  <div>
        <br />
        <h2>SagaMarT Admin Page</h2>
        <div className="adminControls">
        <h3>Controls</h3>
        <ul>
            <li><button className="createBtn" ><Link to="/">Go To Home</Link></button></li> 
             <li><button className="createBtn" ><Link to="/product">Add Book To Store</Link></button></li> 
             <li><button className="createBtn" ><Link to="/addProvisions">Add Provision To Store</Link></button></li> 
             <li><button className="createBtn" ><Link to="/addPhones">Add Phone To Store</Link></button></li> 
             <li><button className="createBtn" ><Link to="/addLaptops">Add Laptop To Store</Link></button></li> 
             <li><button className="createBtn" ><Link to="/addComputerAccessories">Add Computer Accessories To Store</Link></button></li> 
             <li><button className="createBtn" ><Link to="/addFootwears">Add Footwears To Store</Link></button></li> 
             <li><button className="createBtn" ><Link to="/addFemaleCloths">Add Female Cloth To Store</Link></button></li> 
             <li><button className="createBtn" ><Link to="/addBags">Add Bags To Store</Link></button></li> 
             <li><button className="createBtn" ><Link to="/addCosmetics">Add Cosmetics To Store</Link></button></li> 
             <li><button className="createBtn" ><Link to="/addEngineering">Add Engineering To Store</Link></button></li> 
             <li><button className="createBtn" ><Link to="/addMaleCloths">Add Male Cloth To Store</Link></button></li> 
             <li><button className="createBtn" ><Link to="/addElectronics">Add Electronics To Store</Link></button></li> 
             <li><button className="createBtn" > <Link to="/order">Check Orders</Link></button></li> 
             <li><button className="createBtn" >Manage Users</button></li> 
        </ul> 
        </div>    
    </div>    

}

export default AdminScreen;