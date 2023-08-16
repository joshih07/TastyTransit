import React from 'react';

const About = () => {
  return (
    <div style={aboutContainer}>
      <div style={aboutBox}>
        <h2 style={aboutTitle}>About Us</h2>
        <p style={aboutText}>
          Welcome to <strong>The Fastest Delivery in Your Home</strong>! We take pride in offering you the
          convenience of enjoying good, fresh, and healthy food right at your doorstep. Our commitment is to deliver
          high-quality, delicious, and nutritious meals that cater to all your dietary preferences.
        </p>
        <p style={aboutText}>
          Our menu features a wide variety of vegetarian options, ensuring that both veggie lovers and non-vegetarians
          can savor the flavors. We source our ingredients locally to ensure the freshness and taste of each dish.
        </p>
        <p style={aboutText}>
          With our easy and secure online payment system, you can place your order with confidence and enjoy a seamless
          experience from browsing our menu to receiving your meal. Our online delivery system ensures that your food is
          delivered promptly, so you can enjoy restaurant-quality meals in the comfort of your own home.
        </p>
        <p style={aboutText}>
          Experience the convenience, taste, and health benefits of The Fastest Delivery in Your Home. Join us in our
          journey to provide you with wholesome food that satisfies your cravings and keeps you energized.
        </p>
      </div>
    </div>
  );
};

const aboutContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  background: '#f7f7f7',
};

const aboutBox = {
  background: '#fff',
  padding: '40px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  maxWidth: '600px',
  width: '100%',
};

const aboutTitle = {
  fontSize: '24px',
  marginBottom: '20px',
  color: '#333',
  textAlign: 'center',
};

const aboutText = {
  fontSize: '16px',
  lineHeight: '1.5',
  marginBottom: '20px',
  color: '#555',
};

export default About;
