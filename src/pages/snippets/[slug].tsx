import { Article } from "@components/article";
import Layout from "@components/layout";
import { snippetsFilePaths, SNIP_PATH } from "@lib/mdxUtils";
import rehypePrism from "@mapbox/rehype-prism";
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
		tag: string;
	};
};

export default function Slug({
	source,
	frontMatter,
}: receivingData): JSX.Element {
	return (
		<Layout>
			<NextSeo title={frontMatter.title} />
			<section>
				<Article
					source={source}
					title={frontMatter.title}
					tags=""
				/>
			</section>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postFilePath = path.join(SNIP_PATH, `${String(params?.slug)}.mdx`);
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
	const paths = snippetsFilePaths
		// eslint-disable-next-line require-unicode-regexp
		.map((path) => path.replace(/\.mdx?$/, ""))
		.map((slug) => ({ params: { slug } }));

	
	console.log(paths);
	
	return {
		paths,
		fallback: false,
	};
};
