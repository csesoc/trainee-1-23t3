import React from 'react';
import Rating from './Rating';

interface commentInterface {
  username: string;
  text: string;
  rating: [number, number, number];
}

const CommentCard = ({ username, text, rating }: commentInterface) => {
  const averageRating = (rating[0] + rating[1] + rating[2]) / 3 || 0;
  return (
    <div className="border border-black px-4 py-1 rounded-2xl mb-6 shadow-lg" style={{ width: '518px' }}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
        <div className="flex flex-col mb-4 md:mb-0 text-left">
          <h5 className="text-2xl font-bold p-1">{username}</h5>
          <p className="text-lg p-1">{text}</p>
        </div>
        <div className="flex-shrink-0">
          <Rating value={averageRating} />
        </div>
      </div>
    </div>
  );
};

export default CommentCard;

