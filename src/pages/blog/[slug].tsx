/* eslint-disable jsx-a11y/anchor-is-valid */
import Layout from "@components/layout";
import { postFilePaths, POSTS_PATH } from "@lib/mdxUtils";
import rehypePrism from "@mapbox/rehype-prism";
import { Content } from "@styles/blog.theme";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
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
			<article className="max-w-2xl px-6 py-24 mx-auto space-y-12 text-black dark:bg-coolGray-800 dark:text-coolGray-50">
				<div className="w-full mx-auto space-y-4 text-center">
					<p className="text-xs font-semibold tracking-wider uppercase">
						#TailwindCSS
					</p>
					<h1 className="text-4xl font-bold leading-tight md:text-5xl">
						{frontMatter.title}
					</h1>
					<p className="text-sm dark:text-coolGray-400">
						by{" "}
						<a
							href="https://nikschaefer.tech"
							target="_blank"
							rel="noopener noreferrer"
							className="underline dark:text-violet-400"
						>
							<span itemProp="name">Nik Schaefer</span>
						</a>{" "}
						in{" "}
						<time dateTime="2021-02-12 15:34:18-0200">
							{frontMatter.datePub}
						</time>
					</p>
				</div>
				<Content className="text-left text-black dark:text-coolGray-100">
					<MDXRemote {...source} />
				</Content>
				<div className="pt-12 border-t dark:border-coolGray-700">
					<div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
						<div className="flex flex-col">
							<h4 className="text-lg font-semibold">
								Nik Schaefer
							</h4>
							<p className="dark:text-coolGray-400">
								I'm a full stack developer, machine learning
								student, and open source enthusiast. You've
								found my personal slice of the internet. Learn
								more about me or get in touch while your here.
							</p>
						</div>
					</div>
					<div className="flex justify-center pt-4 space-x-4 align-center">
						<a
							href="#"
							aria-label="GitHub"
							className="p-2 rounded-md dark:text-coolGray-100 hover:dark:text-violet-400"
						>
							<svg
								viewBox="0 0 496 512"
								xmlns="http://www.w3.org/2000/svg"
								className="w-4 h-4 fillCurrent"
							>
								<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
							</svg>
						</a>
						<a
							href="#"
							aria-label="LinkedIn"
							className="p-2 rounded-md dark:text-coolGray-100 hover:dark:text-violet-400"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 100 100"
								className="w-4 h-4 fillCurrent"
							>
								<path d="M87.877 5.608H11.174c-3.673 0-6.65 2.886-6.65 6.448v77.101c0 3.562 2.978 6.451 6.65 6.451h76.703c3.673 0 6.646-2.89 6.646-6.451V12.056c0-3.561-2.973-6.448-6.646-6.448zM31.809 80.944H18.211V40.31h13.598v40.634zm-6.798-46.185h-.091c-4.56 0-7.516-3.119-7.516-7.023 0-3.983 3.043-7.017 7.693-7.017 4.651 0 7.512 3.033 7.602 7.017 0 3.905-2.95 7.023-7.688 7.023zm55.816 46.185H67.233v-21.74c0-5.464-1.97-9.191-6.886-9.191-3.761 0-5.993 2.515-6.973 4.942-.364.868-.453 2.08-.453 3.292v22.696H39.329s.178-36.823 0-40.634h13.593v5.761c1.805-2.768 5.029-6.717 12.249-6.717 8.947 0 15.656 5.804 15.656 18.291v23.3zM52.834 46.199c.024-.038.056-.084.088-.128v.128h-.088z" />
							</svg>
						</a>
						<a
							href="#"
							aria-label="Email"
							className="p-2 rounded-md dark:text-coolGray-100 hover:dark:text-violet-400"
						>
							<svg
								viewBox="0 0 512 512"
								xmlns="http://www.w3.org/2000/svg"
								className="w-4 h-4 fillCurrent"
							>
								<path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
							</svg>
						</a>
					</div>
				</div>
			</article>
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
