import { Card, sortByOptions } from "@components/card";
import { H1, Section } from "@components/design";
import Layout from "@components/layout";
import clsx from "clsx";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";

import projects from "../../../content/projects.json";

function Portfolio(): JSX.Element {
	const [projectData, setProjectData] = useState(projects);
	const [sortType, setSortType] = useState("All");

	const getSortedProjects = (type: string) => {
		if (type === "All") {
			setProjectData(projects);
			return;
		}

		const includes = sortByOptions.find((r) => r.name === type)?.include;
		if (includes === undefined) {
			return;
		}
		const sorted = projects.filter((project) =>
			project.tech.some((r) => includes.includes(r))
		);
		setProjectData(sorted);
	};

	useEffect(() => {
		getSortedProjects(sortType);
	}, [sortType]);

	return (
		<Layout>
			<NextSeo title="Portfolio" />
			<Section class="text-center">
				<H1>Portfolio</H1>
				<p>Online collection of my major projects</p>
				<ul className="flex justify-center items-center flex-wrap dark:text-white">
					{sortByOptions.map((value) => (
						<button
							className={clsx(
								value.name === sortType
									? "border-blue-500"
									: "",
								"my-2 mx-1 border-2 py-1 px-2 text-base"
							)}
							key={value.name}
							onClick={() => {
								setSortType(value.name);
							}}
							type="button"
							aria-label={`sort by ${value.name}`}
						>
							{value.name}{" "}
							<span>
								{value.name === "All"
									? projects.length
									: projects.filter((project) =>
											project.tech.some((r) =>
												value.include.includes(r)
											)
									  ).length}
							</span>
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
						<Card key={data.github} {...data} />
					))}
				</div>
			</section>
		</Layout>
	);
}

export default Portfolio;
