import Layout from "@components/layout";
import Meta, { MetaType } from "@components/meta";
import { snippetsFilePaths, SNIP_PATH } from "@lib/mdxUtils";
import { Container, Content } from "@styles/blog.theme";
import fs from "fs";
import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import { GetStaticProps, GetStaticPaths } from "next";
import path from "path";
import styled from "styled-components";

const StyledSection = styled.section`
	text-align: center;
	font-family: "Mukta", sans-serif;
	border-bottom: black 1px solid;
	h1 {
		font-size: 60px;
		font-weight: 400;
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
type receivingData = {
	source: never;
	frontMatter: {
		title: string;
		tag: string;
	};
};

export default function Slug({
	source,
	frontMatter,
}: receivingData): JSX.Element {
	const content = hydrate(source);
	const meta: MetaType = {
		title: frontMatter.title,
		description: frontMatter.title,
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
					</StyledSection>
					<article>{content}</article>
				</Content>
			</Container>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postFilePath = path.join(SNIP_PATH, `${String(params?.slug)}.mdx`);
	const source = fs.readFileSync(postFilePath);

	const { content, data } = matter(source);
	const mdxSource = await renderToString(content, {
		scope: data,
	});
	return {
		props: {
			source: mdxSource,
			frontMatter: data,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = snippetsFilePaths
		// eslint-disable-next-line require-unicode-regexp
		.map((path) => path.replace(/\.mdx?$/, ""))
		.map((slug) => ({ params: { slug } }));

	return {
		paths,
		fallback: false,
	};
};
