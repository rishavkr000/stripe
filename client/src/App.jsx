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
      // window.location.href = "https://buy.stripe.com/test_eVa2a9geYdSC9DG3cc";

      // Manually enter the amount on payment page
      window.location.href = "https://buy.stripe.com/test_eVaeWV9QA7ue6ru4gh";
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
