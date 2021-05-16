import Layout from "@components/layout";
import Meta, { MetaType } from "@components/meta";
import Image from "next/image";
import styled from "styled-components";

import json from "../../../content/featured.json";
import projects from "../../../content/projects.json";

const META: MetaType = {
	title: "Portoflio | Nik Schaefer",
	lang: "en-us",
	description: "",
	image: "/logo.png",
	url: "https://nikschaefer.tech/activity",
};

export const StyledCard = styled.div`
	display: flex;
	text-align: left;
	flex-direction: column;
	width: 240px;
	height: 310px;
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
			color: #313131;
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
const Project = styled.div`
	width: 20%;
	background-color: var(--secondary);
	text-align: left;
	border: 1px solid #e5e7eb;
	box-sizing: border-box;
	padding: 10px;
	:hover {
		background-color: var(--grey);
		cursor: pointer;
	}
`;
export default function Portfolio(): JSX.Element {
	return (
		<Layout>
			<Meta META={META} />
			<h1>Portfolio</h1>
			<Container>
				{json.map((data) => (
					<StyledCard key={data.github}>
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
				))}
			</Container>
			<section>
				<h2>All Projects</h2>
				<div />
				<ProjectContainer>
					{projects.map((data) => (
						<Project key={data.github}>
							<h4>{data.title}</h4>
							<p>{data.text}</p>
						</Project>
					))}
				</ProjectContainer>
			</section>
		</Layout>
	);
}
