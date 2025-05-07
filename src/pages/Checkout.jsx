import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      setError('Your cart is empty!');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      clearCart();
      navigate('/thank-you');
    } catch (err) {
      setError('Checkout failed. Please try again.');
      console.error('Checkout error:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm p-4">
            <h1 className="text-center mb-4">Checkout 💎</h1>
            
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            <div className="mb-4">
              <h4>Order Summary</h4>
              <ul className="list-group mb-3">
                {cartItems.map(item => (
                  <li key={item.id} className="list-group-item d-flex justify-content-between">
                    <span>
                      {item.name} (x{item.quantity})
                    </span>
                    <span>
                      {item.price * item.quantity} DZD
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className="d-flex justify-content-between fw-bold fs-5">
                <span>Total:</span>
                <span>{total} DZD</span>
              </div>
            </div>

            <button
              className="btn btn-primary w-100 py-3"
              onClick={handleCheckout}
              disabled={isProcessing || cartItems.length === 0}
            >
              {isProcessing ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Processing...
                </>
              ) : (
                'Confirm Purchase'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;