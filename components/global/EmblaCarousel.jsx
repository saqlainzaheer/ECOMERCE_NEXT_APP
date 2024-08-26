'use client'
import React, { useRef, useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ProductCard from '../../components/global/ProductCard';


const EmblaSlider = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
   loop: true,             // Enable looping
  speed: 10,              // Set transition speed
  slidesToScroll: 2,      // Scrolls 2 slides at a time
  draggable: true 
  });

  useEffect(() => {
    // Do something if needed on mount or change
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide " key={index}>
              <ProductCard {...slide} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaSlider;
