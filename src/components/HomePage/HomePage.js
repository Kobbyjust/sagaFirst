import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

function Home() {
    return ( <div className="categories">
    <div className="intro">       
<img src="/img/sagaWeb.jpg" width="100%" height="170px"></img>
</div>

<div className="intro_1">
<p><h1>Fill Our Form To Make Order <Link to={'/Form/'} className="btn">Order Now</Link></h1></p>
</div>
<div className="small-container_1">
<div className="MainShops">
    <div className="cat_1"> 
        <div className="OurStore">   
        <h1>XXXXXXX Shops</h1>
        </div>
      </div>
      <br></br>
      <div className="CampusShopNote">
      <p>Buy all your Provisions and Books Here</p>
    </div>
    <br></br>
    <br></br>
<div className="row">
   
<div className="col-3">
  <Link to={'/Books/'}> <img src="/img/Kjust2.jpg" ></img></Link>
  <p>Kobby</p>
</div>  
<div className="col-3">
  <Link to={'/Provisions/'}> <img src="/img/Prov.jpg" ></img></Link>
  <p>Kobby</p>
</div>  
</div>
</div>
<br></br>
<br></br>
<div className="MainShops">
<div className="cat_1">
    <div className="OurStore">   
    <h1>Our XXXXXXX</h1>  
</div>  
<br></br>
<br></br>
  </div>

   <div className="small-container_1">  
     <div className="row">

<div className="col-3">
  <Link to={'/Computer/'}> <img src="/img/Kjust2.jpg" ></img></Link>
  <p>Kobby</p> 
</div>
<div className="col-3">
  <Link to={'/Footwear/'}> <img src="/img/Kjust2.jpg" ></img></Link>
  <p>Kobby</p>
</div>
<div className="col-3">
  <Link to={'/Electronic/'}> <img src="/img/Kjust2.jpg" ></img></Link>
  <p>Kobby</p>
</div>
<div className="col-3">
  <Link to={'/Mobile/'}> <img src="/img/Kjust2.jpg" ></img></Link>
  <p>Kobby</p>
</div>
<div className="col-3">
  <Link to={'/Cloth/'}> <img src="/img/Kjust2.jpg" ></img></Link>
  <p>Kobby</p>
</div>

<div className="col-3">
  <Link to={'/Cosmetics/'}> <img src="/img/Kjust2.jpg" ></img></Link>
  <p>Kobby</p>
</div>

</div>

</div>
</div>
 <br></br>


    </div>
</div>  
    )
}

export default Home
