import Layout from "@components/layout";
import Meta, { MetaType } from "@components/meta";
import StyledLink from "@styles/underline";
import { BlogLinks } from "config";
import Link from "next/link";
import { BsBookmark } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { RiLinkedinBoxFill } from "react-icons/ri";
import styled from "styled-components";

import json from "../../content/featured.json";

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
	border: solid 1px rgb(203, 213, 224);
	border-radius: 0.375rem;
	transition: top 0.15s ease-out 0s;
	padding: 1rem;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
		rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
	margin-bottom: 2rem;
	position: relative;
	top: 0;

	h1 {
		font-size: 24px;
		margin: 0;
	}
	h3 {
		margin: 10px 0;
		font-weight: 400;
		font-size: 20px;
	}
	div {
		display: flex;
		h2 {
			margin: 0;
			color: rgba(0, 0, 0, 0.308);
			font-weight: 400;
			font-size: 0.875rem;
			color: #718096;
		}
	}
	:hover {
		top: -5px;
	}
`;
const Tags = styled.div`
	display: flex;
	margin: 0 10px;
	span {
		font-size: 0.75rem;
		padding: 0 0.5rem;
		border-radius: 0.375rem;
		background: #ddf2ff;
		color: #002451;
		margin: 2px;
		font-weight: 500;
	}
`;
const Bookmark = styled.div`
	position: absolute;
	right: 10px;
	top: -10px;
	svg {
		background-color: var(--primary);
		fill: var(--text);
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
`;

const Heading2 = styled.h2`
	font-family: inherit;
	margin: 0;
	margin-bottom: 1rem;
	font-weight: 700;
	letter-spacing: -0.025em;
	color: rgb(0, 0, 0);
	font-size: 2.25rem;
	line-height: 2.5rem;
`;

export const SocialLinks = styled.div`
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
export const StyledA = styled.a`
	display: flex;
	align-items: center;
	background-color: var(--secondary);
	border-radius: 6px;
	padding: 5px 10px;
	svg {
		padding-right: 10px;
	}
	:hover {
		background-color: var(--primary);
	}
`;
const AllArtices = styled(StyledLink)`
	text-align: center;
	margin: auto;
`;
const StyledLinkDiv = styled.div`
	display: flex;
	justify-content: center;
`;
const StyledList = styled.ul`
	list-style: unset;
	font-size: 20px;
	@media (max-width: 600px) {
		padding-left: 20px;
	}
`;
const FootLinks = styled(Section)`
	span {
		text-align: center;
	}
	display: flex;
	flex-direction: column;
	justify-content: center;

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
const AboutMe = styled.h2`
	margin: 0;
	max-width: 70ch;
	font-size: 1.1rem;
	font-weight: inherit;
	line-height: 1.75;
	color: rgb(75, 85, 99);
`;
export const sizeOfSVG = "20px";
export const colorOfSVG = "var(--accent)";
export default function Home(): JSX.Element {
	return (
		<Layout>
			<Meta META={META} />
			<Container>
				<h1>Hi, I'm Nik Schaefer</h1>
				<AboutMe>
					I'm a full stack developer, machine learning student, and
					open source enthusiast. You've found my personal slice of
					the internet.{" "}
					<Link href="/about" passHref>
						<StyledLink>Learn more about me</StyledLink>
					</Link>{" "}
					or{" "}
					<Link href="mailto:nikkschaefer@gmail.com" passHref>
						<StyledLink>get in touch</StyledLink>
					</Link>{" "}
					while your here.
				</AboutMe>
				<SocialLinks>
					<StyledA
						target="_blank"
						href="https://github.com/NikSchaefer"
						rel="noreferrer"
						aria-label="Github"
					>
						<GoMarkGithub size={sizeOfSVG} color={colorOfSVG} />
						Github
					</StyledA>
					<StyledA
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/nikschaefer/"
						aria-label="LinkedIn"
					>
						<RiLinkedinBoxFill
							size={sizeOfSVG}
							color={colorOfSVG}
						/>
						LinkedIn
					</StyledA>
					<StyledA
						href="mailto:nikkschaefer@gmail.com"
						aria-label="LinkedIn"
					>
						<HiOutlineMail size={sizeOfSVG} color={colorOfSVG} />
						Email
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
							<Link href={`/portfolio/${value.slug}`} passHref>
								<StyledLink>{value.title}</StyledLink>
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
								<a>
									<h1>{data.title}</h1>
									<div>
										<h2>
											{data.date} • {data.min} min
										</h2>
										<Tags>
											{data.type.map((string) => (
												<span key={string}>
													{string}
												</span>
											))}
										</Tags>
									</div>
									<h3>{data.description}</h3>
									<Bookmark>
										<BsBookmark size="25px" />
									</Bookmark>
								</a>
							</Link>
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
					<Link href="/about" passHref>
						<StyledLink>Work</StyledLink>
					</Link>{" "}
					|{" "}
					<Link href="/portfolio" passHref>
						<StyledLink>Portfolio</StyledLink>
					</Link>
				</span>
			</FootLinks>
		</Layout>
	);
}

export { StyledLi, Tags, Bookmark };
