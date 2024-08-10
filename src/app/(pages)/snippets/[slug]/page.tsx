import { Article } from "@components/article";
import { snippetsFilePaths, SNIP_PATH } from "@lib/mdxUtils";
import rehypePrism from "@mapbox/rehype-prism";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

type PageProps = {
	params: { slug: string };
};

type FrontMatter = {
	title: string;
	tag: string;
};

export default async function Page({ params }: PageProps) {
	const postFilePath = path.join(SNIP_PATH, `${params.slug}.mdx`);
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
			<section>
				<Article
					source={mdxSource as MDXRemoteSerializeResult}
					title={frontMatter.title}
					tags=""
				/>
			</section>
		</>
	);
}

export async function generateStaticParams() {
	const paths = snippetsFilePaths
		.map((path) => path.replace(/\.mdx?$/, ""))
		.map((slug) => ({ slug }));

	return paths;
}
