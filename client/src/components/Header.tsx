const Header = () => {
	const username = localStorage.getItem("username");

	return (
		<div className="flex bg-[#5a72bc] w-[100%] h-[10%] text-white rounded-t-[30px] text-left items-center justify-between">
			<p className="ml-5 text-3xl font-extrabold">StuHDySpaces</p>
			{username
				? <>
					<p className="mr-5 text-gray-100 text-xl font-extrabold">
						You are logged in as "{username}".
					</p>
				</>
				: <>
					<div className="flex mr-5 gap-5">
						<a
							className="text-xl font-extrabold"
							href="/login">
							Login
						</a>
						<a
							className="text-xl font-extrabold"
							href="/register">
							Register
						</a>
					</div>
				</>
			}
		</div>
	)
}

export default Header;