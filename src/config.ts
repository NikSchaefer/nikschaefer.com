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

type BlogLink = {
	link: string;
	title: string;
	date?: string;
	description: string;
	image: string;
	min: number;
};

const BlogLinks: BlogLink[] = [
	{
		title: "Why Developers love Golang",
		link: "/blog/why-developers-love-golang",
		image: "/blog/codeonlaptop.jpg",
		description:
			"Golang(Go) is a programming language developed by Google in 2009.",
		min: 3,
		date: "March 2020",
	},
	{
		title: "Why I use Django, and you should too",
		link: "/blog/why-django-is-great",
		image: "/blog/setting-up-django.jpg",
		description:
			"A quick look at the benefits and reasons why so many developers use Django",
		min: 2,
		date: "Feb 2020",
	},
	{
		title: "How to Use a .Dockerfile",
		link: "/blog/using-a-dockerfile",
		image: "/blog/docker.png",
		min: 2,
		description: "Quickly learn the basics of using a dockerfile",
		date: "Jan 2020",
	},
	{
		title: "A Beginner's First Machine Learning Model",
		link: "/blog/beginner-machine-learning-model",
		image: "/blog/ml.webp",
		min: 2,
		description:
			"learn the basics of a machine learning model in tensorflow",
		date: "Jan 2020",
	},
	{
		title: "Rest API Authentication in Django",
		link: "/blog/rest-api-auth-django",
		image: "/blog/django-rest-auth.jpg",
		min: 2,
		date: "Jan 2020",
		description: "learn to set up a quick user auth server with django",
	},
	{
		title: "Why I use NextJS over Gatsby for Personal Projects",
		link: "/blog/why-I-choose-nextjs-over-gatsby",
		image: "/blog/nextjs.jpg",
		min: 2,
		description:
			"Here is a quick breakdown of the differences between NextJS and Gatsby andwhy I chose NextJS",
		date: "Jan 2020",
	},
	{
		title: "The Basics of Webpack",
		link: "/blog/webpack-basics",
		image: "/blog/webpack.jpg",
		min: 2,
		description: "Quickly set up and use webpack for production in 2 min",
		date: "Jan 2020",
	},
	{
		title: "Why you should migrate to Typescript",
		link: "/blog/why-you-should-use-typescript",
		image: "/blog/typescript.svg",
		min: 2,
		description:
			"Learn why you should use typescript going forward as well as learn some typescript",
		date: "Jan 2020",
	},
];

export { HeaderLinks, BlogLinks };
