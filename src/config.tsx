import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";
import { VscProject } from "react-icons/vsc";

const GA_TRACKING_ID = "G-Q0WYKN3RLJ";
const IS_PRODUCTION = process.env.NODE_ENV === "production";
const IS_TEST = process.env.NODE_ENV === "test";
const IS_BROWSER = typeof window !== "undefined";
export { GA_TRACKING_ID, IS_PRODUCTION, IS_TEST, IS_BROWSER };

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
	func: Function;
};

const HeaderLinks: HeaderLink[] = [
	{
		link: "/",
		title: "Hub",
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
		link: "/projects",
		title: "Projects",
		func: () => {
			return <VscProject className="m-2" size="20px" />;
		},
	},
	{
		link: "/blog",
		title: "Blog",
		func: () => {
			return <HiOutlineDocumentText className="m-2" size="20px" />;
		},
	},
];

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

const allBlogs: Blog[] = [
	{
		title: "What makes a University Life Ideal? A Statistical Perspective",
		link: "/projects/university-ideal-life",
		image: "/blog/mlops.webp",
		description:
			"",
		min: 3,
		date: "July 2023",
		type: ["Machine Learning"],
	},
	{
		title: "Unveiling Machine Learning's Latest Advances",
		link: "/blog/whats-new-in-machine-learning",
		image: "/blog/mlops.webp",
		description:
			"attending Google's I/O Machine Learning talks and Keynotes",
		min: 3,
		date: "May 2020",
		type: ["Machine Learning"],
	},
	{
		title: "Exploring Database Paradigms and Their Use Cases",
		link: "/blog/5-database-paradigms-and-their-use-cases",
		image: "/blog/5-database-paradigms-and-their-use-cases.webp",
		description: "5 database paradigms what they are used for",
		min: 3,
		date: "May 2020",
		type: ["Database"],
	},
	{
		title: "NextJS vs. Gatsby",
		link: "/blog/why-I-choose-nextjs-over-gatsby",
		image: "/blog/nextjs.jpg",
		min: 2,
		description:
			"Here is a quick breakdown of the differences between NextJS and Gatsby and why I chose NextJS",
		date: "Jan 2020",
		type: ["NextJS", "GatsbyJS"],
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
		title: "File Structure for Golang Projects",
		link: "/blog/golang-optimal-file-structure",
		image: "/blog/golang-optimal-file-structure",
		description: "Breakdown of popular golang file structures",
		min: 3,
		date: "May 2020",
		type: ["Golang"],
	},

	{
		title: "Pros and Cons of Serverless Architecture",
		link: "/blog/pros-and-cons-of-serverless",
		image: "/blog/pros-and-cons-of-serverless.webp",
		description: "Rundown of Going Serverless",
		min: 3,
		date: "May 2020",
		type: ["Serverless"],
	},

	{
		title: "The Allure of Golang",
		link: "/blog/why-developers-love-golang",
		image: "/blog/codeonlaptop.jpg",
		description:
			"Golang(Go) is a programming language developed by Google in 2009.",
		min: 3,
		date: "March 2020",
		type: ["Golang"],
	},

	{
		title: "Hello World of Machine Learning",
		link: "/blog/beginner-machine-learning-model",
		image: "/blog/ml.webp",
		min: 2,
		description:
			"learn the basics of a machine learning model in tensorflow",
		date: "Jan 2020",
		type: ["Machine Learning"],
	},

	{
		title: "Why you might want to use Typescript",
		link: "/blog/why-you-should-use-typescript",
		image: "/blog/typescript.svg",
		min: 2,
		description:
			"Learn why you should use typescript going forward as well as learn some typescript",
		date: "Jan 2020",
		type: ["Typescript"],
	},
];

export { HeaderLinks, allBlogs, socials };
export type { Blog, HeaderLink };
