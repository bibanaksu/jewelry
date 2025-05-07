
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function ItemCard({ product, isNewArrival }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="item-card-wrapper col-12 col-sm-6 col-md-4 col-lg-2">
      <div className="item-card">
        <div className="image-wrapper">
          
          {isNewArrival && (
            <span className="new-badge">New Arrival</span>
          )}

          <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src={product.image} alt={product.name} className="img-fluid" />
            <h3>{product.name}</h3>

            
            <p>{product.price}  ₫</p>
          </Link>
        </div>

        <button className="btn btn-sm btn-primary mt-2" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
