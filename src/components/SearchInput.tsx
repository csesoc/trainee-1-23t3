import { useState } from "react";
import searchIcon from "../assets/search-icon.png";


const SearchInput = () => {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = () => {
		alert(`You cliked the search button with query \"${searchQuery}\"`);
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