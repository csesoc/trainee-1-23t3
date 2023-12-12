import React, { useState } from 'react';
import EditRating from './EditRating';

interface EditAttributeRatingInterface {
    attribute: string;
    rating: number;
    onRatingSelect: (value: number) => void;
}
const EditAttributeRating = ({ attribute, rating, onRatingSelect }: EditAttributeRatingInterface) => {
    const [selectedRating, setSelectedRating] = useState(rating);

    const handleRatingSelect = (newRating: number) => {
        setSelectedRating(newRating);
        onRatingSelect(newRating);
    };

    return (
        <div className="flex items-center justify-between bg-[#61296f] rounded-full p-1 text-white mb-4 w-10/12 shadow-xl">
            <span className="text-2xl font-bold pl-3 mr-2">{attribute}</span>
            <EditRating value={selectedRating} size="w-10 h-10" onRatingSelect={handleRatingSelect} />
        </div>
    );
}

export default EditAttributeRating;
