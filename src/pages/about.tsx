import Layout from "@components/layout";
import Meta, { MetaType } from "@components/meta";
import { Heading, SubHeading, Paragraph } from "@styles/headings.theme";
import { Section } from "@styles/section.theme";
import StyledLink from "@styles/underline";
import { AiFillStar } from "react-icons/ai";
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
const Node = styled.div`
	width: 90%;
	max-width: 900px;
	margin: 20px auto;
	border: 1px solid var(--border);
	box-sizing: border-box;
	padding: 20px 20px;
	.content {
		margin: 0px;
		padding: 0;
		color: var(--about-text);
		font-size: 14px;
	}
	.top {
		display: flex;
		justify-content: space-between;
		.title {
			font-size: 18px;
			font-weight: 500;
			display: flex;
			align-items: center;
			flex-flow: row wrap;
			color: var(--title);
			svg {
				margin-right: 10px;
			}
		}
	}
	.link {
		margin: 10px 0;
	}
	@media (max-width: 800px) {
		padding: 10px;
		.top {
			flex-direction: column;
			margin: 20px 0;
		}
	}
	h3 {
		font-weight: 400;
		font-size: 16px;
		display: flex;
		align-items: center;
		svg {
			margin-right: 8px;
		}
	}
`;
const Tag = styled.li`
	background-color: var(--tag-background);
	width: fit-content;
	margin: 4px 6px;
	padding: 5px 10px;
	border-radius: 5px;
	color: #0069e0;
	:hover {
		background-color: var(--tag-hover);
	}
`;
export default function About(): JSX.Element {
	return (
		<Layout>
			<Meta META={META} />
			<Section>
				<Heading>About Me</Heading>
				<Paragraph>
					👋, I'm Nik, self-taught full-stack developer and hobbyist
					programmer student based in Minnesota, US I've been enjoying
					programming since I first began. I love supporting open
					source and making my own projects. I have taken on various
					roles between design, research and development.
				</Paragraph>
			</Section>
			<Section id="studies">
				<SubHeading>Studies</SubHeading>
				<div className="flex-col items-center justify-center">
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
								<h3>
									<AiFillStar size="20px" />{" "}
									{data.content.length} Achievements
								</h3>
								<ul className="content">
									{data.content.map((value) => (
										<li key={value}>- {value}</li>
									))}
								</ul>
								<h3>Tools used/learned:</h3>
								<ul className='flex flex-wrap text-sm'>
									{data.tools.map((value) => (
										<Tag key={value}>{value}</Tag>
									))}
								</ul>
							</Node>
						))}
				</div>
			</Section>
			<Section id="work">
				<SubHeading>Work</SubHeading>
				<div className="flex-col items-center justify-center">
					{jobs
						.sort((a, b) => {
							return b.date - a.date;
						})
						.map((data) => (
							<Node key={data.company}>
								<div className="top">
									<span className="title">
										<BsCode size="28px" />
										{data.title}
									</span>
									<span>{data.range}</span>
								</div>
								<div className="link">
									<StyledLink href={data.url}>
										{data.company}
									</StyledLink>
								</div>
								<h3>
									<AiFillStar size="20px" />{" "}
									{data.content.length} Achievements
								</h3>
								<ul className="content">
									{data.content.map((value) => (
										<li key={value}>- {value}</li>
									))}
								</ul>
								<h3>Tools used/learned:</h3>
								<ul className='flex flex-wrap text-sm'>
									{data.tools.map((value) => (
										<Tag key={value}>{value}</Tag>
									))}
								</ul>
							</Node>
						))}
				</div>
			</Section>
		</Layout>
	);
}
