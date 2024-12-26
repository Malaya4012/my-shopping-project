import React, { useState, useEffect, useContext } from 'react';
import '../styles/HomePage.css';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import SecondHeader from '../components/SecondHeader';
import Accordion from '../components/Accordion'; // Import the Accordion component
import Header from '../components/Header'; // Use the Header component here
import { CartContext } from '../context/CartContext';



const HomePage = () => {

  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const slides = [
    { image: '/images/sweets1.jpg', description: 'A delightful mix of chocolates and truffles🍨👍.' },
    { image: '/images/sweets2.jpg', description: 'Colorful and mouthwatering candies for everyone🍪❤️.' },
    { image: '/images/sweets3.jpg', description: 'Delicious pastries to brighten your day🎂😊.' },
    { image: '/images/sweets4.jpg', description: 'Soft, melt-in-your-mouth sweet with a unique texture and taste🍨✨.' },
    { image: '/images/sweets16.jpg', description: 'Life is short, eat dessert first. 🍰😋.' },
  ];

  // List of sweets for the cards
  const sweetsList = [
    { id: '1', image: '/images/sweets3.jpg', name: 'Laddus', pricePerKg: 500, rating: 4.5 },
    { id: '2', image: '/images/sweets6.jpg', name: 'Barfi', pricePerKg: 650, rating: 4.7 },
    { id: '3', image: '/images/sweets4.jpg', name: 'Rasgullas', pricePerKg: 400, rating: 4.6 },
    { id: '4', image: '/images/sweets1.jpg', name: 'Gulab Jamun', pricePerKg: 450, rating: 4.8 },
    { id: '5', image: '/images/sweets7.jpeg', name: 'Chena Podo', pricePerKg: 550, rating: 4.4 },
    { id: '6', image: '/images/sweets8.jpg', name: 'Feni Gaja', pricePerKg: 500, rating: 4.5 },
    { id: '7', image: '/images/sweets9.jpg', name: 'Chena Gaja', pricePerKg: 650, rating: 4.7 },
    { id: '8', image: '/images/sweets10.jpg', name: 'Dali Gaja', pricePerKg: 400, rating: 4.6 },
    { id: '9', image: '/images/sweets11.jpg', name: 'Labag pudia', pricePerKg: 450, rating: 4.8 },
    { id: '10', image: '/images/sweets12.jpg', name: 'Khasta Gaja', pricePerKg: 550, rating: 4.4 },
    { id: '11', image: '/images/sweets14.jpg', name: 'Chena Jhili', pricePerKg: 550, rating: 4.4 },
    { id: '12', image: '/images/sweets15.jpg', name: 'Rasa Bali', pricePerKg: 550, rating: 4.4 },
  ];

  const sweetsCategories = [
    { title: 'Laddus', content: 'Delicious laddus made with pure ghee and dry fruits.' },
    { title: 'Barfis', content: 'Varieties include kaju barfi, pista barfi, and coconut barfi.' },
    { title: 'Rasgullas', content: 'Fresh and spongy rasgullas dipped in syrup.' },
    { title: 'Gulab Jamuns', content: 'Soft and warm gulab jamuns, a classic favorite.' },
    { title: 'Chum Chum', content: 'Authentic Bengali-style chum chums for your delight.' },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);

  };
  // Filter sweets list based on the search term
  const filteredSweets = sweetsList.filter((sweet) =>
    sweet.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="homepage">
      {/* Header Component */}
      <Header scrolled={false} setSearchTerm={setSearchTerm} />
      <SecondHeader />

      {/* Carousel */}
      <Carousel slides={slides} />

      {/* Main Content */}
      <main className="homepage-main">

        <div className="sweets-cards-container">
        {filteredSweets.map((sweet) => (
          <div className="sweet-card" key={sweet.id}>
            <img src={sweet.image} alt={sweet.name} className="sweet-card-image" />
            <div className="sweet-card-details">
              <h3 className="sweet-card-name">{sweet.name}</h3>
              <p className="sweet-card-price">₹{sweet.pricePerKg} per kg</p>
              <p className="sweet-card-rating">⭐ {sweet.rating}</p>
              <button
                className="sweet-card-button"
                onClick={() => handleAddToCart(sweet)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
        </div>

      </main>

      {/* Footer */}
      <Footer />

      {/* Accordion Component */}
      <Accordion categories={sweetsCategories} />
    </div>
  );
};

export default HomePage;
