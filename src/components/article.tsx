import { underlineCSS } from "@styles/style";
import axios from "axios";
import clsx from "clsx";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineGithub, AiOutlineLink, AiOutlineStar } from "react-icons/ai";
import { TbGitFork } from "react-icons/tb";

function Article({
	title,
	source,
	date,
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
		console.log(github);
		const url = `https://api.github.com/repos/${
			github.split("/")[3] + "/" + github.split("/")[4]
		}`;
		console.log(url);
		axios.get(url).then((res) => {
			const { data } = res;
			setGithubData(data);
		});
	}, [github]);
	return (
		<article className="dark:text-white max-w-2xl px-6 py-24 mx-auto space-y-12 text-black">
			<div className="w-full mx-auto space-y-4 text-left">
				<h1 className="text-4xl font-bold leading-tight capitalize md:text-5xl">
					{title}
				</h1>

				<p className="dark:text-gray-400">
					by{" "}
					<Link
						href="/"
						target="_blank"
						rel="noopener noreferrer"
						className={clsx("dark:text-blue-400", underlineCSS)}
					>
						<span itemProp="name">Nik Schaefer</span>
					</Link>
					{date === undefined ? "" : " in "}
					{date === undefined ? (
						""
					) : (
						<time dateTime="2021-02-12 15:34:18-0200">{date}</time>
					)}
				</p>

				<div className="flex gap-2 items-center">
					{github && (
						<a
							href={github}
							className="rounded-full hover:bg-gray-200 p-2 dark:hover:bg-shark-400"
						>
							<AiOutlineGithub size={25} />
						</a>
					)}
					{link && (
						<a
							href={link}
							className="rounded-full hover:bg-gray-200 p-2 dark:hover:bg-shark-400"
						>
							<AiOutlineLink size={25} />
						</a>
					)}
					{githubData && (
						<>
							<AiOutlineStar size={20} />
							{githubData["stargazers_count"]}
							<TbGitFork className="ml-4" size={20} />
							{githubData["forks_count"]}
						</>
					)}
				</div>
			</div>

			<section className="prose-blue prose text-left text-black dark:text-gray-100">
				<MDXRemote {...source} />
			</section>
		</article>
	);
}

export { Article };
