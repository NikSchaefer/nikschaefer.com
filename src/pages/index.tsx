import { StyledLi, Bookmark, Tags } from "@components/blog-posts";
import Layout from "@components/layout";
import Meta, { MetaType } from "@components/meta";
import { Heading, Paragraph, SubHeading } from "@styles/headings.theme";
import { Section } from "@styles/section.theme";
import StyledLink from "@styles/underline";
import { popularBlogs } from "config";
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
const StyledContainer = styled.ul`
	margin: 0;
	width: 100%;
	padding: 0;
`;
const Container = styled(Section)`
	font-family: "Mukta", sans-serif;
	p {
		margin: 0;
		font-size: 20px;
	}
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
	color: var(--paragraph);
`;
export const sizeOfSVG = "20px";
export const colorOfSVG = "var(--accent)";
export default function Home(): JSX.Element {
	return (
		<Layout>
			<Meta META={META} />
			<Container>
				<Heading>Hi, I'm Nik Schaefer</Heading>
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
				<SubHeading>Projects</SubHeading>
				<Paragraph>
					I usually work with the web platform but love to dabble in
					machine learning and its wonders.
					<br />
					<br />
					Here are some of my favorite personal projects I've worked
					on:
				</Paragraph>
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
				<SubHeading>Featured Articles</SubHeading>
				<StyledContainer>
					{popularBlogs.slice(0, 3).map((data) => (
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
