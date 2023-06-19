import { Article } from "@components/article";
import Layout from "@components/layout";
import rehypePrism from "@mapbox/rehype-prism";
import axios from "axios";
import type { GetStaticProps, GetStaticPaths } from "next";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";
import projects from "../../../content/projects.json";
import { Project } from "types";

type receivingData = {
	source: MDXRemoteSerializeResult;
	frontMatter: Project;
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
				tags={`#${frontMatter.tech[0]}`}
				github={frontMatter.github}
				link={frontMatter.external}
			/>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params?.slug;

	const project = projects.find((project) => project.slug === slug);

	if (!project) {
		return {
			notFound: true,
		};
	}

	const repo = project.github.split("/")[4];

	const url = `https://raw.githubusercontent.com/NikSchaefer/${repo}/main/README.md`;
	const readme = await axios.get(url);

	const imageUrl = `https://raw.githubusercontent.com/NikSchaefer/${repo}/main/`;

	const d = readme.data.replaceAll('src="./', `src="${imageUrl}`);
	const mdxSource = await serialize(d, {
		scope: project,
		mdxOptions: {
			rehypePlugins: [rehypePrism],
		},
	});
	return {
		props: {
			source: mdxSource,
			frontMatter: project,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = projects.map((project) => {
		return {
			params: {
				slug: project.slug,
			},
		};
	});

	return {
		paths: paths,
		fallback: false,
	};
};
