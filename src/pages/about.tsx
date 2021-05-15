import Layout from "@components/layout";
import Meta, { MetaType } from "@components/meta";
import { BiCodeAlt } from "react-icons/bi";
import styled from "styled-components";

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
				<h2>My Technologies</h2>
			</section>
		</Layout>
	);
}
