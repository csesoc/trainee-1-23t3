const Header = () => {
	return (
		<div className="flex bg-[#5a72bc] w-[100%] h-[10%] text-white rounded-t-[30px] text-left items-center justify-between">
			<p className="ml-5 text-3xl font-extrabold">StuHDySpaces</p>
			<div className="flex mr-5 gap-5">
				<a
					className="text-xl font-extrabold"
					href="/login">
					Login
				</a>
				<a
					className="text-xl font-extrabold"
					href="/login">
					Register
				</a>
			</div>
		</div>
	)
}

export default Header;