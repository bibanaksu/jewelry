import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  return (
    <div className="container py-5" style={{ backgroundColor: '#ffe4f0', minHeight: '100vh' }}>
      <h1 className="text-center mb-4" style={{ color: '#d63384', fontWeight: '600' }}>
        Your Cart 🛒
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-muted">Your cart is empty! 😢</p>
      ) : (
        <div className="row">
          {cartItems.map((item) => (
            <div key={item.id} className="col-md-6 mb-4">
              <div
                className="card shadow-sm p-3"
                style={{ backgroundColor: '#fff0f5', borderRadius: '20px' }}
              >
                <div className="row g-0 align-items-center">
                  <div className="col-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded"
                      style={{ border: '3px solid pink', borderRadius: '12px' }}
                    />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title" style={{ fontWeight: 'bold' }}>{item.name}</h5>
                      <p className="card-text mb-1">
                        <strong>Price:</strong> {item.price} ₫
                      </p>
                      <p className="card-text mb-1">
                        <strong>Total:</strong> {item.price * item.quantity} ₫
                      </p>
                      <div className="d-flex align-items-center mb-2">
                        <button
                          className="btn btn-outline-danger btn-sm me-2"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          ➖
                        </button>
                        <span className="fw-bold">{item.quantity}</span>
                        <button
                          className="btn btn-outline-success btn-sm ms-2"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          ➕
                        </button>
                      </div>
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove ❌
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
