import Layout from "@components/layout";
import Meta, { MetaType } from "@components/meta";
import { snippetsFilePaths, SNIP_PATH } from "@lib/mdxUtils";
import rehypePrism from "@mapbox/rehype-prism";
import { Container, Content } from "@styles/blog.theme";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import styled from "styled-components";

const StyledSection = styled.section`
	text-align: center;
	font-family: "Mukta", sans-serif;
	h1 {
		font-size: 50px;
		font-weight: 400;
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
					<article>
						<MDXRemote {...source} />
					</article>
				</Content>
			</Container>
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

	return {
		paths,
		fallback: false,
	};
};
