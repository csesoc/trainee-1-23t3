
import React from 'react';

interface ratingInterface {
  value: number;
  size?: string;
}
export default function Rating({ value , size = 'w-6 h-6'  }: ratingInterface) {
  const totalStars = 5;
  const EmptyStar = () => {
    return (
      <svg className={`${size} me-1 text-white-500`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .587l3.688 7.455 8.167 1.19-5.877 5.729 1.39 8.11L12 18.897l-7.368 3.874 1.39-8.11-5.877-5.73 8.167-1.19L12 .587z" />
      </svg>
    );
  }

  const FilledStar = () => (
    <svg className={`${size} text-custom-purple mr-1`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .587l3.688 7.455 8.167 1.19-5.877 5.729 1.39 8.11L12 18.897l-7.368 3.874 1.39-8.11-5.877-5.73 8.167-1.19L12 .587z" />
    </svg>
  );

  const HalfStar = () => (
  <div className={`${size} mr-1 flex`}>
    <div className="relative w-full">
      <svg className="w-full h-full text-white-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .587l3.688 7.455 8.167 1.19-5.877 5.729 1.39 8.11L12 18.897l-7.368 3.874 1.39-8.11-5.877-5.73 8.167-1.19L12 .587z" />
      </svg>
      <svg className="absolute top-0 w-full h-full text-custom-purple" fill="currentColor" viewBox="0 0 24 24" style={{ clipPath: 'inset(0 50% 0 0)' }}>
        <path d="M12 .587l3.688 7.455 8.167 1.19-5.877 5.729 1.39 8.11L12 18.897l-7.368 3.874 1.39-8.11-5.877-5.73 8.167-1.19L12 .587z" />
      </svg>
    </div>
  </div>
  );


  const renderStar = (index: number) => {
    if (value >= index + 1) {
      return <FilledStar key={index} />;
    } else if (value >= index + 0.5 && value < index + 1) {
      return <HalfStar key={index} />;
    } else {
      return <EmptyStar key={index} />;
    }
  };

  return (
    <div className="flex items-center mb-2">
      {[...Array(totalStars)].map((_, index) => renderStar(index))}
    </div>
  );
}