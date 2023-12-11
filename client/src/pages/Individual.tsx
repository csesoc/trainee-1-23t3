import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import CommentCard from "../components/CommentCard"
import AttributeRating from "../components/AttributeRating";
import AverageRating from "../components/AverageRating";
import Button from '../components/Button';
export default function Individual() {
  // useNavigate
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const image = queryParams.get('image') ?? '';
  const title = queryParams.get('title') ?? '';
  const url = `/review-page?title=${encodeURIComponent(title)}&image=${encodeURIComponent(image)}`;
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
  const averageRating = data.reduce((acc, review) => acc + review.rating, 0) / data.length;
  const numberOfReviews = data.length;


  const handleButtonClick = () => {
    navigate('/review-page');
  }
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
              <div>
                <span className="flex items-start ml-8 pt-2 cursor-pointer text-zinc-500 text-base" onClick={handleBack}>Back</span>
              </div>
              <div className="flex items-start ml-14 py-1">
                <h1 className="text-5xl text-left font-bold">{decodeURIComponent(title)}</h1>
              </div>
              <div className="flex flex-col items-center justify-between pt-4">
                <AttributeRating attribute="Noise" rating={4} />
                <AttributeRating attribute="Convenience" rating={3} />
                <AttributeRating attribute="Privacy" rating={4.5} />
              </div>
              <div className="flex items-center justify-center pt-1">
                <img src={decodeURIComponent(image)} alt={decodeURIComponent(title)} className="rounded-3xl object-contain h-6/12 w-6/12" />
              </div>
            </div>
            <div className="w-1/2 bg-[#AFDCF6] flex flex-col items-center justify-center">
              <div className="flex items-center mt-4 h-[10%]" onClick={handleButtonClick}>
                <a href={url}>
                  <Button text="Add a review" />
                </a>
              </div>
              <div className="overflow-scroll mt-4 h-[65%]">
                {data.map((entry, index) => (
                  <CommentCard
                    key={index}
                    username={entry.user}
                    text={entry.comment}
                    rating={entry.rating}
                  />
                ))}
              </div>
              <div className="w-full">
                <AverageRating title='Average Rating' rating={averageRating} noOfReviews={numberOfReviews} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}