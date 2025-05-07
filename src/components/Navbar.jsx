import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Navbar.css';

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#ffe4f0' }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center" style={{ color: '#d63384', fontWeight: 'bold', fontSize: '1.5rem' }}>
          {/* Left Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#d63384" className="bi bi-bluesky me-2" viewBox="0 0 16 16">
            <path d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948" />
          </svg>
          MyJewels
          {/* Right Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#d63384" className="bi bi-bluesky ms-2" viewBox="0 0 16 16">
            <path d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948" />
          </svg>
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Home */}
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ color: 'black' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#d63384" className="bi bi-house-heart-fill me-1" viewBox="0 0 16 16">
                  <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707z"/>
                  <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018"/>
                </svg>
                Home
              </Link>
            </li>

            {/* Cart */}
            <li className="nav-item position-relative">
              <Link to="/cart" className="nav-link" style={{ color: 'black' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#d63384" className="bi bi-bag-heart-fill me-1" viewBox="0 0 16 16">
                  <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
                </svg>
                Cart
                {/* Counter Badge */}
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#721c24',
                    fontSize: '0.65rem',
                    padding: '0.35em 0.6em',
                    transform: 'translate(-30%, -30%)',
                    fontWeight: 'bold',
                    boxShadow: '0 0 4px rgba(0,0,0,0.1)'
                  }}
                >
                  {itemCount}
                </span>
              </Link>
            </li>

            {/* Checkout */}
            <li className="nav-item">
              <Link to="/checkout" className="nav-link" style={{ color: 'black' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#d63384" className="bi bi-bag-check-fill me-1" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
                </svg>
                Checkout
              </Link>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <Link to="/contact" className="nav-link" style={{ color: 'black' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#d63384" className="bi bi-envelope-heart me-1" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l3.235 1.94a2.8 2.8 0 0 0-.233 1.027L1 5.384v5.721l3.453-2.124q.219.416.55.835l-3.97 2.443A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741l-3.968-2.442q.33-.421.55-.836L15 11.105V5.383l-3.002 1.801a2.8 2.8 0 0 0-.233-1.026L15 4.217V4a1 1 0 0 0-1-1zm6 2.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
                </svg>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
