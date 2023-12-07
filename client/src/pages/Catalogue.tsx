import { useState } from "react";

import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import Sidebar from "../components/Sidebar";
import Spaces from "../components/Spaces";

import spaceImage from "../assets/spaces/unsw-library.jpg";

//////// HARDCODED DATA, DELETE LATER. ////////
const allSpaces = [
  [
    {
      title: "Space1",
      image: spaceImage
    },
    {
      title: "Space2",
      image: spaceImage
    },
    {
      title: "Space3",
      image: spaceImage
    },
    {
      title: "Space4",
      image: spaceImage
    },
    {
      title: "Space5",
      image: spaceImage
    },
  ],
  [
    {
      title: "Space6",
      image: spaceImage
    },
    {
      title: "Space7",
      image: spaceImage
    },
    {
      title: "Space8",
      image: spaceImage
    },
    {
      title: "Space9",
      image: spaceImage
    },
    {
      title: "Space10",
      image: spaceImage
    },
  ],
  [
    {
      title: "Space11",
      image: spaceImage
    },
    {
      title: "Space12",
      image: spaceImage
    },
    {
      title: "Space13",
      image: spaceImage
    },
    {
      title: "Space14",
      image: spaceImage
    },
    {
      title: "Space15",
      image: spaceImage
    },
  ]
];

//////////////////////////////////////////////

export default function Catalogue() {
  const [data, setData] = useState(allSpaces);

  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex w-200 w-[90%] h-screen justify-center items-center">
        <div className="flex flex-col bg-white w-[100%] h-[86%] text-black rounded-[30px] rounded-bl-none items-center">
          <Header />
          <Sidebar />
          <SearchInput data={allSpaces} setData={setData} />
          <Spaces data={data} />
        </div>
      </div>
    </div>
  );
}