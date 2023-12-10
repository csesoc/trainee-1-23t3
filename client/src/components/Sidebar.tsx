import homeIcon from "../assets/home-icon.png";
import logoutIcon from "../assets/logout-icon.png";

const Sidebar = () => {
	const handleHome = () => {
		alert("You clicked the home button");
	};

	const handleLogout = () => {
		localStorage.removeItem("email");
		window.location.reload();
	};

	return (
		<div className="flex flex-col pb-10 gap-7 absolute left-[2%] bottom-[7%] bg-[#d9d9d9] w-[3%] h-[77.6%] text-black rounded-l-[30px] items-center justify-end">
			<button className="w-6 h-6" onClick={handleHome}>
				<img src={homeIcon} />
			</button>
			<button className="w-6 h-6" onClick={handleLogout}>
				<img src={logoutIcon} />
			</button>
		</div>
	)
}

export default Sidebar;