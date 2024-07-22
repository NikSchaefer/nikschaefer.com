"use client";

import axios from "axios";
import clsx from "clsx";
import { ExternalLink, GitFork, GithubIcon, Star } from "lucide-react";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXRemote } from "next-mdx-remote";
import { useEffect, useState } from "react";

function Article({
	title,
	source,
	github,
	link,
}: {
	tags: string;
	title: string;
	source: MDXRemoteSerializeResult;
	date?: string;
	github?: string;
	link?: string;
}): JSX.Element {
	const [githubData, setGithubData] = useState(null);
	useEffect(() => {
		if (!github) return;
		const url = `https://api.github.com/repos/${
			github.split("/")[3] + "/" + github.split("/")[4]
		}`;
		axios.get(url).then((res) => {
			const { data } = res;
			setGithubData(data);
		});
	}, [github]);
	return (
		<article className="text-foreground max-w-2xl p-6 mx-auto space-y-12">
			<div className="w-full mx-auto space-y-4 text-left">
				<h1
					className={clsx(
						"title2 mx-auto font-semibold text-center text-effect capitalize"
					)}
				>
					{title}.
				</h1>

				<div className="flex gap-5 justify-center items-center">
					{github && (
						<a
							href={github}
							className="rounded-md font-medium hover:bg-background-400 h-10 py-3 px-3 flex items-center justify-center"
						>
							<GithubIcon />
						</a>
					)}
					{link && (
						<a
							className="rounded-md font-medium hover:bg-background-400 h-10 py-3 px-3 flex items-center justify-center"
							href={link}
						>
							<ExternalLink />
						</a>
					)}
					{githubData && (
						<>
							<a
								href={`${github}/stargazers`}
								className="rounded-md font-medium gap-1 hover:bg-background-400 h-10 py-3 px-3 flex items-center justify-center"
							>
								<Star />
								{githubData["stargazers_count"]}
							</a>
							<a
								href={`${github}/forks`}
								className="rounded-md font-medium gap-1 hover:bg-background-400 h-10 py-3 px-3 flex items-center justify-center"
							>
								<GitFork />
								{githubData["forks_count"]}
							</a>
						</>
					)}
				</div>
			</div>

			<section className="prose-blue prose dark:prose-invert text-left text-foreground">
				<MDXRemote {...source} />
			</section>

			<div className="w-fit mx-auto text-center h5 underline-effect">
				<a href="https://github.com/NikSchaefer/nikschaefer.com">
					Edit this page on GitHub
				</a>
			</div>
		</article>
	);
}

export { Article };
