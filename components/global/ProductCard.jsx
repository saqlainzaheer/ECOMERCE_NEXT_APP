import PropTypes from 'prop-types';

const ProductCard = ({ image, title, rating, realPrice, discountPrice, discount }) => {
  const renderStars = (rating) => {
    // Generate star rating based on the rating
    return '⭐'.repeat(Math.floor(rating));
  };

  return (
    <div className="p-3">
      <div
        className="image-container mb-2 aspect-square"
        style={{
          borderRadius: '15px',
          backgroundImage: `url(${image})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center'
        }}
      />
      <h4 className="item_title text-black text-[0.75rem] sm:text-base lg:text-lg my-3 font-bold font-['Satoshi']">
        {title}
      </h4>
      <div className="flex p-1">
        {renderStars(rating)} {rating}
      </div>
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex items-center">
          <div className="p-1 text-black text-base sm:text-xl md:text-2xl font-bold font-['Satoshi']">
            {realPrice}
          </div>
          {discountPrice && (
            <div className="p-1 text-md sm:text-xl md:text-2xl text-black text-opacity-40 text-base font-bold font-['Satoshi'] line-through">
              {discountPrice}
            </div>
          )}
          {discount && (
            <div className="px-3.5 py-1.5 ml-1 text-md text-red-500 text-xs font-medium font-['Satoshi'] bg-red-500 bg-opacity-10 rounded-3xl">
              {discount}
            </div>
          )}
        </div>
        <div className="item__cartbtn">
          <button className="w-8 h-8 border-1 bg-black bg-opacity-50 rounded-full text-[#F0EEED] hover:text-black hover:bg-[#F0EEED] transition-all duration-300">
            <i className="fa-solid fa-cart-shopping" />
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  realPrice: PropTypes.string.isRequired,
  discountPrice: PropTypes.string,
  discount: PropTypes.string
};

ProductCard.defaultProps = {
  discountPrice: null,
  discount: null
};

export default ProductCard;
