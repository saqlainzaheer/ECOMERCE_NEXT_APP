// components/HeroSection.js
import Image from 'next/image';
import heroImage from '../../public/heroimg01.gif'; // Import image statically
import bgimg from '../../public/bg01.png';

export default function HeroSection() {
  return (
    <section
      id="herosection"
    //   style={{
    //     backgroundImage: `url(${bgimg})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //   }}
      className="w-full "
    >
      <div className="max-w-7xl mx-auto p-8 ">
        <div className="flex flex-wrap items-center">
          <div className="md:basis-8/12">
            <h1 className="text-black font-extrabold text-5xl my-3 leading-tight">
              FIND CLOTHES <br />
              THAT MATCHES <br />
              YOUR STYLE
            </h1>
            <p className="text-black text-opacity-60 text-lg font-normal max-w-xl mt-4">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>

            <button className="w-full max-w-sm py-3 px-6 mt-7 bg-black text-white rounded-full">
              Shop Now
            </button>

            <div className="flex justify-around md:justify-between max-w-xl mt-6">
              <div className="text-center">
                <p className="text-3xl font-medium">200+</p>
                <p className="text-black text-opacity-60 text-sm">Intermediate Brands</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-medium">30,000+</p>
                <p className="text-black text-opacity-60 text-sm">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-medium">2,000+</p>
                <p className="text-black text-opacity-60 text-sm">High-Quality Products</p>
              </div>
            </div>
          </div>

          <div className="md:basis-4/12 mx-auto">
            <Image
              src={heroImage}
              alt="Hero Image"
              className="mx-auto"
               
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
