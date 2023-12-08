import React from 'react';

interface AverageRating {
    rating: number;
    noOfReviews: number;
}
const AverageRating = ({rating, noOfReviews} : AverageRating) => {
    return (
        <div>
            <span>Average Rating: </span>{rating}
            <span>{noOfReviews}</span>
        </div>
    );
};

export default AverageRating;

