import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import HomePage from './screens/HomePage';



import Screen_Electronics from './screens/ElectronicScreen/ElectronicScreen';
import Screen_Laptop from './screens/ComputerScreens/Screen_Laptops';
import ComputerAccessories from './screens/ComputerScreens/Accesssories';
import Screen_Footwear from './screens/FootwearScreens/Screen_Footwear';
import Screen_Phone from './screens/PhoneScreen/Screen_Phones';
import Details from './screens/BookScreens/Details';
import Details_Provision from './screens/ProvisionScreens/Details_Provision';
import Details_Phone from './screens/PhoneScreen/Details_Phones';
import Details_Footwear from './screens/FootwearScreens/Details_Footwear';
import Details_Electronic from './screens/ElectronicScreen/DetailsElectronics';
import Details_Laptops from './screens/ComputerScreens/Details_Laptop';
import Details_Accessories from './screens/ComputerScreens/Details_Accessories';


import Screen_Provisions from './screens/ProvisionScreens/Screen_Provisions';
import Screen_Books from './screens/BookScreens/Screen_Books';
import FormScreen from './screens/FormScreen';
import CartScreen from './screens/CartScreen';

import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import { useDispatch } from 'react-redux';
import ShippingScreen from './screens/CheckoutScreens/ShippingScreen';
import PaymentScreen from './screens/CheckoutScreens/PaymentScreen';
import PlaceOrderScreen from './screens/CheckoutScreens/PlaceOrderScreen';
import OrdersScreen from './screens/AdminScreens/OrdersScreen';
import { signout } from './actions/userActions';
import PrivateRoute from './components/privateRoute';
import AdminScreen from './screens/AdminScreens/AdminScreen';
import CompletedScreen from './screens/Completed';
import Header from './components/Header/Header';

import Footer from './components/Footer/Footer';

//


import {loadUser} from './actions/userActions';
import {setToken} from './setToken';
import store from './store';

import Provision from '../src/screens/AdminScreens/Provisions'
import Phone from '../src/screens/AdminScreens/Phone'
import Electronic from '../src/screens/AdminScreens/Electronics'
import Laptop from '../src/screens/AdminScreens/Laptops'
import MaleCloths from '../src/screens/AdminScreens/maleCloths'
import FemaleCloths from '../src/screens/AdminScreens/femaleCloths'
import Computer_Accessories from '../src/screens/AdminScreens/ComputerAccessories'
import Footwears from '../src/screens/AdminScreens/Footwears'
import Bag from '../src/screens/AdminScreens/Bags'
import Cosmetic from '../src/screens/AdminScreens/Cosmetics'
import Engineer from '../src/screens/AdminScreens/Engineering'
import Male_Cloths from '../src/screens/ClothesScreens/MaleCloth'
import Female_Cloths from './screens/ClothesScreens/FemaleCloth'
import Bags from './screens/BagAndWatchersScreen/Screen_Bags'
import Engineering from './screens/EngineerScreen/Screen_Engineering'
import Cosmetics from './screens/CosmeticScreen/Screen_Cosmetics'
import Details_FemaleCloths from '../src/screens/ClothesScreens/Details_Female'
import Details_MaleCloths from '../src/screens/ClothesScreens/Details_Male'
import Details_Engineering from '../src/screens/EngineerScreen/Details_Engineering'
import Details_Cosmetic from '../src/screens/CosmeticScreen/Details_Cosmetics'
import Details_Bag from '../src/screens/BagAndWatchersScreen/Details_Bags'



if(localStorage.getItem('token')){
  setToken(localStorage.getItem('token'));
}

