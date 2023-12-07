import SpaceCard from "./SpaceCard";
import spaceImage from "../assets/spaces/unsw-library.jpg";

//////// HARDCODED DATA, DELETE LATER. ////////
const data = [
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

const Spaces = () => {
	return (
		<div className="flex flex-col overflow-auto mt-2 px-5 w-[95%] h-[78%] items-center">
			{data.map((row, i) => (
				<div key={`row ${i}`} className="flex flex-row gap-10 pt-5 w-[100%] h-[100%]">
					{row.map(space => (
						<SpaceCard key={space.title} title={space.title} image={space.image} />
					))}
				</div>
			))}
		</div>
	)
}

export default Spaces;