import { useEffect, useState } from "react";

import "./Carousel.scss";

const Carousel = ({ productDetails }) => {
  const [activeSlideNumber, setActiveSlideNumber] = useState(0);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [activeSlideNumber]);

  const handleClick = index => {
    setActiveSlideNumber(index);
  };

  const handleKeyPress = event => {
    if ((event.key === 'ArrowUp' || event.key === 'ArrowLeft') && activeSlideNumber > 0) {
      setActiveSlideNumber(activeSlideNumber - 1);
    }
    if ((event.key === 'ArrowDown' || event.key === 'ArrowRight') && activeSlideNumber < productDetails.images.length - 1) {
      setActiveSlideNumber(activeSlideNumber + 1);
    }
  };

  return (
    <div className="carousel__wrapper">
      <div className="carousel__main">
        <img
          src={`https://vehiculum-coding-challenge.herokuapp.com${productDetails.images[activeSlideNumber].l}`}
          srcset={`https://vehiculum-coding-challenge.herokuapp.com${productDetails.images[activeSlideNumber].s} 320w, https://vehiculum-coding-challenge.herokuapp.com${productDetails.images[activeSlideNumber].m} 480w, https://vehiculum-coding-challenge.herokuapp.com${productDetails.images[activeSlideNumber].l} 768w`}
          alt={productDetails.model}
        />
      </div>
      <div className="carousel__aside">
        <div className="carousel__preview-list">
          {productDetails.images.map((image, index) => (
            <button
              className={`carousel__preview-item ${activeSlideNumber === index && 'carousel__preview-item--active'}`}
              onClick={() => handleClick(index)}
              key={index}
            >
              <img src={`https://vehiculum-coding-challenge.herokuapp.com${image.s}`} alt={productDetails.model} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
