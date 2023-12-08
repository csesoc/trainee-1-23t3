import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import CommentCard from "../components/CommentCard"
import AttributeRating from "../components/AttributeRating";
import AverageRating from "../components/AverageRating";
export default function Individual() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const image = queryParams.get('image') ?? '';
    const title = queryParams.get('title') ?? '';
    console.log(image)
    console.log(title)
    //////// HARDCODED DATA, DELETE LATER. ////////
    const data = [
        {
            user: 'user1',
            comment: 'comment1',
            rating: 2,
        },
        {
            user: 'user2',
            comment: 'comment2',
            rating: 1.5,
        },
        {
            user: 'user3',
            comment: 'comment3',
            rating: 4,
        },
        {
            user: 'user4',
            comment: 'comment4',
            rating: 3,
        }
    ]
    return (
        <div className="flex flex-row items-center justify-center">
            <div className="flex w-200 w-[90%] h-screen justify-center items-center">
                <div className="flex flex-col bg-white w-[100%] h-[86%] text-black rounded-[30px] rounded-bl-none items-center">
                    <Header />
                    <Sidebar />
                    <div className="flex w-full">
                        <div className="flex flex-col w-full pl-10 w-1/2">
                            <h1 className="text-5xl text-left font-bold mb-4">{decodeURIComponent(title)}</h1>
                            <div className="flex flex-col p-4">
                                {/* attribute ratings here */}
                                <AttributeRating attribute="Noise" rating={4} />
                                <AttributeRating attribute="Convenience" rating={3} />
                                <AttributeRating attribute="Privacy" rating={4.5} />
                            </div>
                            {/* <img src={decodeURIComponent(image)} alt={decodeURIComponent(title)} className="rounded-xl mb-4 aspect-auto object-contain h-80 w-80" /> */}
                            <div className="flex justify-center items-center">
                                <img src={decodeURIComponent(image)} alt={decodeURIComponent(title)} className="rounded-3xl object-contain h-70 w-80" />
                            </div>
                        </div>
                        <div className="flex flex-col w-1/2 p-4 bg-[#AFDCF6]">
                            {/* comment cards */}
                            {data.map((entry, index) => (
                                <CommentCard
                                    key={index}
                                    username={entry.user}
                                    text={entry.comment}
                                    rating={entry.rating}
                                />
                            ))}
                            {/* average rating component */}
                            <AverageRating rating={4.2} noOfReviews={120} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}