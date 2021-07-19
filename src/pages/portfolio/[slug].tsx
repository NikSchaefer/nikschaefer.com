/* eslint-disable react/jsx-no-useless-fragment */
import Layout from "@components/layout";
import Meta, { MetaType } from "@components/meta";
import { portfolioFilePaths, PORT_PATH } from "@lib/mdxUtils";
import rehypePrism from "@mapbox/rehype-prism";
import { Container, Content } from "@styles/blog.theme";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import { BiCodeAlt } from "react-icons/bi";
import { SiGithub } from "react-icons/si";
import styled from "styled-components";

const StyledSection = styled.section`
	text-align: center;
	font-family: "Mukta", sans-serif;
	h1 {
		font-size: 60px;
		margin: 10px;
	}
	.links {
		display: flex;
		justify-content: center;
		align-items: center;
		.github-btn {
			background-color: black;
			color: white !important;
			:hover {
				background-color: #292929;
			}
		}
	}
`;
const Btn = styled.a`
	background-color: whitesmoke;
	padding: 10px 20px;
	margin: 10px;
	border-radius: 0.25rem;
	display: flex;
	align-items: center;
	border: var(--border) solid 1px;
	color: black !important;
	svg {
		margin: 0 5px;
	}
	:hover {
		background-color: white;
		cursor: pointer;
	}
`;
const UL = styled.ul`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
`;
const Tag = styled.li`
	background-color: var(--tag-background);
	width: fit-content;
	margin: 5px 10px;
	padding: 5px 10px;
	border-radius: 5px;
	color: rgb(0, 105, 224);
`;
type receivingData = {
	source: never;
	frontMatter: {
		title: string;
		description: string;
		link: string;
		github: string;
		tags: string;
	};
};

export default function Slug({
	source,
	frontMatter,
}: receivingData): JSX.Element {
	const meta: MetaType = {
		title: frontMatter.title,
		description: frontMatter.description,
		lang: "en-us",
		image: "/logo.png",
		url: "nikschaefer.tech/portfolio/",
	};
	return (
		<Layout>
			<Container>
				<Content>
					<Meta META={meta} />
					<StyledSection>
						<h1>{frontMatter.title}</h1>
						<p>{frontMatter.description}</p>
						<div className="links">
							{frontMatter.link === "" ? (
								<></>
							) : (
								<Btn href={frontMatter.link}>
									<BiCodeAlt size="30px" />
									Website
								</Btn>
							)}
							<Btn
								href={frontMatter.github}
								className="github-btn"
							>
								<SiGithub />
								Github
							</Btn>
						</div>
						<h4>MADE WITH</h4>
						<UL>
							{frontMatter.tags.split(",").map((value) => (
								<Tag key={value}>{value}</Tag>
							))}
						</UL>
					</StyledSection>
					<article>
						<MDXRemote {...source} />
					</article>
				</Content>
			</Container>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postFilePath = path.join(PORT_PATH, `${String(params?.slug)}.mdx`);
	const source = fs.readFileSync(postFilePath);

	const { content, data } = matter(source);
	const mdxSource = await serialize(content, {
		scope: data,
		mdxOptions: {
			rehypePlugins: [rehypePrism],
		},
	});
	return {
		props: {
			source: mdxSource,
			frontMatter: data,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = portfolioFilePaths
		// eslint-disable-next-line require-unicode-regexp
		.map((path) => path.replace(/\.mdx?$/, ""))
		.map((slug) => ({ params: { slug } }));

	return {
		paths,
		fallback: false,
	};
};