function App() {

/* useEffect(() => {
  store.dispatch(loadUser());
  
 }, [])*/


  //

/* const cart = useSelector(state => state.cart);
 const {} = cart;   


  const userSignin = useSelector(state => state.userSignin);
  const {} = userSignin;*/
 
   /* const openMenu = () =>{
        document.querySelector(".sidebar-stores").classList.add("open");
    }*/
    const dispatch = useDispatch()
    const closeMenu=() => {
      document.querySelector(".sidebar-stores").classList.remove("open")
    }

    const signoutHandler = () =>{
        dispatch(signout())
    }
     
   
    return (
        <BrowserRouter>
        
      
         
        <div id="top">
       
           <aside className="sidebar-stores">
               <button className="close-button" onClick={closeMenu}>x</button>
               <h2>Menu</h2>
            
               <ul>
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/Cart/">My Cart</Link></li>
                 <li><Link to="/signin">Sign in</Link></li>
                 <Link to="#signout" onClick={signoutHandler}>Sign-Out</Link>
                 <li><Link to="/">Form</Link></li>
                 <li><Link to="/">Store</Link></li>
                
                 <li><Link to="/">Home</Link></li>
                
                 <li><Link to="/signin">Sign in</Link></li>
                 <li><Link to="/">Form</Link></li>
                 <li><Link to="/placeorder">place</Link></li>
                 <li><Link to="/product">Product</Link></li>
                 <li> <Link to="/">Contact</Link></li>

                 <li><Link to="/">Store</Link></li>
                 <li><Link to="/product">Product</Link></li>
                 <li> <Link to="/">Contact</Link></li>
         
                    
               </ul>
             </aside>
               <Route path="/" exact={true} component={HomePage} >
               <Header />
               <HomePage />
               </Route>
            
               <Route path="/Phone/" component={Screen_Phone} >
                 <Header />
                 <Screen_Phone />
               </Route>
            
              
               <Route path="/Laptops/" component={Screen_Laptop} />
               <Route path="/computerAccessories" component={ComputerAccessories} />
               <Route path="/Electronic/" component={Screen_Electronics} />
               <Route path="/Footwear/" component={Screen_Footwear} />
               <Route path="/Details/:id" component={Details} />
               
               <Route path="/DetailsProvision/:id" component={Details_Provision} />
               <Route path="/DetailsPhone/:id" component={Details_Phone} />
               <Route path="/DetailsLaptop/:id" component={Details_Laptops} />
               <Route path="/DetailscomputerAccessories/:id" component={Details_Accessories} />
               <Route path="/DetailsFootwear/:id" component={Details_Footwear} />  
               <Route path="/DetailsFemaleCloths/:id" component={Details_FemaleCloths} />  
               <Route path="/DetailsMaleCloths/:id" component={Details_MaleCloths} />  
               <Route path="/DetailsBags/:id" component={Details_Bag} />  
               <Route path="/DetailsCosmetics/:id" component={Details_Cosmetic } />  
               <Route path="/DetailsEngineering/:id" component={Details_Engineering} />  
               <Route path="/DetailsElectronic/:id" component={Details_Electronic} />
             
               <Route path="/Provisions/" component={Screen_Provisions} />
               <Route path="/Books/" component={Screen_Books} >
                 <Header />
                 <Screen_Books />
               </Route>
               <Route path="/Form/" component={FormScreen} />
               <Route path="/Cart/:id?" component={CartScreen} />
               <Route path="/signin" component={SigninScreen} />
               <Route path="/register" component={RegisterScreen} />
               <Route path="/shipping" component={ShippingScreen} />
               <Route path="/payment" component={PaymentScreen} />
               <Route path="/product" component={ProductsScreen} />
               <Route path="/addProvisions" component={Provision} />
               <Route path="/addPhones" component={Phone} />
               <Route path="/addLaptops" component={Laptop} />
               <Route path="/addElectronics" component={Electronic} />
               <Route path="/addComputerAccessories" component={Computer_Accessories} />
               <Route path="/addFootwears" component={Footwears} />
               <Route path="/addCosmetics" component={Cosmetic} />
               <Route path="/addEngineering" component={Engineer} />
               <Route path="/addBags" component={Bag} />
               <Route path="/addFemaleCloths" component={FemaleCloths} />
               <Route path="/addMaleCloths" component={MaleCloths} />
               <Route path="/maleCloths" component={Male_Cloths} />
               <Route path="/femaleCloths" component={Female_Cloths} />
               <Route path="/Bags" component={Bags} />
               <Route path="/Engineering" component={Engineering} />
               <Route path="/Cosmetics" component={Cosmetics} />
              
              
              
               <Route path="/placeorder" component={PlaceOrderScreen} />
               <Route path="/order" component={OrdersScreen} />
               <Route path="/admin" component={AdminScreen} />
               <Route path="/thanks" component={CompletedScreen} />
               
               



               <br></br>
               <Link to="#signout" onClick={signoutHandler}>Sign-Out</Link>  
               <Footer />
              
       </div>
       </BrowserRouter>
    );

}

export default App;
