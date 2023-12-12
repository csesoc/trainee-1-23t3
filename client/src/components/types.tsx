export interface SpaceData {
	title: string,
	image: string,
	noise: number;
	privacy: number;
	convenience: number;
	reviews: Review[];
}

interface Review {
	noise: number;
	privacy: number;
	convenience: number;
	user: string;
	comment: string;
}
export interface SpacesData {
	data: (SpaceData | undefined)[][]
}
