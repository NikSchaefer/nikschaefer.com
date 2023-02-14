import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";
import { RiScissorsLine } from "react-icons/ri";
import { VscProject } from "react-icons/vsc";

// google analytics measurement id
const GA_TRACKING_ID = "U-XXXXXX";
const IS_PRODUCTION = process.env.NODE_ENV === "production";
const IS_TEST = process.env.NODE_ENV === "test";
const IS_BROWSER = typeof window !== "undefined";
export { GA_TRACKING_ID, IS_PRODUCTION, IS_TEST, IS_BROWSER };

const paragraphAboutMe = `I'm a data science student with a passion for building scalable and maintainable software. I'm currently working as a software engineer at a startup in the mental health space. I'm also a big fan of open source and have contributed to many projects. I'm always looking for new opportunities to learn and grow.`;

const socials = {
	github: {
		link: "https://github.com/NikSchaefer",
		name: "GitHub",
	},
	linkedin: {
		link: "https://www.linkedin.com/in/nikschaefer/",
		name: "LinkedIn",
	},
	email: {
		link: "mailto:nikkschaefer@gmail.com",
		email: "nikkschaefer@gmail.com",
		name: "Email",
	},
};

type HeaderLink = {
	link: string;
	title: string;
	// eslint-disable-next-line @typescript-eslint/ban-types
	func: Function;
};

const HeaderLinks: HeaderLink[] = [
	{
		link: "/",
		title: "Home",
		func: () => {
			return <AiOutlineHome className="m-2" size="20px" />;
		},
	},
	{
		link: "/about",
		title: "About",
		func: () => {
			return <BsPerson className="m-2" size="20px" />;
		},
	},
	{
		link: "/blog",
		title: "Blog",
		func: () => {
			return <HiOutlineDocumentText className="m-2" size="20px" />;
		},
	},
	{
		link: "/projects",
		title: "Projects",
		func: () => {
			return <VscProject className="m-2" size="20px" />;
		},
	},
	{
		link: "/snippets",
		title: "Snippets",
		func: () => {
			return <RiScissorsLine className="m-2" size="20px" />;
		},
	},
];

const SecondaryLinks: HeaderLink[] = [];

type Blog = {
	link: string;
	title: string;
	date?: string;
	description: string;
	image: string;
	min: number;
	type: string[];
	className?: string;
};

const popularBlogs: Blog[] = [
	{
		title: "What's new in Machine Learning",
		link: "/blog/whats-new-in-machine-learning",
		image: "/blog/mlops.webp",
		description:
			"attending Google's I/O Machine Learning talks and Keynotes",
		min: 3,
		date: "May 2020",
		type: ["Machine Learning"],
		className: "from-[#D8B4FE] to-[#818CF8]",
	},
	{
		title: "5 database paradigms and their use cases",
		link: "/blog/5-database-paradigms-and-their-use-cases",
		image: "/blog/5-database-paradigms-and-their-use-cases.webp",
		description: "5 database paradigms what they are used for",
		min: 3,
		date: "May 2020",
		type: ["Database"],
		className: "from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]",
	},
	{
		title: "Why I use NextJS over Gatsby for Personal Projects",
		link: "/blog/why-I-choose-nextjs-over-gatsby",
		image: "/blog/nextjs.jpg",
		min: 2,
		description:
			"Here is a quick breakdown of the differences between NextJS and Gatsby and why I chose NextJS",
		date: "Jan 2020",
		type: ["NextJS", "GatsbyJS"],
		className: "from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]",
	},
];

