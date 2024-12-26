import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css'; // Ensure this stylesheet contains necessary styles

const Carousel = ({ slides, intervalTime = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  // Automatic Slide Transition
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, intervalTime);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [currentSlide, intervalTime]);

  return (
    <div className="carousel-container">
      {/* Carousel Slide */}
      <div className="carousel-slide">
        <img
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide}`}
          className="carousel-image"
        />
        <div className="carousel-description">
          {slides[currentSlide].description || 'Delicious sweets!'}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button className="carousel-button prev-button" onClick={prevSlide}>
        &#8249; {/* Left Arrow */}
      </button>
      <button className="carousel-button next-button" onClick={nextSlide}>
        &#8250; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default Carousel;
