import React from 'react';
import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <div className="thank-you-page">
      <h1>Thank You for Your Purchase! 🎀</h1>
      <p>Your jewelry is on its way! 💖</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default ThankYou;
