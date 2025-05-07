import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { CartProvider } from './context/CartContext'; // <-- Import CartProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider> {/* Wrap the whole App inside CartProvider */}
      <App />
    </CartProvider>
  </React.StrictMode>
);

