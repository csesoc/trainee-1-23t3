import SpaceCard from "./SpaceCard";
import { SpacesData } from "./types";

const Spaces = ({ data }: SpacesData) => {
	console.log(data);
	return (
		<div className="flex flex-col overflow-auto mt-2 px-5 w-[95%] h-[78%] items-center">
			{data.length === 0
				? <p className="mt-10 text-5xl text-black font-extrabold">No spaces found</p>
				: (data.map((row, i) => (
					<div
						key={i}
						className="flex flex-row gap-10 pt-5 w-[100%] h-[100%]"
					>
						{row.map((space, j) => (
							space === undefined
								? <div key={`row ${i}, col ${j}`} className="w-[20%] h-[15em]"></div>
								: <SpaceCard key={space.title} title={space.title} image={space.image} />
						))}
					</div>
				)))
			}
		</div>
	)
}

export default Spaces;