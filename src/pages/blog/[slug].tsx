import Layout from "@components/layout";
import { postFilePaths, POSTS_PATH } from "@lib/mdxUtils";
import {
	Container,
	Content,
	StyledTitle,
	AuthorSection,
} from "@styles/blog.theme";
import fs from "fs";
import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import path from "path";
import { BiTimeFive } from "react-icons/bi";

type receivingData = {
	source: never;
	frontMatter: {
		title: string;
		author: string;
		datePub: string;
		dateEdit: string;
		description: string;
	};
	wordCount: number;
};

export default function Slug({
	source,
	frontMatter,
	wordCount,
}: receivingData): JSX.Element {
	const content = hydrate(source);
	return (
		<Layout>
			<Container>
				<Head>
					<title>{frontMatter.title} | Blog</title>
					<meta
						name="description"
						content={frontMatter.description}
					/>
				</Head>
				<Content>
					<StyledTitle>{frontMatter.title}</StyledTitle>
					<AuthorSection>
						<h2>{frontMatter.description}</h2>
						<h4>
							{frontMatter.datePub}
							<BiTimeFive
								style={{ margin: "0 10px" }}
								size={20}
							/>
							{Math.ceil(wordCount / 275)} Min Read
						</h4>
					</AuthorSection>
					<article>{content}</article>
				</Content>
			</Container>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postFilePath = path.join(POSTS_PATH, `${String(params?.slug)}.mdx`);
	const source = fs.readFileSync(postFilePath);

	const { content, data } = matter(source);
	const mdxSource = await renderToString(content, {
		scope: data,
	});
	return {
		props: {
			source: mdxSource,
			frontMatter: data,
			wordCount: content.split(" ").length,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = postFilePaths
		// eslint-disable-next-line require-unicode-regexp
		.map((path) => path.replace(/\.mdx?$/, ""))
		.map((slug) => ({ params: { slug } }));

	return {
		paths,
		fallback: false,
	};
};
