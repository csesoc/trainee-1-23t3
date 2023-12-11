import React from 'react';
import Rating from './Rating';
interface AverageRating {
    title : string
    rating : number;
    noOfReviews ?: number;
}
const AverageRating = ({title, rating, noOfReviews} : AverageRating) => {
    return (
        <div className="flex flex-col items-center bg-[#333568] text-white rounded-tl-3xl pt-4 pb-2">
            <h3 className="text-4xl font-bold p-2">{title}</h3>
            <Rating value={rating} size="w-14 h-14" />
            {title === 'Average Rating' && (
              <span className="text-sm pb-2">{noOfReviews} reviews</span>
            )}
        </div>
      );
};

export default AverageRating;
