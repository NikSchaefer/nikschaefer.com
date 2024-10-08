"use client";

import axios from "axios";
import { ExternalLink, GitFork, GithubIcon, Star } from "lucide-react";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXRemote } from "next-mdx-remote";
import { useEffect, useState } from "react";
import ArrowLink from "./ui/link";
import { titleStyle } from "@styles/common";
import { cn } from "@lib/utils";

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
				<h1 className={cn(titleStyle, "text-center")}>{title}.</h1>

				<div className="flex gap-5 justify-center items-center">
					{github && (
						<a
							href={github}
							className="rounded-md font-medium hover:bg-accent h-10 py-3 px-3 flex items-center justify-center"
						>
							<GithubIcon />
						</a>
					)}
					{link && (
						<a
							className="rounded-md font-medium hover:bg-accent h-10 py-3 px-3 flex items-center justify-center"
							href={link}
						>
							<ExternalLink />
						</a>
					)}
					{githubData && (
						<>
							<a
								href={`${github}/stargazers`}
								className="rounded-md font-medium gap-1 hover:bg-accent h-10 py-3 px-3 flex items-center justify-center"
							>
								<Star />
								{githubData["stargazers_count"]}
							</a>
							<a
								href={`${github}/forks`}
								className="rounded-md font-medium gap-1 hover:bg-accent h-10 py-3 px-3 flex items-center justify-center"
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

			<div className="w-fit mx-auto text-center">
				<ArrowLink href="https://github.com/NikSchaefer/nikschaefer.com">
					Edit this page on GitHub
				</ArrowLink>
			</div>
		</article>
	);
}

export { Article };
