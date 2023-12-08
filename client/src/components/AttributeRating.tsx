interface AttributeRatingProps {
    attribute: string;
    rating: number;
}

import Rating from './Rating';
const AttributeRating = ({ attribute, rating }: AttributeRatingProps) => {
    return (
        <div className="flex items-center justify-between bg-[#61296f] rounded-full p-2 text-white mb-2 w-11/12">
            <span className="text-3xl font-bold pl-4 mr-2">{attribute}</span>
            <Rating value={rating} size="w-10 h-10" />
        </div>
    );
}

export default AttributeRating;
