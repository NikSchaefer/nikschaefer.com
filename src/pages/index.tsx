import Layout from "@components/layout";
import Meta, { MetaType } from "@components/meta";
import { BlogLinks } from "config";
// import Image from "next/image";
import Link from "next/link";
import { GoMarkGithub } from "react-icons/go";
import { RiLinkedinBoxFill } from "react-icons/ri";
import styled from "styled-components";

import json from "../../content/featured.json";
// import { Container as Box, StyledCard, size } from "./portfolio";

const META: MetaType = {
	title: "Nik Schaefer",
	lang: "en-us",
	description: `I'm Nik, self-taught full-stack developer and hobbyist programmer student based in Minnesota, US

I've been enjoying programming since I first began. I love supporting open source and making my own projects. I have taken on various roles between design, research and development. I am currently learning Golang and its many uses in my free time.`,
	image: "/logo.png",
	url: "https://nikschaefer.tech",
};
const StyledLi = styled.li`
	text-align: left;
	margin: 10px 0;
	a {
		font-size: 24px;
		color: var(--accent);
	}
	h3 {
		margin: 0;
		color: rgba(0, 0, 0, 0.774);
		font-weight: 400;
	}
	h2 {
		margin: 10px 0;
		font-weight: 400;
		font-size: 20px;
	}
`;
const StyledContainer = styled.ul`
	margin: 0;
	width: 100%;
	padding: 0;
`;
const Section = styled.section`
	width: 90%;
	margin: 40px auto;
	max-width: 800px;
	text-align: left;
	font-size: 1.1rem;
	line-height: 1.75;
	font-style: normal;
	font-family: "Roboto", sans-serif;
`;
const Container = styled(Section)`
	font-family: "Mukta", sans-serif;
	h1 {
		font-size: 60px;
		margin-bottom: 5px;
		@media (max-width: 800px) {
			font-size: 40px;
		}
	}
	p {
		margin: 0;
		font-size: 20px;
	}
	.href-link {
		color: var(--accent);
		text-decoration: underline;
		:hover {
			text-decoration: none;
		}
	}
`;

const Heading2 = styled.h2`
	font-size: 40px;
	margin: 0;
`;

const SocialLinks = styled.div`
	margin: 20px 0;
	display: flex;
	align-items: center;
	a {
		margin: 10px;
		:hover {
			cursor: pointer;
		}
	}
`;
const StyledA = styled.a`
	:hover {
		svg {
			fill: ${(props) => props.color};
		}
	}
`;
const StyledButton = styled.a`
	font-size: 20px;
	padding: 5px 10px;
	border: var(--border) solid 1px;
	border-radius: 2px;
	:hover {
		background-color: var(--secondary);
	}
`;
const AllArtices = styled.a`
	text-align: center;
	margin: auto;
	color: var(--accent);
	:hover {
		text-decoration: underline;
	}
`;
const StyledLinkDiv = styled.div`
	display: flex;
	justify-content: center;
`;
const StyledList = styled.ul`
	list-style: unset;
	font-size: 20px;
	li {
		::marker {
			unicode-bidi: isolate;
		}
		a {
			color: var(--accent);
			:hover {
				text-decoration: underline;
			}
		}
	}
`;
const FootLinks = styled(Section)`
	span {
		text-align: center;
	}
	display: flex;
	flex-direction: column;
	justify-content: center;
	a {
		color: var(--accent);
		:hover {
			text-decoration: underline;
		}
	}
	hr {
		opacity: 0.6;
		border: 0;
		border-color: #cbd5e0;
		border-style: solid;
		border-bottom-width: 1px;
		width: 100%;
		margin-top: 2rem;
		margin-bottom: 2rem;
	}
`;
export default function Home(): JSX.Element {
	return (
		<Layout>
			<Meta META={META} />
			<Container>
				<h1>Hi, I'm Nik Schaefer</h1>
				<p>
					I'm a full stack developer, machine learning student, and
					open source enthusiast. You've found my personal slice of
					the internet.{" "}
					<Link href="/about">
						<a className="href-link">Learn more about me</a>
					</Link>{" "}
					or{" "}
					<Link href="mailto:nikkschaefer@gmail.com">
						<a className="href-link">get in touch</a>
					</Link>{" "}
					while your here.
				</p>
				<SocialLinks>
					<StyledButton href="/about">Get In Touch</StyledButton>
					<StyledA
						color="black"
						href="https://github.com/NikSchaefer"
						aria-label="Github"
					>
						<GoMarkGithub size="35px" color="#333333" />
					</StyledA>
					<StyledA
						color="#0a65c3"
						href="https://www.linkedin.com/in/nikschaefer/"
						aria-label="LinkedIn"
					>
						<RiLinkedinBoxFill size="40px" color="#333333" />
					</StyledA>
				</SocialLinks>
			</Container>
			<Section>
				<Heading2>Projects</Heading2>
				<p>
					I usually work with the web platform but love to dabble in
					machine learning and its wonders.
					<br />
					<br />
					Here are some of my favorite personal projects I've worked
					on:
				</p>
				<StyledList>
					{json.map((value) => (
						<li key={value.date}>
							<Link href={`/portfolio/${value.slug}`}>
								<a>{value.title}</a>
							</Link>{" "}
							- {value.short}
						</li>
					))}
				</StyledList>
				<StyledLinkDiv>
					<Link href="/portfolio" passHref>
						<AllArtices>All Projects</AllArtices>
					</Link>
				</StyledLinkDiv>
			</Section>
			<Section>
				<Heading2>Featured Articles</Heading2>
				<StyledContainer>
					{BlogLinks.slice(0, 3).map((data) => (
						<StyledLi key={data.link}>
							<Link href={data.link}>
								<a>{data.title}</a>
							</Link>
							<h3>{data.date}</h3>
							<h2>{data.description}</h2>
						</StyledLi>
					))}
				</StyledContainer>
				<StyledLinkDiv>
					<Link href="/blog" passHref>
						<AllArtices>All Articles</AllArtices>
					</Link>
				</StyledLinkDiv>
			</Section>
			<FootLinks>
				<hr aria-orientation="horizontal" />
				<span>
					Learn more about me
					<br />
					<Link href="/about">
						<a>Work</a>
					</Link>{" "}
					|{" "}
					<Link href="/portfolio">
						<a>Portfolio</a>
					</Link>
				</span>
			</FootLinks>
		</Layout>
	);
}
/* 
<Section>
	<Heading2>Projects</Heading2>
	<Box>
		{json.map((data) => (
			<StyledCard
				href={`/portfolio/${String(data.slug)}`}
				key={data.github}
			>
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
	</Box>
</Section> 
*/
