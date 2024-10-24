import React, { useState } from "react";
import "./app.css";

const App = () => {

  const [loading, setLoading] = useState(false);

  const sendHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    
    // Redirect to Stripe:
    if (!loading) {
      // Fixed amount of Rs 9999
      // window.location.href = process.env.REACT_APP_REDIRECT_URL_FIXED_PRICE;
      
      // Manually enter the amount on payment page
      window.location.href = process.env.REACT_APP_REDIRECT_URL_DYNAMIC_PRICE;
    }
  };
  
  return (
    <div className="payment_main">
      <form onSubmit={sendHandler}>
        <button disabled={loading} className="payment_action">{loading ? 'Wait' : 'Pay Now'}</button>
      </form>
    </div>
  );
};

export default App;
