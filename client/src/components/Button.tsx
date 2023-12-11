import React from 'react';
import ReviewIcon from '../assets/review-icon.png'

interface addReviewInterface {
    text: string;
  }
const addReview = ({ text}: addReviewInterface) => {
    return (
        <button
            className="bg-[#61296f] rounded-full p-2 text-white mb-2 w-48 font-bold text-xl flex items-center justify-center"
        >
            {text === 'Add a review' && (
                <img src={ReviewIcon} alt="Review Icon" style={{ width: '40px', height: '32px', marginRight: '8px' }} />
            )}
            {text}
        </button>
    );
}

export default addReview;