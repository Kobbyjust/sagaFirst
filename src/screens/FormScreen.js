import React from 'react';
import shop from '../shop';
import trends from '../trends';
import campusShop from '../campusShop';
import {Link} from 'react-router-dom'



   
function HomePage(props) {

    
       const form =() => {
        var guideForm = document.getElementById("GuideForm");
        var orderForm = document.getElementById("OrderForm");
        var indicator = document.getElementById("Indicator");
           guideForm.style.transform = "translateX(0px)";
           orderForm.style.transform = "translateX(0px)";
           indicator.style.transform = "translateX(100px)";
       }
      const guide =() => {
        var guideForm = document.getElementById("GuideForm");
        var orderForm = document.getElementById("OrderForm");
        var indicator = document.getElementById("Indicator");
    
        guideForm.style.transform = "translateX(380px)";
        orderForm.style.transform = "translateX(380px)";
        indicator.style.transform = "translateX(0px)";
       }

    return<div>
     <div class="form-page"> 
    <div class="container1">
        <div class="row">
            <div class="col-2">
            <img src="/img/exclusive.png" width="100%"></img>
            </div>
            <div class="col-2">
                <div class="form-shs-container">
                    <div class="form-btn_1">
                        <span onClick={guide}>Guide</span>
                        <span onClick={form}>Form</span>
                        <hr id="Indicator"></hr>
                    </div>
                    <form id="GuideForm" >
                        
                        <button type="submit" class="btn_1">Proceed to form</button>
                    </form>
                    <form id="OrderForm">
                       
                        <textarea name="Form"  cols="49" rows="19" class="FormStyle"   placeholder="Enter The Name Of the Product and Quantity Here"  required ></textarea>
                        <br></br>
                        <input name="name" type="text" class="FormStyle" placeholder="Your Name" required></input>
                        <br></br>
                        <input name="email" type="text" class="FormStyle" placeholder="Your Email" required></input>
                        <br></br>
                        <input name="Phone Number" type="text" class="FormStyle" placeholder="Phone Number" required></input>
                        <br></br>
                        <input name="location" type="text" class="FormStyle" placeholder="Location" required></input>
                        <br></br>
                        <input name="school" type="text" class="FormStyle" placeholder="School" ></input>
                        <button type="submit" class="btn_1">Order Now</button>       
                    </form>
                </div>
            </div>

        </div>
    </div>
</div>
</div>
          
}
export default HomePage;