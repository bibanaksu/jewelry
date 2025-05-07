import React, { useEffect, useState, useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data/data';
import { CartContext } from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [views, setViews] = useState(0);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const hasCounted = useRef(false); // Prevent double view increment

  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem(`reviews-${id}`);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (!hasCounted.current) {
      const foundProduct = productsData.find(p => p.id === parseInt(id));
      if (foundProduct) {
        const storedViews = JSON.parse(localStorage.getItem('views')) || {};
        const currentViews = (storedViews[id] || 0) + 1;

        localStorage.setItem('views', JSON.stringify({
          ...storedViews,
          [id]: currentViews
        }));

        setProduct(foundProduct);
        setViews(currentViews);
        hasCounted.current = true;
      }
    }
  }, [id]);

  useEffect(() => {
    localStorage.setItem(`reviews-${id}`, JSON.stringify(reviews));
  }, [reviews, id]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (rating > 0 && comment.trim()) {
      const newReview = {
        rating,
        comment,
        date: new Date().toLocaleDateString()
      };
      setReviews([...reviews, newReview]);
      setRating(0);
      setComment('');
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    const soldData = JSON.parse(localStorage.getItem('sold')) || {};
    localStorage.setItem('sold', JSON.stringify({
      ...soldData,
      [id]: (soldData[id] || 0) + 1
    }));
  };

  if (!product) return <div className="text-center py-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="row align-items-start">
        <div className="col-md-6 position-relative">
          {views < 10 && (
            <span 
              className="position-absolute top-0 start-0 translate-middle badge"
              style={{
                backgroundColor: '#fcdde8',
                color: '#ad1457',
                fontSize: '0.7rem',
                transform: 'translate(-50%, -50%)'
              }}
            >
              New
            </span>
          )}
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-image img-fluid rounded shadow" 
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </div>

        <div className="col-md-6">
          <h2 style={{ color: '#e91e63', fontWeight: 'normal', fontFamily: 'Arial, sans-serif' }}>
            {product.name}
          </h2>

          <p>
            <strong>Price:</strong>{' '}
            <span style={{ color: 'black', fontSize: '1.2rem' }}>
              {product.price} ₫
            </span>
          </p>

          <p><strong>Views:</strong> {views}</p>
          <p><strong>Sold:</strong> {JSON.parse(localStorage.getItem('sold'))?.[id] || 0}</p>
          
          <button
            className="btn btn-primary mb-4"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

          <hr />

          <h4 style={{ color: '#e91e63', fontWeight: 'normal', fontFamily: 'Arial, sans-serif' }}>
            Customer Reviews ({reviews.length})
          </h4>

          {reviews.length === 0 ? (
            <p className="text-muted">No reviews yet.</p>
          ) : (
            reviews.map((review, i) => (
              <div key={i} className="border p-2 my-2 rounded bg-light">
                <div className="d-flex justify-content-between">
                  <div style={{ fontSize: '1.2rem' }}>
                    {Array(review.rating).fill('⭐️').join('')}
                  </div>
                  <small>{review.date}</small>
                </div>
                <p className="mt-2 mb-0">{review.comment}</p>
              </div>
            ))
          )}

          <form onSubmit={handleReviewSubmit} className="mt-3">
            <div className="mb-2">
              <label>Rating:</label>
              <select className="form-select" value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                <option value="">Select rating</option>
                <option value="1">⭐️</option>
                <option value="2">⭐️⭐️</option>
                <option value="3">⭐️⭐️⭐️</option>
                <option value="4">⭐️⭐️⭐️⭐️</option>
                <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
              </select>
            </div>
            <div className="mb-2">
              <label>Comment:</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="form-control"
                rows="3"
                required
              />
            </div>
            <button type="submit" className="btn btn-success">Submit Review</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
