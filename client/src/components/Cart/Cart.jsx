import React, { useContext } from "react";
import "./Cart.scss"
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { Context } from "../../utils/context";
import CartItem from "./CartItem/CartItem";
import { loadStripe } from "@stripe/stripe-js";
// import { makePaymentRequest } from "../../utils/api";


const Cart = ({setShowCart}) => {
    return (
        <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-btn" onClick={()=>setShowCart(false)}>
                        <MdClose />
                        <span className="text">Close</span>
                    </span>
                </div>

                {/* <div className="empty-cart">
                    <BsCartX />
                    <span>No Products</span>
                    <button className="return-cta">Return to Shop</button>
                </div> */}

                <>
                    <CartItem />
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">Subtotal:</span>
                            <span className="text total">&#8377;1234</span>
                        </div>
                        <div className="button">
                            <div className="checkout-cta">Checkout</div>
                        </div>
                    </div>
                </>
            </div>
        </div>
    );
};

export default Cart;
