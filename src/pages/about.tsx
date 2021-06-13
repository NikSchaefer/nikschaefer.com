/* eslint-disable sonarjs/no-identical-functions */
import Layout from "@components/layout";
import Meta, { MetaType } from "@components/meta";
import { BsCode } from "react-icons/bs";
import styled from "styled-components";

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
const Disclaimer = styled.h3`
	background-color: #f7f7f7;
	width: fit-content;
	margin: auto;
	padding: 10px;
	font-weight: 400;
	font-size: 20px;
	a {
		color: #006eff;
		:hover {
			text-decoration: underline;
		}
	}
`;
const JobContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: left;
`;
const Node = styled.div`
	width: 90%;
	max-width: 900px;
	margin: 20px auto;
	border: 1px solid var(--border);
	box-sizing: border-box;
	padding: 20px;
	.top {
		display: flex;
		justify-content: space-between;
		.title {
			font-size: 20px;
			display: flex;
			align-items: center;
			svg {
				margin: 0 10px;
			}
		}
	}
	.link {
		margin: 10px 40px;
		a {
			color: #0077ff;
			:hover {
				text-decoration: underline;
			}
		}
	}
	@media (max-width: 800px) {
		padding: 10px;
		.top {
			flex-direction: column;
			margin: 20px 0;
		}
		ul {
			margin: 0;
			padding: 0;
			li {
				margin: 10px 0;
			}
		}
		.link {
			margin: 20px 10px;
		}
	}
`;
const ToolsAndTechnologies = styled.ul`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	font-size: 14.5px;

	h4 {
		font-weight: 400;
		flex-basis: 100%;
	}
`;
const Tag = styled.li`
	background-color: #f2f8ff;
	width: fit-content;
	margin: 4px 10px;
	padding: 5px 10px;
	border-radius: 5px;
	color: #0084ff;
`;
const Title = styled.h1`
	text-align: left;
	width: 90%;
	margin: auto;
	max-width: 900px;
	font-weight: 600;
	font-size: 1.875rem;
	line-height: 2.25rem;
`;
export default function About(): JSX.Element {
	return (
		<Layout>
			<Meta META={META} />
			<h1>About</h1>
			<Disclaimer>
				For more information, contact me at{" "}
				<a href="mailto:nikkschaefer@gmail.com">
					nikkschaefer@gmail.com
				</a>
			</Disclaimer>
			<section>
				<Title>Studies</Title>
				<JobContainer>
					{studies
						.sort((a, b) => {
							return b.date - a.date;
						})
						.map((data) => (
							<Node key={data.date}>
								<div className="top">
									<span className="title">
										<BsCode size="28px" />
										{data.title}
									</span>
									<span>{data.range}</span>
								</div>
								<div className="link">
									<a href={data.url}>{data.company}</a>
								</div>
								<ul>
									{data.content.map((value) => (
										<li key={value}>- {value}</li>
									))}
								</ul>
								<ToolsAndTechnologies>
									<h4>Tools used/learned:</h4>
									{data.tools.map((value) => (
										<Tag key={value}>{value}</Tag>
									))}
								</ToolsAndTechnologies>
							</Node>
						))}
				</JobContainer>
			</section>
			<section>
				<Title>Work</Title>
				<JobContainer>
					{jobs
						.sort((a, b) => {
							return b.date - a.date;
						})
						.map((data) => (
							<Node key={data.date}>
								<div className="top">
									<span className="title">
										<BsCode size="28px" />
										{data.title}
									</span>
									<span>{data.range}</span>
								</div>
								<div className="link">
									<a href={data.url}>{data.company}</a>
								</div>
								<ul>
									{data.content.map((value) => (
										<li key={value}>- {value}</li>
									))}
								</ul>
								<ToolsAndTechnologies>
									<h4>Tools used/learned:</h4>
									{data.tools.map((value) => (
										<Tag key={value}>{value}</Tag>
									))}
								</ToolsAndTechnologies>
							</Node>
						))}
				</JobContainer>
			</section>
		</Layout>
	);
}
