import Layout from "@components/layout";
import Meta, { MetaType } from "@components/meta";
import { FaDiscord } from "react-icons/fa";
import styled from "styled-components";

import json from "../../../content/featured.json";

const META: MetaType = {
	title: "Portoflio | Nik Schaefer",
	lang: "en-us",
	description: "",
	image: "/logo.png",
	url: "https://nikschaefer.tech/activity",
};

const StyledCard = styled.div`
	display: flex;
	text-align: left;
	flex-direction: column;
	width: 250px;
	height: 300px;
	border: solid rgba(0, 0, 0, 0.219) 1px;
	margin: 10px;
	div {
		height: 55%;
		box-sizing: border-box;
		padding: 10px;
		h2 {
			font-weight: 500;
		}
		p {
			font-family: "Mukta", sans-serif;
			color: #313131;
		}
	}

	.image {
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
const Container = styled.section`
	display: flex;
	flex-wrap: wrap;
	width: 90%;
	max-width: 600px;
	margin: auto;
	flex: 1;
`;
export default function Activity(): JSX.Element {
	return (
		<Layout>
			<Meta META={META} />
			<h1>Portfolio</h1>
			<Container>
				{json.map((data) => (
					<StyledCard key={data.github}>
						<div className="image">
							<FaDiscord size="70px" color="#5765f2" />
						</div>
						<div>
							<h2>{data.title}</h2>
							<p>{data.short}</p>
						</div>
					</StyledCard>
				))}
			</Container>
			<section>
				<h2>All Projects</h2>
				<div />
				<div />
			</section>
		</Layout>
	);
}
