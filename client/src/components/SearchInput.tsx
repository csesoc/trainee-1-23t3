import { useState } from "react";

import searchIcon from "../assets/search-icon.png";
import { SpaceData } from "./types";

const SearchInput = ({ allSpaces, setData }: { allSpaces: any, setData: Function }) => {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = () => {
		let data1d: SpaceData[] = [].concat(...allSpaces);

		const filteredData1d = data1d.filter(space => {
			const title = space.title.toLowerCase();
			const query = searchQuery.toLowerCase();
			return title.includes(query);
		});

		const filteredData = [];
		while (filteredData1d.length) filteredData.push(filteredData1d.splice(0, 5));

		const lastRow = filteredData[filteredData.length - 1];
		filteredData[filteredData.length - 1] = Array.from({ ...lastRow, length: 5 })

		setData(filteredData);
	};

	return (
		<div className="relative w-[30%] mt-5">
			<input className="w-[100%] text-2xl pb-3 focus:outline-none bg-transparent border-b-2 border-black" placeholder="Search for a space" onChange={e => setSearchQuery(e.target.value)} />
			<button className="absolute -top-5 -end-10 w-20 h-20" onClick={handleSearch}>
				<img src={searchIcon} />
			</button>
		</div>
	)
}

export default SearchInput;