import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/payment.jpeg'; // Adjust the path to your image

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const totalAmount = location.state?.total || "0.00";
  const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!document.getElementById('razorpay-script')) {
      const script = document.createElement('script');
      script.id = 'razorpay-script';
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => {
        console.log('Razorpay CheckoutJS script loaded');
      };
      document.body.appendChild(script);
    }
  }, []);

  const handlePay = async () => {
    setProcessing(true);
    setMessage('');
    try {
      const amountInPaise = parseFloat(totalAmount) * 100;
      const response = await fetch('http://localhost:5000/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: amountInPaise })
      });
      const data = await response.json();

      if (data.error) {
        setMessage('Error: ' + data.error);
        setProcessing(false);
        return;
      }

      const order_id = data.id;
      if (!order_id) {
        setMessage('Order ID not received');
        setProcessing(false);
        return;
      }

      const options = {
        key: "rzp_test_7l6gWYHgNKJqGU",
        amount: amountInPaise,
        currency: "INR",
        name: "Nutrilite",
        description: "Payment Transaction",
        order_id: order_id,
        handler: function (response) {
          console.log("Payment successful:", response);
          navigate("/delivery-locator");
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "1234567890"
        },
        notes: {
          address: "Nutrilite Corporate Office"
        },
        theme: {
          color: "#3399cc"
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      setMessage('Unexpected error: ' + error.message);
    }
    setProcessing(false);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-black"
      style={{
        background: `url(${backgroundImage}) no-repeat center center/cover`,
        position: 'relative',
        color: '#fff'
      }}
    >
      {/* Overlay for better text visibility */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
          zIndex: 1
        }}
      ></div>

      {/* Content */}
      <div style={{ zIndex: 2, position: 'relative' }}>
        <h2 className="text-3xl mb-6 font-bold">Pay with Razorpay</h2>
        <button
          onClick={handlePay}
          disabled={processing}
          className="mt-6 w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white py-3 rounded transition"
        >
          {processing ? 'Processing...' : `Pay ₹${totalAmount}`}
        </button>
        {message && (
          <div className="mt-4 text-center text-lg font-medium">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;