const allBlogs: Blog[] = [
	{
		title: "What's new in Machine Learning",
		link: "/blog/whats-new-in-machine-learning",
		image: "/blog/mlops.webp",
		description:
			"attending Google's I/O Machine Learning talks and Keynotes",
		min: 3,
		date: "May 2020",
		type: ["Machine Learning"],
	},
	{
		title: "Dockerizing your Developer Workflow",
		link: "/blog/dockerizing-your-developer-workflow",
		image: "/blog/dockerizing-your-developer-workflow",
		description: "How to Dockerize your workflow and why",
		min: 3,
		date: "May 2020",
		type: ["Docker", "Tooling"],
	},

	{
		title: "Concurrency in Golang",
		link: "/blog/concurrency-in-golang",
		image: "/blog/concurrency-in-golang",
		description: "Concurrent Uses and How to in Golang",
		min: 3,
		date: "May 2020",
		type: ["Concurrency", "Golang"],
	},
	{
		title: "Golang Optimal File Structure",
		link: "/blog/golang-optimal-file-structure",
		image: "/blog/golang-optimal-file-structure",
		description: "Breakdown of popular golang file structures",
		min: 3,
		date: "May 2020",
		type: ["Golang"],
	},
	{
		title: "5 database paradigms and their use cases",
		link: "/blog/5-database-paradigms-and-their-use-cases",
		image: "/blog/5-database-paradigms-and-their-use-cases.webp",
		description: "5 database paradigms what they are used for",
		min: 3,
		date: "May 2020",
		type: ["Database"],
	},
	{
		title: "Pros and Cons of Serverless",
		link: "/blog/pros-and-cons-of-serverless",
		image: "/blog/pros-and-cons-of-serverless.webp",
		description: "Rundown of Going Serverless",
		min: 3,
		date: "May 2020",
		type: ["Serverless"],
	},

	{
		title: "Why Developers love Golang",
		link: "/blog/why-developers-love-golang",
		image: "/blog/codeonlaptop.jpg",
		description:
			"Golang(Go) is a programming language developed by Google in 2009.",
		min: 3,
		date: "March 2020",
		type: ["Golang"],
	},
	{
		title: "Why I use Django, and you should too",
		link: "/blog/why-django-is-great",
		image: "/blog/setting-up-django.jpg",
		description:
			"A quick look at the benefits and reasons why so many developers use Django",
		min: 2,
		date: "Feb 2020",
		type: ["Django", "Python"],
	},
	{
		title: "How to Use a .Dockerfile",
		link: "/blog/using-a-dockerfile",
		image: "/blog/docker.png",
		min: 2,
		description: "Quickly learn the basics of using a dockerfile",
		date: "Jan 2020",
		type: ["Docker"],
	},
	{
		title: "A Beginner's First Machine Learning Model",
		link: "/blog/beginner-machine-learning-model",
		image: "/blog/ml.webp",
		min: 2,
		description:
			"learn the basics of a machine learning model in tensorflow",
		date: "Jan 2020",
		type: ["Machine Learning"],
	},
	{
		title: "Rest API Authentication in Django",
		link: "/blog/rest-api-auth-django",
		image: "/blog/django-rest-auth.jpg",
		min: 2,
		date: "Jan 2020",
		description: "learn to set up a quick user auth server with django",
		type: ["Django", "Python"],
	},
	{
		title: "Why I use NextJS over Gatsby for Personal Projects",
		link: "/blog/why-I-choose-nextjs-over-gatsby",
		image: "/blog/nextjs.jpg",
		min: 2,
		description:
			"Here is a quick breakdown of the differences between NextJS and Gatsby and why I chose NextJS",
		date: "Jan 2020",
		type: ["NextJS", "GatsbyJS"],
	},
	{
		title: "The Basics of Webpack",
		link: "/blog/webpack-basics",
		image: "/blog/webpack.jpg",
		min: 2,
		description: "Quickly set up and use webpack for production in 2 min",
		date: "Jan 2020",
		type: ["Webpack"],
	},
	{
		title: "Why you should migrate to Typescript",
		link: "/blog/why-you-should-use-typescript",
		image: "/blog/typescript.svg",
		min: 2,
		description:
			"Learn why you should use typescript going forward as well as learn some typescript",
		date: "Jan 2020",
		type: ["Typescript"],
	},
];

export {
	HeaderLinks,
	allBlogs,
	popularBlogs,
	socials,
	SecondaryLinks,
	paragraphAboutMe,
};
export type { Blog, HeaderLink };
