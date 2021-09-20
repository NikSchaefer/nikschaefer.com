import { Article } from "@components/article";
import Layout from "@components/layout";
import { postFilePaths, POSTS_PATH } from "@lib/mdxUtils";
import rehypePrism from "@mapbox/rehype-prism";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps, GetStaticPaths } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";
import path from "path";

type receivingData = {
	source: never;
	frontMatter: {
		title: string;
		author: string;
		datePub: string;
		dateEdit: string;
		description: string;
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
				tags="#tailwindcss"
				date={frontMatter.datePub}
			/>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postFilePath = path.join(POSTS_PATH, `${String(params?.slug)}.mdx`);
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
	const paths = postFilePaths
		// eslint-disable-next-line require-unicode-regexp
		.map((path) => path.replace(/\.mdx?$/, ""))
		.map((slug) => ({ params: { slug } }));

	return {
		paths,
		fallback: false,
	};
};
