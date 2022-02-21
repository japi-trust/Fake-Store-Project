import React, { useState } from "react";
import { useStateValue } from "../Context/Context";
import SubTotal from "../subTotal/SubTotal";
import {Button} from "../style"
import "./Checkout.css";
// import { Button } from "style-components";
// import {Link} from "react-router-dom"


function Checkout() {
  const [{ cart, quantity }, dispatch] = useStateValue();

  console.log("cart", quantity);
  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };
const handleQuantity = (quantity) => {
  dispatch({
    type: "ADD_QUANTITY",
   payload: quantity,
  })
}
  return (
  <div>
  <div className="checkout">
      {cart.length ? (
        <>
      <div className="checkout__left">
        <div>
          {cart.map((item) => (
            <div className="checkoutProduct">
              <img className="checkoutProduct__image" src={item.image} />

              <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{item.title}</p>
                <p className="checkoutProduct__price">
                  <small>$</small>
                  <strong>{item.price}</strong>
                </p>

                <div className="quantity">
                  <label htmlFor="qty">Qty</label>
                  <input
                    min="1"
                    type="number"
                    id="qty"
                    name="qty"
                  
                    // value={}
                    onChange={(e) => {
                    handleQuantity(e.target.value);
                   
                  }
                  }
                
                  ></input>
                  
                </div>
                <div className="checkoutProduct__button"> 
                <button onClick={() => removeFromCart(item.id)}>
                <Button bgColor="#f70710">Remove from Cart</Button>
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
          </div>
        </>
      ):(
        <h1> Your cart is Empty</h1 >
        )}
    </div>
    <div class="form-container">
      <form class="register-form">

          <div class="message">Thank you for registering</div>
          <input
            id="first-name"
            class="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
          />
        
          {/* <span id="first-name-error">Please enter a first name</span>  */}
          <input
            id="last-name"
            class="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
    
          {/* <span id="last-name-error"> enter a last name</span>  */}
          <input
            id="email"
            class="form-field"
            type="text"
            placeholder="Email"
            name="email"
          />
          <input
            id="Shipping"
            class="form-field"
            type="text"
            placeholder="Shipping"
            name="Shipping Address"
          />
      <input
            id="Billing"
            class="form-field"
            type="text"
            placeholder="Billing"
            name="Billing Adress"
          />
          <input
            id="Card"
            class="form-field"
            type="text"
            placeholder="Card"
            name="Cerdit Card"
          />
    
          {/* <span id="email-error">Please enter an email address</span>  */}
          <button class="form-field" type="submit">
          <Button bgColor="#f70710"> Register</Button>
        
          </button>
        </form>
      </div>
      </div>
      
      )
    }
    export default Checkout;
