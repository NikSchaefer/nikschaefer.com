import { Article } from "@components/article";
import { postFilePaths, POSTS_PATH } from "@lib/mdxUtils";
import rehypePrism from "@mapbox/rehype-prism";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";

type PageProps = {
	params: { slug: string };
};

type FrontMatter = {
	title: string;
	author: string;
	datePub: string;
	dateEdit: string;
	description: string;
};

export default async function Page({ params }: PageProps) {
	const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
	const source = fs.readFileSync(postFilePath);
	const { content, data } = matter(source);
	const mdxSource = await serialize(content, {
		scope: data,
		mdxOptions: {
			rehypePlugins: [rehypePrism],
		},
	});

	const frontMatter = data as FrontMatter;

	return (
		<>
			<Article
				source={mdxSource}
				title={frontMatter.title}
				tags="#tailwindcss"
				date={frontMatter.datePub}
			/>
		</>
	);
}

export async function generateStaticParams() {
	const paths = postFilePaths
		.map((path) => path.replace(/\.mdx?$/, ""))
		.map((slug) => ({ slug }));

	return paths;
}
