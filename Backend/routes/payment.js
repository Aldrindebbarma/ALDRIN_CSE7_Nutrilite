const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Require and initialize Razorpay
const Razorpay = require('razorpay');
const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// POST endpoint to create a PaymentIntent (Stripe)
router.post('/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body; // amount in smallest unit (e.g., cents)
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method_types: ['card']
    });
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating PaymentIntent:', error);
    res.status(500).json({ error: error.message });
  }
});

// POST endpoint to create a Razorpay order
router.post('/create-order', async (req, res) => {
  const { amount } = req.body; // amount in paise
  const options = {
    amount, // amount in paise
    currency: "INR",
    receipt: "receipt_order_" + new Date().getTime()
  };

  try {
    const order = await razorpayInstance.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;