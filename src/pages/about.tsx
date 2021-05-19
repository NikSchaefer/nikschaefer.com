import Layout from "@components/layout";
import Meta, { MetaType } from "@components/meta";
import { BiCodeAlt } from "react-icons/bi";
import { BsCode } from "react-icons/bs";
import styled from "styled-components";

import jobs from "../../content/jobs.json";
import timeline from "../../content/timeline.json";

const META: MetaType = {
	title: "About | Nik Schaefer",
	lang: "en-us",
	description:
		"I'm Nik, self-taught full-stack developer and hobbyist programmer student based in Minnesota, US I've been enjoying programming since I first began. I love supporting open source and making my own projects. I have taken on various roles between design, research and development. I am currently learning Golang and its many uses in my free time.",
	image: "/logo.png",
	url: "https://nikschaefer.tech/about",
};
const Disclaimer = styled.h3`
	background-color: #f5f5f5;
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
const Timeline = styled.section`
	width: 90%;
	max-width: 500px;
	margin: auto;
`;
const Container = styled.div`
	text-align: left;
	position: relative;
	.icon {
		position: absolute;
		left: -40px;
	}
	.date {
		position: absolute;
		right: 0;
		top: 0;
	}
	h4,
	p {
		margin: 5px;
	}
	margin: 40px 0;
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
`;
const ToolsAndTechnologies = styled.ul`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
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
			<Timeline>
				<h2>Timeline</h2>
				{timeline.map((data) => (
					<Container key={data.title}>
						<BiCodeAlt className="icon" size="30px" />
						<h4>{data.title}</h4>
						<p>{data.description}</p>
						<h5 className="date">{data.date}</h5>
					</Container>
				))}
			</Timeline>
			<section>
				<h2>My</h2>
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
									<h4>Tools used/learnt:</h4>
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
