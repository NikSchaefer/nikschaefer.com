import { Card, sortByOptions } from "@components/card";
import Layout from "@components/layout";
import clsx from "clsx";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";
import { Reorder, motion } from "framer-motion";

import projects from "../../../content/projects.json";

export default function Projects(): JSX.Element {
	const [projectData, setProjectData] = useState(projects);
	const [sortType, setSortType] = useState("All");
	const [disableRender, setDisableRender] = useState(false);

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
			<NextSeo title="Projects" />
			<section className="pt-[3em] container mx-auto">
				<motion.h1
					viewport={{ once: true }}
					initial={{ y: -10, opacity: 0 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2, delay: 0.1 }}
					className={clsx(
						"title mx-auto font-semibold text-center text-effect pb-3"
					)}
				>
					Projects.
				</motion.h1>
				<motion.p
					viewport={{ once: true }}
					initial={{ y: -10, opacity: 0 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2, delay: 0.5 }}
					className="mt-[2em] h4 text-center mx-auto w-[90%] max-w-[750px]"
				>
					A selection of my original creations—tools and
					websites—developed to be useful, entertaining, and sometimes
					wonderfully odd.
				</motion.p>
			</section>
			<section className="pt-[3em] max-w-[1400px] m-auto w-[95%] ">
				<ul className="flex items-center text-white my-5 relative overflow-x-scroll">
					{sortByOptions.map((value, i) => (
						<motion.button
							viewport={{ once: true }}
							className={clsx(
								value.name === sortType
									? "text-primary"
									: "text-gray-400",
								"my-2 mx-1 py-1 px-2 whitespace-nowrap"
							)}
							key={value.name}
							onClick={() => {
								setSortType(value.name);
								if (!disableRender) setDisableRender(true);
							}}
							type="button"
							aria-label={`sort by ${value.name}`}
							initial={{ y: -10, opacity: 0 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.2, delay: 0.5 + i * 0.1 }}
						>
							{value.name}{" "}
							<span className="absolute h7">
								{value.name === "All"
									? projects.length
									: projects.filter((project) =>
											project.tech.some((r) =>
												value.include.includes(r)
											)
									  ).length}
							</span>
							{i + 1 !== sortByOptions.length && (
								<span className="ml-4 text-gray-400">/</span>
							)}
						</motion.button>
					))}
				</ul>
				<Reorder.Group
					values={projectData}
					onReorder={setProjectData}
					className={clsx(
						"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
						"gap-6"
					)}
				>
					{projectData.map((data, i) => (
						<Reorder.Item key={data.github} value={data}>
							<Card
								{...data}
								index={i}
								disableRender={disableRender}
							/>
						</Reorder.Item>
					))}
				</Reorder.Group>
			</section>
		</Layout>
	);
}
