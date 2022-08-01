import { Article } from "@components/article";
import Layout from "@components/layout";
import { portfolioFilePaths, PORT_PATH } from "@lib/mdxUtils";
import rehypePrism from "@mapbox/rehype-prism";
import axios from "axios";
import fs from "fs";
import matter from "gray-matter";
import type { GetStaticProps, GetStaticPaths } from "next";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";
import path from "path";

type receivingData = {
	source: MDXRemoteSerializeResult;
	frontMatter: {
		title: string;
		description: string;
		link: string;
		github: string;
		tags: string;
		useReadme?: boolean;
	};
};

export default function Slug({
	source,
	frontMatter,
}: receivingData): JSX.Element {
	return (
		<Layout>
			<NextSeo title={frontMatter.title} />
			<Article
				source={source}
				title={frontMatter.title}
				tags={`#${frontMatter.tags.split(",")[0]}`}
				github={frontMatter.github}
				link={frontMatter.link}
			/>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postFilePath = path.join(PORT_PATH, `${String(params?.slug)}.mdx`);
	const source = fs.readFileSync(postFilePath);
	const { content, data } = matter(source);

	if (data.useReadme) {
		const url = `https://raw.githubusercontent.com/NikSchaefer/${
			data.github.split("/")[4]
		}/main/README.md`;
		const readme = await axios.get(url);

		const d = readme.data;
		const mdxSource = await serialize(d, {
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
	}

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
