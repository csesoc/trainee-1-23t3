import homeIcon from "../assets/home-icon.png";
import logoutIcon from "../assets/logout-icon.png";

const Sidebar = () => {
	const handleHome = () => {
		alert("You clicked the home button");
	};

	const handleLogout = () => {
		alert("You clicked the logout button");
	};

	return (
		<div className="flex flex-col pb-10 gap-3 absolute left-[2%] bottom-[7%] bg-[#d9d9d9] w-[3%] h-[77.6%] text-black rounded-l-[30px] items-center justify-end">
			<button className="w-8 h-8" onClick={handleHome}>
				<img src={homeIcon} />
			</button>
			<button className="w-8 h-8" onClick={handleLogout}>
				<img src={logoutIcon} />
			</button>
		</div>
	)
}

export default Sidebar;