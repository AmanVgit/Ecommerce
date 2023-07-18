import React, { useContext } from "react";
import "./Cart.scss"
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { Context } from "../../utils/context";
import CartItem from "./CartItem/CartItem";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "../../utils/api";


const Cart = ({setShowCart}) => {
    const {cartItems, cartSubTotal} = useContext(Context)

    const stripePromise = loadStripe("pk_test_51NUynRSFKUeWy37QRtE1bQ4HEQZnet7ORYA2hvg9LHwYp4J14hemPiT5b7W1KCrUXk49Err6zVRwfqmjzJVgUzNn0090IsfhKz"
    );
    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makePaymentRequest.post("/api/order",
            {
                product : cartItems
            });
          console.log("i was hereeee below ressssss");
          await stripe.redirectToCheckout({
            sessionId: res.data.stripeSession.id,
          });
    
        } catch (err) {
            console.log(err);
          console.log("Error in handlepayment");
        }
      };

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

                {!cartItems && <div className="empty-cart">
                    <BsCartX />
                    <span>No Products</span>
                    <button className="return-cta">Return to Shop</button>
                </div>}

                {!!cartItems && <>
                    <CartItem />
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">Subtotal:</span>
                            <span className="text total">&#8377;{cartSubTotal}</span>
                        </div>
                        <div className="button">
                            <div className="checkout-cta" onClick={handlePayment}>Checkout</div>
                        </div>
                    </div>
                </>}
            </div>
        </div>
    );
};

export default Cart;
