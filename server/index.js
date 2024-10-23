require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const joi = require("joi");
const app = express();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

app.post('/webhook', bodyParser.raw({ type: 'application/json' }), (req, res) => {
  const endpointSecret = 'whsec_0dfe9bb96f8b80b48296433fa145670b5dc5893a13fea5ab6ddc1c65e6d08595';
  const sig = req.headers['stripe-signature'];
  
  let event;

  try {
    // Verify that the event is coming from Stripe
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.log(`Webhook signature verification failed: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Process the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;  // Payment Intent data
      // console.log('PaymentIntent was successful:', paymentIntent);
      // Save the payment details in the database
      break;

    case 'checkout.session.completed':
      const session = event.data.object;  // Checkout session data
      // const customerEmail = session.customer_details.email;  // Capture customer email
      // const paymentStatus = session.payment_status;  // Capture payment status
      console.log('Checkout session completed:', session);
      // console.log('Customer email:', customerEmail);
      // console.log('Payment status:', paymentStatus);
      
      // Here, update user database or perform necessary actions based on the event
      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  // Respond to acknowledge receipt of the event
  res.json({ success: true });
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Server Error";

  res.status(statusCode).json({ message: message });
});

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port: ${process.env.PORT} `)
);
