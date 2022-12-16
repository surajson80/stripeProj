import react from 'react'
import {Elements} from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'



const PUBLIC_KEY="pk_test_51M7YQZSCsDCIa4NeFw32sKssAka1DTpwWLXrhN9e7g5VZMOJC7gZWOPDWBW1wjback0GVqGAAMhIc3dqyNd5RSNI00Ejnay6sI"
const StripeTestPromise = loadStripe(PUBLIC_KEY)

export default function stripecontainer(){
    return(
        <Elements stripe={StripeTestPromise}>
                <PaymentForm/>
        </Elements>
    )
}