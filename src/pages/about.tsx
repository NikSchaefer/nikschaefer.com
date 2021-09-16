import { H1, H2, Section } from "@components/design";
import Layout from "@components/layout";
import Meta, { MetaType } from "@components/meta";
import clsx from "clsx";
import { AiFillStar } from "react-icons/ai";
import { BsCode } from "react-icons/bs";

import jobs from "../../content/jobs.json";
import studies from "../../content/studies.json";

const META: MetaType = {
	title: "About | Nik Schaefer",
	lang: "en-us",
	description:
		"I'm Nik, self-taught full-stack developer and hobbyist programmer student based in Minnesota, US I've been enjoying programming since I first began. I love supporting open source and making my own projects. I have taken on various roles between design, research and development. I am currently learning Golang and its many uses in my free time.",
	image: "/logo.png",
	url: "https://nikschaefer.tech/about",
};

function Node(props: {
	data: {
		title: string;
		range: string;
		company: string;
		content: string[];
		tools: string[];
		url: string;
	};
}) {
	const { data } = props;
	return (
		<div className="box-border w-full max-w-4xl p-6 my-5 border md:p-4">
			<div className="flex flex-row justify-between xs:flex-col sm:my-2">
				<span className="flex flex-wrap items-center text-lg font-medium">
					<BsCode className="mr-2" size="28px" />
					{data.title}
				</span>
				<span>{data.range}</span>
			</div>
			<div className="my-2">
				<a className="slide" href={data.url}>
					{data.company}
				</a>
			</div>
			<h3 className="flex items-center">
				<AiFillStar className="mr-2" size="20px" />{" "}
				{data.content.length} Achievements
			</h3>
			<ul className="p-0 m-0 my-3 text-base">
				{data.content.map((value) => (
					<li key={value}>- {value}</li>
				))}
			</ul>
			<h3>Tools used/learned:</h3>
			<ul className="flex flex-wrap text-sm">
				{data.tools.map((value) => (
					<li
						className={clsx(
							"w-auto px-2 py-1 m-1 text-blue-500",
							"bg-blue-200 bg-opacity-25 rounded-sm"
						)}
						key={value}
					>
						{value}
					</li>
				))}
			</ul>
		</div>
	);
}

export default function About(): JSX.Element {
	return (
		<Layout>
			<Meta META={META} />
			<Section>
				<H1 class="mb-10 mt-10">About Me</H1>
				<p>
					👋, I'm Nik, self-taught full-stack developer and hobbyist
					programmer student based in Minnesota, US I've been enjoying
					programming since I first began. I love supporting open
					source and making my own projects. I have taken on various
					roles between design, research and development.
				</p>
			</Section>
			<Section id="studies">
				<H2>Studies</H2>
				<div className="flex-col items-center justify-center">
					{studies
						.sort((a, b) => {
							return b.date - a.date;
						})
						.map((data) => (
							<Node key={data.title} data={data} />
						))}
				</div>
			</Section>
			<Section id="work">
				<H2>Work</H2>
				<div className="flex-col items-center justify-center">
					{jobs
						.sort((a, b) => {
							return b.date - a.date;
						})
						.map((data) => (
							<Node key={data.title} data={data} />
						))}
				</div>
			</Section>
		</Layout>
	);
}
