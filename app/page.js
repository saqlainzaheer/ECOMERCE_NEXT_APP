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
    image: "/image2.png",
    title: "SKINNY FIT JEANS",
    rating: 4.5,
    realPrice: "$260",
    discountPrice: "$120",
    discount: "-20%",
  },
  {
    image: "/image3.png",
    title: "CHECKERED SHIRT",
    rating: 3.5,
    realPrice: "$120",
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
  // Add more data for other cards
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
