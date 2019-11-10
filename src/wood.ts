export type TreeSpecies = string;

export type TreeType = "deciduous" | "conifer";

export default interface Wood {
	id: string;
	ranger_id: string;
	name: string;
	location: string;
	size_square_meters: number;
	//ranger: Ranger
	composition: WoodComposition;
	//filter_types: [FilterType]
	//issues: [Issue]
}

export interface WoodComposition {
	//wood_id: string;
	//date_recorded: datetime;
	percentage_deciduous: number;
	percentage_conifer: number;
	percentage_dead_trees: number;
	//wood: Wood;
	//species: [TreeSpecies];
}

export interface Issue {
	id: number;
	wood_id: string;
	//date: datetime
	Issue_type_id: number;
	description: string;
	latitude: number;
	longitude: number;
	//wood: Wood
	//issueType: IssueType
}
