import React from 'react';
import {loadStripe} from "@stripe/stripe-js"


const Index = () =>{

    const stripePromise = loadStripe(process.env.GATSBY_STRIPE_API);

    const checkoutButton = async(e)=>{
        e.preventDefault()
        const stripe = await stripePromise
        stripe
            .redirectToCheckout({
                items: [
                // Replace with the ID of your SKU
                {sku: 'sku_H9mImJteZLjpl3', quantity: 1},
                ],
                successUrl: 'https://your-website.com/success',
                cancelUrl: 'https://your-website.com/canceled',
            })
            .then(function(result) {
                // If `redirectToCheckout` fails due to a browser or network
                // error, display the localized error message to your customer
                // using `result.error.message`.
            });
    }

    return(
        <div>
            <form>
                <button onClick={checkoutButton}>
                    Payer
                </button>
            </form>
        </div>
    )
}

export default Index;