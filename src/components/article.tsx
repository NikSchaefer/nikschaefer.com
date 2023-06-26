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
		<article className="text-white max-w-2xl px-6 py-24 mx-auto space-y-12">
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
							className="hover:text-primary hover:scale-105 transition-all duration-75"
						>
							<GithubIcon />
						</a>
					)}
					{link && (
						<a
							className="hover:text-primary hover:scale-105 transition-all duration-75"
							href={link}
						>
							<ExternalLink />
						</a>
					)}
					{githubData && (
						<>
							<a
								href={`${github}/stargazers`}
								className="hover:text-primary flex gap-2 items-center hover:scale-105 transition-all duration-75"
							>
								<Star />
								{githubData["stargazers_count"]}
							</a>
							<a
								href={`${github}/forks`}
								className="hover:text-primary flex gap-2 items-center hover:scale-105 transition-all duration-75"
							>
								<GitFork />
								{githubData["forks_count"]}
							</a>
						</>
					)}
				</div>
			</div>

			<section className="prose-blue prose prose-invert text-left text-gray-100">
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
