import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Header.css'

function Header() {

 // const[{userSignin}, dispatch] = useStateValue

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;  
    const openMenu = () =>{
        document.querySelector(".sidebar-stores").classList.add("open");
    }
    const closeMenu=() => {
      document.querySelector(".sidebar-stores").classList.remove("open")
    }
    
    const userSignin = useSelector(state => state.userSignin);
    const {userInfo,regInfo} = userSignin;

    return (
        <div className="header">
             <button onClick={openMenu}><img src="/img/menu.png " width="30px" height="30px" className="menu-icon"></img></button>
             <aside className="sidebar-stores">
               <button className="close-button" onClick={closeMenu}>x</button>
               <h2>Menu</h2>
            
               <ul>
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/Cart/">My Cart</Link></li>
                 <li><Link to="/signin">Sign in</Link></li>
                
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
           <img className="header_logo" src="./img/sag.png" />  
          
          <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" 
       />
          </div>

        <div className="header__nav">
            <div className="header__option">
                <span className="header__optionLineOne">
                   {
                    userInfo ? (
                     <Link to="#"><h2>{userInfo.email}</h2></Link>
                     ):
                     <p>Hello User</p>
                   }
                </span>
                <span className="header__optionLineTwo">
                    Sign In
                </span>
                
            </div>

            <div className="header__option">
                
            <span className="header__optionLineOne">
                   Returns
                </span>
                <span className="header__optionLineTwo">
                    Orders
                </span>  
            </div>
           
            <div className="header__option">
            <span className="header__optionLineOne">
                    Your
                </span>
                <span className="header__optionLineTwo">
                   Prime 
                </span>
            </div>

            <div className="header__optionBasket">
            <Link to="/Cart/"> <ShoppingCartIcon />
                   {
                      cartItems.length > 0 && (<span className="badge">{cartItems.length}</span> )
                   }
             </Link>
            
           
            </div>
        </div>


        </div>
    )
}

export default Header
