import React from 'react';
import EmblaSlider from '@/components/global/EmblaCarousel';
import ProductCard from '@/components/global/ProductCard';
import HeroSection from '@/components/global/HeroSection';

const topSellingsData = [
  
  {
    image: "/image1.png",
    title: "T-SHIRT WITH TAPE DETAILS",
    rating: 3,
    realPrice: "$160",
    discountPrice: null,
    discount: null,
  },
  {
    image: "/image1.png",
    title: "T-SHIRT WITH TAPE DETAILS",
    rating: 3,
    realPrice: "$160",
    discountPrice: null,
    discount: null,
  },
  {
    image: "/image1.png",
    title: "T-SHIRT WITH TAPE DETAILS",
    rating: 3,
    realPrice: "$160",
    discountPrice: null,
    discount: null,
  },
  {
    image: "/image1.png",
    title: "T-SHIRT WITH TAPE DETAILS",
    rating: 3,
    realPrice: "$160",
    discountPrice: null,
    discount: null,
  },
  {
    image: "/image1.png",
    title: "T-SHIRT WITH TAPE DETAILS",
    rating: 3,
    realPrice: "$160",
    discountPrice: null,
    discount: null,
  },
  {
    image: "/image1.png",
    title: "T-SHIRT WITH TAPE DETAILS",
    rating: 3,
    realPrice: "$160",
    discountPrice: null,
    discount: null,
  },
  {
    image: "/image1.png",
    title: "T-SHIRT WITH TAPE DETAILS",
    rating: 3,
    realPrice: "$160",
    discountPrice: null,
    discount: null,
  },
  {
    image: "/image1.png",
    title: "T-SHIRT WITH TAPE DETAILS",
    rating: 3,
    realPrice: "$160",
    discountPrice: null,
    discount: null,
  },
  {
    image: "/image4.png",
    title: "SLEEVE STRIPED T-SHIRT",
    rating: 4.5,
    realPrice: "$160",
    discountPrice: "$130",
    discount: "-30%",
  },
  {
    image: "/image4.png",
    title: "SLEEVE STRIPED T-SHIRT",
    rating: 4.5,
    realPrice: "$160",
    discountPrice: "$130",
    discount: "-30%",
  },
  {
    image: "/image4.png",
    title: "SLEEVE STRIPED T-SHIRT",
    rating: 4.5,
    realPrice: "$160",
    discountPrice: "$130",
    discount: "-30%",
  },
  {
    image: "/image4.png",
    title: "SLEEVE STRIPED T-SHIRT",
    rating: 4.5,
    realPrice: "$160",
    discountPrice: "$130",
    discount: "-30%",
  },
  {
    image: "/image4.png",
    title: "SLEEVE STRIPED T-SHIRT",
    rating: 4.5,
    realPrice: "$160",
    discountPrice: "$130",
    discount: "-30%",
  },
  {
    image: "/image4.png",
    title: "SLEEVE STRIPED T-SHIRT",
    rating: 4.5,
    realPrice: "$160",
    discountPrice: "$130",
    discount: "-30%",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="container mx-auto p-4 ">
      <EmblaSlider slides={topSellingsData} />
      </div>
    </>
  );
}
