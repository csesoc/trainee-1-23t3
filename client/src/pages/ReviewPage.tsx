import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import EditAttribute from "../components/EditAttributeRating";
import AverageRating from "../components/AverageRating";
import Button from '../components/Button';
export default function Individual() {
    const [commentReview, setCommentReview] = useState('');
    const [noiseRating, setNoiseRating] = useState(0);
    const [convenienceRating, setConvenienceRating] = useState(0);
    const [privacyRating, setPrivacyRating] = useState(0);
    const [overallRating, setOverallRating] = useState(0);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const image = queryParams.get('image') ?? '';
    const title = queryParams.get('title') ?? '';
    console.log(image)
    console.log(title)
    const handleNoiseRatingChange = (newRating: number) => {
        console.log(noiseRating);
        console.log('HIII HOW ARE YUO');
        setNoiseRating(newRating);
    };

    const handleConvenienceRatingChange = (newRating: number) => {
        console.log(newRating);
        setConvenienceRating(newRating);
    };
    const handlePrivacyRatingChange = (newRating: number) => {
        console.log(newRating);
        setPrivacyRating(newRating);
    }

    useEffect(() => {
        const calculateRating = (privacyRating + noiseRating + convenienceRating) / 3;
        setOverallRating(calculateRating);
    }, [privacyRating, noiseRating, convenienceRating]);
    //////// HARDCODED DATA, DELETE LATER. ////////
    // const data = [
    //     {
    //         user: 'user1',
    //         comment: 'comment1',
    //         rating: 2,
    //     },
    //     {
    //         user: 'user2',
    //         comment: 'comment2',
    //         rating: 1.5,
    //     },
    //     {
    //         user: 'user3',
    //         comment: 'comment3',
    //         rating: 4,
    //     },
    //     {
    //         user: 'user4',
    //         comment: 'comment4',
    //         rating: 3,
    //     },
    //     {
    //         user: 'user2',
    //         comment: 'comment2',
    //         rating: 1.5,
    //     },
    //     {
    //         user: 'user3',
    //         comment: 'comment3',
    //         rating: 4,
    //     },
    //     {
    //         user: 'user4',
    //         comment: 'comment4',
    //         rating: 3,
    //     }
    // ]

    const handleButtonClick = () => {
        alert('submitted');
    }

    const handleCommentChange = (comment: string) => {
        console.log(comment);
        setCommentReview(comment);
    };

    const handleBack = () => {
        alert('Go back!');
    }
    return (
        <div className="flex flex-row items-center justify-center">
            <div className="flex w-200 w-[90%] h-screen justify-center items-center">
                <div className="flex flex-col bg-white w-[100%] h-[86%] text-black rounded-[30px] rounded-bl-none items-center overflow-hidden">
                    <Header />
                    <Sidebar />
                    <div className="flex w-full h-[90%]">
                        <div className="w-1/2 flex flex-col">
                            <div className="flex">
                                <span className="flex ml-8 pt-2 cursor-pointer text-zinc-500 text-base" onClick={handleBack}>Back</span>
                                <h1 className="text-5xl font-bold pl-20 pt-2">Submit a review</h1>
                            </div>
                            <div className="flex justify-center items-start">
                                <h4 className="text-xl pt-2">How did you find the space?</h4>
                            </div>
                            <div className="flex flex-col items-center justify-between pt-4">
                                <EditAttribute
                                    attribute="Noise"
                                    rating={noiseRating}
                                    onRatingSelect={handleNoiseRatingChange}
                                />
                                <EditAttribute
                                    attribute="Convenience"
                                    rating={convenienceRating}
                                    onRatingSelect={handleConvenienceRatingChange}
                                />
                                <EditAttribute
                                    attribute="Privacy"
                                    rating={privacyRating}
                                    onRatingSelect={handlePrivacyRatingChange}
                                />
                            </div>
                            <div className="flex items-center justify-center pt-1">
                                <img src={decodeURIComponent(image)} alt={decodeURIComponent(title)} className="rounded-3xl object-contain h-6/12 w-6/12" />
                            </div>
                        </div>
                        <div className="w-1/2 bg-[#AFDCF6] flex flex-col items-center justify-center">
                            <div className="textarea-container h-[65%] w-full">
                                <textarea placeholder="Write a comment..." className=" text-2xl comment-textarea w-[90%] h-[90%] mt-4 bg-white rounded-lg p-2 shadow-lg focus:ring-blue-500 focus:border-blue-500" value={commentReview} onChange={(e) => handleCommentChange(e.target.value)}></textarea>
                            </div>
                            <div className="flex items-center mb-2 h-[10%]" onClick={handleButtonClick}>
                                <Button text="Submit" />
                            </div>
                            <div className="w-full">
                                <AverageRating title='Overall Rating' rating={overallRating} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}