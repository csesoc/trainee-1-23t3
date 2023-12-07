interface SpaceCard {
	title: string,
	image: string
};

const SpaceCard = ({ title, image }: SpaceCard) => {
	const handleClick = () => {
		alert(`Clicked on \"${title}\" card`)
	};

	return (
		<div className="flex flex-col overflow-hidden w-[20%] h-[15em] bg-[#2b0452] rounded-[30px] hover:cursor-pointer" onClick={handleClick}>
			<img src={image} className="h-[80%]" />
			<p className="py-3 text-white text-xl font-extrabold">{title}</p>
		</div>
	)
}

export default SpaceCard;