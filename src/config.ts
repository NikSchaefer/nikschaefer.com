// google analytics measurement id
const GA_TRACKING_ID = "U-XXXXXX";
const IS_PRODUCTION = process.env.NODE_ENV === "production";
const IS_TEST = process.env.NODE_ENV === "test";
const IS_BROWSER = typeof window !== "undefined";
export { GA_TRACKING_ID, IS_PRODUCTION, IS_TEST, IS_BROWSER };

type HeaderLink = {
	link: string;
	title: string;
};

const HeaderLinks: HeaderLink[] = [
	{
		link: "/",
		title: "Home",
	},
	{
		link: "/about",
		title: "About",
	},
	{
		link: "/blog",
		title: "Blog",
	},
	{
		link: "/portfolio",
		title: "Portfolio",
	},
	{
		link: "/activity",
		title: "Activity",
	},
];

export { HeaderLinks };
