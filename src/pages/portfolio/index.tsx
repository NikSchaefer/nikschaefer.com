import Card from "@components/card";
import { H1, Section } from "@components/design";
import Layout from "@components/layout";
import { useState } from "react";
import styled from "styled-components";

import projects from "../../../content/projects.json";

type Project = {
	title: string;
	github: string;
	external?: string;
	tech: string[];
	text: string;
	slug: string;
};

type SortOf = {
	name: string;
	include: string[];
	content: Project[];
};

const ProjectContainer = styled.div`
	display: flex;
	flex-flow: wrap row;
	justify-content: center;
	width: 95%;
	max-width: 1200px;
	margin: auto;
	row-gap: 1rem;
	column-gap: 1rem;
`;
const StyledList = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	button {
		margin: 10px 5px;
		border: solid 2px var(--border);
		padding: 5px 10px;
		outline: 0;
		background-color: transparent;
		font-size: 16px;
		color: var(--paragraph);
		:hover {
			cursor: pointer;
		}
	}
	.active {
		border-color: #00a2ff;
	}
`;
const sortByOptions: SortOf[] = [
	{ name: "All", include: [], content: projects },
	{
		name: "Machine Learning",
		include: ["Tensorflow", "tensorflow"],
		content: [],
	},
	{
		name: "Web Dev",
		include: ["Javascript", "Typescript", "React", "Next.js"],
		content: [],
	},
	{
		name: "Python",
		include: ["Python", "Tensorflow", "Pandas"],
		content: [],
	},
	{
		name: "Golang",
		include: ["Go", "Golang", "go", "golang"],
		content: [],
	},
];

for (const option of sortByOptions) {
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
				<StyledList>
					{sortByOptions.map((value) => (
						<button
							className={value.name === sortBy ? "active" : ""}
							key={value.name}
							onClick={() => {
								setSortBy(value.name);
								setProjectData(value.content);
							}}
							type="button"
							aria-label={`sort by ${value.name}`}
						>
							{value.name} <span>{value.content.length}</span>
						</button>
					))}
				</StyledList>
			</Section>
			<section>
				<ProjectContainer>
					{projectData.map((data) => (
						<Card project={data} key={data.github} />
					))}
				</ProjectContainer>
			</section>
		</Layout>
	);
}
