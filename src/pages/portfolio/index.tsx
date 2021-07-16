import Layout from "@components/layout";
import Meta, { MetaType } from "@components/meta";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiGithub } from "react-icons/fi";
import styled from "styled-components";

import json from "../../../content/featured.json";
import projects from "../../../content/projects.json";

const META: MetaType = {
	title: "Portfolio | Nik Schaefer",
	lang: "en-us",
	description: " My Projects and things I've built",
	image: "/logo.png",
	url: "https://nikschaefer.tech/portfolio",
};

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

export const StyledCard = styled.a`
	display: flex;
	text-align: left;
	flex-direction: column;
	width: 240px;
	height: 380px;
	border: solid rgba(0, 0, 0, 0.219) 1px;
	margin: 10px;
	.text {
		background-color: var(--secondary);
		height: 55%;
		box-sizing: border-box;
		padding: 10px;
		h2 {
			font-weight: 500;
		}
		p {
			font-family: "Mukta", sans-serif;
			color: var(--about-text);
			margin: unset;
			font-size: unset;
		}
	}

	.image {
		background-color: var(--primary);
		height: 45%;
		justify-content: center;
		align-items: center;
		display: flex;
		border-bottom: solid rgba(0, 0, 0, 0.219) 1px;
	}
	:hover {
		box-shadow: 0 5px 5px rgba(68, 68, 68, 0.205);
		cursor: pointer;
	}
`;
export const Container = styled.section`
	display: flex;
	flex-wrap: wrap;
	width: 90%;
	justify-content: center;
	max-width: 1100px;
	margin: auto;
	flex: 1;
`;
export const size = 80;

const ProjectContainer = styled.div`
	display: flex;
	flex-flow: wrap row;
	justify-content: center;
	width: 90%;
	max-width: 1100px;
	margin: auto;
	row-gap: 1rem;
	column-gap: 1rem;
`;
const Project = styled.a`
	width: 20%;
	min-width: 300px;
	background-color: var(--secondary);
	box-sizing: border-box;
	padding: 10px;
	position: relative;
	border-radius: 10px;
	:hover {
		background-color: var(--grey);
		cursor: pointer;
		a {
			transform: rotate(20deg);
		}
	}
	h4 {
		font-weight: 500;
	}
	a {
		position: absolute;
		top: 5px;
		right: 5px;
		padding: 5px;
		transition: transform 0.3s ease;
		:hover {
			transform: rotate(40deg);
		}
	}
	i {
		height: 12px;
		width: 12px;
		display: inline-block;
		background-color: #ff5f57;
		border-radius: 50%;
		position: absolute;
		top: 6px;
		left: 10px;
		::before,
		::after {
			content: " ";
			top: 0;
			position: absolute;
			height: 12px;
			width: 12px;
			border-radius: 50%;
			display: block;
		}
		:before {
			left: 16px;
			background-color: #ffbd2e;
		}
		::after {
			left: 32px;
			background-color: #28ca41;
		}
	}
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
		color: var(--text);
		:hover {
			cursor: pointer;
		}
	}
	.active {
		border-color: #00a2ff;
	}
`;
const StyledSpan = styled.span`
	font-size: 15px;
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
			<Meta META={META} />
			<h1>Portfolio</h1>
			<Container>
				{json.map((data) => (
					<Link
						href={`/portfolio/${String(data.slug)}`}
						key={data.github}
						passHref
					>
						<StyledCard>
							<div className="image">
								<Image
									height={size}
									width={size}
									alt={data.title}
									src={`/featured/${String(data.svg)}`}
								/>
							</div>
							<div className="text">
								<h2>{data.title}</h2>
								<p>{data.short}</p>
							</div>
						</StyledCard>
					</Link>
				))}
			</Container>
			<section>
				<h2>All Projects</h2>
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
							{value.name}{" "}
							<StyledSpan>{value.content.length}</StyledSpan>
						</button>
					))}
				</StyledList>
				<ProjectContainer>
					{projectData.map((data) => (
						<Link
							href={`/portfolio/${String(data.slug)}`}
							key={data.github}
							passHref
						>
							<Project>
								<a href={data.github}>
									<FiGithub size="20px" />
								</a>
								<h4>{data.title}</h4>
								<p>{data.text}</p>
								<i />
							</Project>
						</Link>
					))}
				</ProjectContainer>
			</section>
		</Layout>
	);
}
