import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset submission status after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="container py-5" style={{ backgroundColor: '#ffe4f0', minHeight: '100vh' }}>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm p-4">
            <h1 className="text-center mb-4" style={{ color: '#d63384' }}>Contact Us 💌</h1>
            
            {submitted && (
              <div className="alert alert-success" role="alert">
                Thank you! Your message has been sent.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-100 py-2">
                Send Message
              </button>
            </form>
            
            <div className="mt-4">
              <h5 style={{ color: '#d63384' }}>Our Info</h5>
              <p>📞 Phone: 0550 40 50 60</p>
              <p>📧 Email: contact@yourjewelrystore.com</p>
              <p>📍 Address: 123 Jewel street algiers -Algeria</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;