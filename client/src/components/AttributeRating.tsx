interface AttributeRatingProps {
    attribute: string;
    rating: number;
}

import Rating from './Rating';
const AttributeRating = ({ attribute, rating }: AttributeRatingProps) => {
    return (
        <div className="flex items-center justify-between bg-[#61296f] rounded-full p-1 text-white mb-4 w-10/12 shadow-xl">
            <span className="text-2xl font-bold pl-6 mr-2">{attribute}</span>
            <Rating value={rating} size="w-10 h-10" />
        </div>
    );
}

export default AttributeRating;
