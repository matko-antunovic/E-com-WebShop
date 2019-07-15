import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {

    const priceStripe=price*100;
    const publishableKey="pk_test_9v0v7kUA3y8voshrbIXpDVUr00CZghWrVs"

   const onToken=token=>{
        console.log(token)
    }

    return (
        <div>
            <StripeCheckout
            label="Pay Now"
            name="CRWN Cloathing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
            />
        </div>
    )
}

export default StripeButton;
