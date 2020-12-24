import React from 'react';
import shop from '../shop';
import trends from '../trends';
import campusShop from '../campusShop';
import {Link} from 'react-router-dom'
import Home from '../components/HomePage/HomePage';



     
function HomePage(props) {


    return  <div className="categories">
        <div className="intro">  
          
    <img src="/img/sagaWeb.jpg" width="100%" height="170px"></img>
</div>
 
<div className="intro_1">
<p><h1>Fill Our Form To Make Order <Link to={'/Form/'} className="btn">Order Now</Link></h1></p>
</div>
    <div className="small-container_1">
    <div className="MainShops  ">
        <div className="cat_1"> 
          
          </div>
          
         
        <br></br> 
        <br></br>
    <div className="row">
       
    <div className="col-3">
      <Link to={'/Books/'}> <img src="/img/Kjust2.jpg" ></img></Link>
      <h3>Kobby</h3>
    </div>  
    <div className="col-3">
      <Link to={'/Provisions/'}> <img src="/img/Prov.jpg" ></img></Link>
      <h3>Kobby</h3>
    </div>  
    <div className="col-3">
      <Link to={'/Laptops/'}> <img src="/img/Prov.jpg" ></img></Link>
      <h3>Kobby</h3>
    </div>  
    <div className="col-3">
      <Link to={'/Phone/'}> <img src="/img/Prov.jpg" ></img></Link>
      <h3>Kobby</h3>
    </div>  
    
  
<div className="col-3">
      <Link to={'/computerAccessories/'}><img src="/img/Kjust2.jpg" ></img></Link>
      <h3>Kobby</h3>
</div>
<div className="col-3">
      <Link to={'/Footwear/'}> <img src="/img/Kjust2.jpg" ></img></Link>
      <h3>Kobby</h3>
</div>
<div className="col-3">
      <Link to={'/femaleCloths/'}> <img src="/img/Kjust2.jpg" ></img></Link>
      <h3>Kobby</h3>
</div>
<div className="col-3">
      <Link to={'/maleCloths/'}> <img src="/img/Kjust2.jpg" ></img></Link>
      <h3>Kobby</h3>
</div>


<div className="col-3">
      <Link to={'/Bags/'}> <img src="/img/Kjust2.jpg" ></img></Link>
      <h3>Kobby</h3>
</div>
<div className="col-3">
      <Link to={'/Engineering/'}> <img src="/img/Kjust2.jpg" ></img></Link>
      <h3>Kobby</h3>
</div>

<div className="col-3">
      <Link to={'/Cosmetics/'}> <img src="/img/Kjust2.jpg" ></img></Link>
      <h3>Kobby</h3>
</div>

<div className="col-3">
      <Link to={'/Electronic/'}> <img src="/img/Kjust2.jpg" ></img></Link>
      <h3>Kobby</h3>
</div>
 

  </div>
</div>

     <br></br>

<div className="MainShops">
{
            trends.stores.map(trend =>
             <div className="offer">
            
                 <div className="row">
                     <div className="col-2">
                         <img src={trend.image} width="250px"  className="offer-img"></img>
             </div>
                     <div className="col-2">
                         <p>Exclusively Available on SagaMarT</p>
            <h1>{trend.title}</h1>
                         <small>This is a very unique product which is only Available in our shops</small>
                         <Link to={'/shipping'} className="btn">Order Now</Link>
                 </div>
             </div>
         </div>
        
             )
        }
        </div>
        </div>
    </div>
          
}
export default HomePage;