import { Card, sortByOptions } from "@components/card";
import { H1, Section } from "@components/design";
import Layout from "@components/layout";
import clsx from "clsx";
import { useState } from "react";

import projects from "../../../content/projects.json";

const sortOptions = sortByOptions;
sortOptions[0].content = projects;

for (const option of sortOptions) {
	for (const project of projects) {
		if (project.tech.some((r) => option.include.includes(r))) {
			option.content.push(project);
		}
	}
}

export default function Portfolio(): JSX.Element {
	const [projectData, setProjectData] = useState(projects);
	const [sortBy, setSortBy] = useState("All");
	return (
		<Layout>
			<Section class="text-center">
				<H1>Portfolio</H1>
				<p>Online collection of my major projects</p>
				<ul className="flex justify-center items-center flex-wrap dark:text-white">
					{sortByOptions.map((value) => (
						<button
							className={clsx(
								value.name === sortBy ? "focused" : "",
								"my-2 mx-1 border-2 py-1 px-2 text-base"
							)}
							key={value.name}
							onClick={() => {
								setSortBy(value.name);
								// eslint-disable-next-line @typescript-eslint/ban-ts-comment
								// @ts-ignore
								setProjectData(value.content);
							}}
							type="button"
							aria-label={`sort by ${value.name}`}
						>
							{value.name} <span>{value.content.length}</span>
						</button>
					))}
				</ul>
			</Section>
			<section>
				<div
					className={clsx(
						"flex flex-wrap justify-center",
						"max-w-[1200px] m-auto w-[95%] gap-4"
					)}
				>
					{projectData.map((data) => (
						<Card project={data} key={data.github} />
					))}
				</div>
			</section>
		</Layout>
	);
}
