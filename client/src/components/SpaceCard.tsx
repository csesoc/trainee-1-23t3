interface SpaceCard {
	title: string,
	image: string
}
const SpaceCard = ({ title, image }: SpaceCard) => {
	const url = `/individual?title=${encodeURIComponent(title)}&image=${encodeURIComponent(image)}`;
	return (
        <a href={url} className="flex flex-col overflow-hidden w-[20%] h-[15em] bg-[#2b0452] rounded-[30px] hover:cursor-pointer no-underline">
            <img src={image} className="h-[80%]" alt={title} />
            <p className="py-3 text-white text-xl font-extrabold">{title}</p>
        </a>
    );
}

export default SpaceCard;