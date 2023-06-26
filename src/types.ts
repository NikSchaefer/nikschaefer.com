export type Project = {
	title: string;
	github: string;
	external?: string;
	tech: string[];
	slug: string;
	text: string;
	image?: string;
	index?: number;
	disableRender?: boolean;
	short?: string;
};

export interface Job {
	title: string;
	company: string;
	location: string;
	range: string;
	url: string;
	logo: string;
	content: string[];
	tools: string[];
}
