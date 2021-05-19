import Layout from "@components/layout";
import { portfolioFilePaths, PORT_PATH } from "@lib/mdxUtils";
import fs from "fs";
import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import { GetStaticProps, GetStaticPaths } from "next";
import path from "path";

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
	frontMatter
}:
receivingData): JSX.Element {
	const content = hydrate(source);
	return <Layout>{content}</Layout>;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postFilePath = path.join(PORT_PATH, `${String(params?.slug)}.mdx`);
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
	const paths = portfolioFilePaths
		// eslint-disable-next-line require-unicode-regexp
		.map((path) => path.replace(/\.mdx?$/, ""))
		.map((slug) => ({ params: { slug } }));

	return {
		paths,
		fallback: false,
	};
};
