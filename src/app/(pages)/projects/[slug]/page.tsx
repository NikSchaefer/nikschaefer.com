// app/projects/[slug]/page.tsx

import { Article } from "@components/article";
import { serialize } from "next-mdx-remote/serialize";
import rehypePrism from "@mapbox/rehype-prism";
import axios from "axios";
import projects from "../../../../../content/projects.json";
import { notFound } from "next/navigation";

async function getProjectData(slug: string) {
	const project = projects.find((project) => project.slug === slug);
	if (!project) {
		notFound();
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
		source: mdxSource,
		frontMatter: project,
	};
}

export async function generateStaticParams() {
	return projects.map((project) => ({
		slug: project.slug,
	}));
}

export default async function ProjectPage({
	params,
}: {
	params: { slug: string };
}) {
	const { source, frontMatter } = await getProjectData(params.slug);

	return (
		<>
			<Article
				source={source}
				title={frontMatter.title}
				tags={`#${frontMatter.tech[0]}`}
				github={frontMatter.github}
				link={frontMatter.external}
			/>
		</>
	);
}
