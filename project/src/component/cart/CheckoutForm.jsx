import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/slice/cartSlice";
import React from 'react';
import StripeCheckout from "react-stripe-checkout";

export const CheckoutForm = ({ total, handlePaymentSuccess }) => {
    const dispatch = useDispatch();

    const handleToken = token => {
        handlePaymentSuccess();
        dispatch(clearCart());
    }

    return (
        <>
            <StripeCheckout
                token={handleToken}
                stripeKey=""
                amount={total * 100}
                name="Gorkcoder Ecommerce Website"
                email="gorkcoder@gmail.com"
                description="Payment test using stripe"
            >
                <button className="w-full bg-gray-200 py-3.5 my-3 font-medium">
                    Pay ${total?.toFixed(2)}
                </button>
            </StripeCheckout>
        </>
    );
}