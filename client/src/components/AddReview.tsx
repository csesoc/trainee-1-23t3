import React from 'react';
import ReviewIcon from '../assets/review-icon.png'
const addReview = () => {
    return (
        <button
            className="bg-[#61296f] rounded-full p-2 text-white mb-2 w-48 font-bold text-xl flex items-center justify-center"
        >
            <img src={ReviewIcon} alt="React Icon" style={{ width: '40px', height: '32px' }} />
            Add a review
        </button>
    );
}

export default addReview;