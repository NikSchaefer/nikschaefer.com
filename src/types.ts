export type Project = {
	title: string;
	github: string;
	external?: string;
	tech: string[];
	slug: string;
	text: string;
	image?: string;
	index?: number;
};

export interface Job {
	date: number;
	title: string;
	company: string;
	location: string;
	range: string;
	url: string;
	content: string[];
	tools: string[];
}
