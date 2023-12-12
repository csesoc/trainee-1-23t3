import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import CommentCard from "../components/CommentCard"
import AttributeRating from "../components/AttributeRating";
import AverageRating from "../components/AverageRating";
import Button from '../components/Button';
import { AxiosResponse } from "axios";
import { getAxios } from "../axiosconfig";
import { SpaceData } from '../components/types';
import BackButton from '../components/BackButton';
export default function Individual() {
  // useNavigate
  const navigate = useNavigate();
  const location = useLocation();
  const { title } = location.state || {};
  const username = localStorage.getItem("username");
  // useState
  const [averageRating, setAverageRating] = useState(0);
  const [noOfReviews, setNoOfReviews] = useState(0);
  const [spaceData, setSpaceData] = useState<SpaceData | null>(null);
  const [showReviewSuccess, setShowReviewSuccess] = useState(false);

  useEffect(() => {
    if (location.state?.reviewSubmitted) {
      setShowReviewSuccess(true);
      setTimeout(() => {
        setShowReviewSuccess(false);
      }, 5000);
    }
  }, [location.state]);
  const spaceTitle = title;

  useEffect(() => {
    getAxios().get(`/space/${encodeURIComponent(spaceTitle)}`)
      .then((response: AxiosResponse) => {
        setSpaceData(response.data);
        const newAverage = (response.data.privacy + response.data.convenience + response.data.noise) / 3;
        setAverageRating(newAverage);
        setNoOfReviews(response.data.reviews.length);
      })
      .catch(error => {
        console.error("Error fetching space data: ", error);
      });
  }, [spaceTitle]);

  // Check if data is loaded
  if (!spaceData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <span className="text-2xl font-bold">Loading...</span>
        </div>
      </div>

    )
  }

  const handleButtonClick = () => {
    if (username) {
      // Navigate to ReviewPage with necessary state
      navigate('/review-page', { state: { spaceTitle: title, spaceImage: spaceData.image } });
    } else {
      navigate('/login', { state: { loggedIn: false } });
    }
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
                <BackButton className="flex ml-8 pt-2 cursor-pointer text-zinc-500 text-base" path="/">
                  Back
                </BackButton>
              </div>
              <div className="flex items-start ml-14 py-1">
                <h1 className="text-5xl text-left font-bold">{decodeURIComponent(title)}</h1>
              </div>
              <div className="flex flex-col items-center justify-between pt-4">
                <AttributeRating attribute="Noise" rating={spaceData?.noise} />
                <AttributeRating attribute="Convenience" rating={spaceData?.convenience} />
                <AttributeRating attribute="Privacy" rating={spaceData?.privacy} />

              </div>
              <div className="flex items-center justify-center">
                <img src={spaceData.image} alt="Space-image" className="rounded-3xl object-cover h-5/12 w-5/12" />
              </div>
            </div>
            <div className="w-1/2 bg-[#AFDCF6] flex flex-col items-center justify-center">
              <div className="flex items-center mt-4 h-[10%]" onClick={handleButtonClick}>
                <Button text="Add a review" />
              </div>
              {showReviewSuccess && (
                <div className=" top-5 right-5 bg-green-200 text-green-800 px-4 py-2 rounded-md">
                  Review submitted successfully!
                </div>
              )}
              <div className="overflow-scroll mt-4 h-[65%]">
                {spaceData?.reviews.map((entry, index) => (
                  <CommentCard
                    key={index}
                    username={entry.user}
                    text={entry.comment}
                    rating={[entry.privacy, entry.noise, entry.convenience]}
                  />
                ))}
              </div>
              <div className="w-full">
                <AverageRating title='Average Rating' rating={averageRating} noOfReviews={noOfReviews} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}