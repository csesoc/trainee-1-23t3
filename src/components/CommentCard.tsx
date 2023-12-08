import React from 'react';
import Rating from './Rating';

interface commentInterface {
  username: string;
  text: string;
  rating: number;
}

const CommentCard = ({ username, text, rating }: commentInterface) => {
  return (
    <div className="border border-black p-4 rounded-2xl mb-2 shadow-lg" style={{ width: '518px' }}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
        <div className="flex flex-col mb-4 md:mb-0 text-left">
          <h5 className="text-lg font-bold">{username}</h5>
          <p className="text-sm">{text}</p>
        </div>
        <Rating value={rating} />
      </div>
    </div>
  );
};

export default CommentCard;
