import { useEffect, useState } from "react";

import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import Sidebar from "../components/Sidebar";
import Spaces from "../components/Spaces";

import { AxiosResponse } from "axios";
import { getAxios } from "../axiosconfig";
import { SpaceData } from "../components/types";

export default function Catalogue() {
  const [allSpaces, setAllSpaces] = useState<(SpaceData | undefined)[][] | null>(null)
  const [data, setData] = useState<(SpaceData | undefined)[][] | null>(null);

  useEffect(() => {
    getAxios()
      .get('/catalogue')
      .then((res: AxiosResponse) => {
        const formattedData: (SpaceData | undefined)[][] = [];
        while (res.data.length) formattedData.push(res.data.splice(0, 5));

        const lastRow = formattedData[formattedData.length - 1];
        formattedData[formattedData.length - 1] = Array.from({ ...lastRow, length: 5 })

        setAllSpaces(formattedData);
        setData(formattedData);
      })
      .catch((error) => {
        alert(error);
      })
      .finally()
  }, []);

  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex w-200 w-[90%] h-screen justify-center items-center">
        <div className="flex flex-col bg-white w-[100%] h-[86%] text-black rounded-[30px] rounded-bl-none items-center">
          <Header />
          <Sidebar />
          <SearchInput allSpaces={allSpaces} setData={setData} />
          {allSpaces != null && data !== null && <Spaces data={data} />}
        </div>
      </div>
    </div>
  );
}