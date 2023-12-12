import React, { useState } from 'react';

interface editRatingInterface {
    value: number;
    size?: string;
    onRatingSelect: (value: number) => void;
}

export default function EditRating({ value, size = 'w-7 h-7', onRatingSelect }: editRatingInterface) {
    const [hoveredValue, setHoveredValue] = useState<number | null>(null);
    const totalStars = 5;

    const determineStarValue = (index: number, event: React.MouseEvent) => {
        const star = (event.target as HTMLElement).getBoundingClientRect();
        const isLeftHalf = event.clientX < star.left + star.width / 2;
        return isLeftHalf ? index + 0.5 : index + 1;
    };

    const handleMouseEnter = (index: number, event: React.MouseEvent) => {
        const starValue = determineStarValue(index, event);
        setHoveredValue(starValue);
    };

    const handleMouseLeave = () => {
        setHoveredValue(null);
    };

    const handleClick = (index: number, event: React.MouseEvent) => {
        const starValue = determineStarValue(index, event);
        onRatingSelect(starValue);
    };

    const EmptyStar = () => {
        return (
            <svg className={`${size} me-1 text-white mr-3`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .587l3.688 7.455 8.167 1.19-5.877 5.729 1.39 8.11L12 18.897l-7.368 3.874 1.39-8.11-5.877-5.73 8.167-1.19L12 .587z" />
            </svg>
        );
    }

    const FilledStar = () => (
        <svg className={`${size} text-custom-purple mr-1 mr-3`} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .587l3.688 7.455 8.167 1.19-5.877 5.729 1.39 8.11L12 18.897l-7.368 3.874 1.39-8.11-5.877-5.73 8.167-1.19L12 .587z" />
        </svg>
    );

    const HalfStar = () => (
        <div className={`${size} mr-3 flex`}>
            <div className="relative w-full">
                <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .587l3.688 7.455 8.167 1.19-5.877 5.729 1.39 8.11L12 18.897l-7.368 3.874 1.39-8.11-5.877-5.73 8.167-1.19L12 .587z" />
                </svg>
                <svg className="absolute top-0 w-full h-full text-custom-purple" fill="currentColor" viewBox="0 0 24 24" style={{ clipPath: 'inset(0 50% 0 0)' }}>
                    <path d="M12 .587l3.688 7.455 8.167 1.19-5.877 5.729 1.39 8.11L12 18.897l-7.368 3.874 1.39-8.11-5.877-5.73 8.167-1.19L12 .587z" />
                </svg>
            </div>
        </div>
    );
    const renderStar = (index: number) => {
        const starValue = hoveredValue !== null ? hoveredValue : value;
        if (starValue >= index + 1) {
            return <FilledStar key={index} />;
        } else if (starValue >= index + 0.5) {
            return <HalfStar key={index} />;
        } else {
            return <EmptyStar key={index} />;
        }
    };

    return (
        <div className="flex items-center mb-2 flex-wrap">
            {[...Array(totalStars)].map((_, index) => (
                <div
                    onMouseEnter={(e) => handleMouseEnter(index, e)}
                    onMouseLeave={handleMouseLeave}
                    onClick={(e) => handleClick(index, e)}
                    key={index}
                >
                    {renderStar(index)}
                </div>
            ))}
        </div>
    );
}
