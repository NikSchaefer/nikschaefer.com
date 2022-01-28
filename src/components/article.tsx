import { underlineCSS } from "@styles/style";
import clsx from "clsx";
import { MDXRemote } from "next-mdx-remote";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

function Article({
	title,
	source,
	date,
	github,
	link,
}: {
	tags: string;
	title: string;
	source: never;
	date?: string;
	github?: string;
	link?: string;
}): JSX.Element {
	return (
		<article className="dark:text-white max-w-2xl px-6 py-24 mx-auto space-y-12 text-black">
			<div className="w-full mx-auto space-y-4 text-left">
				<h1 className="text-4xl font-bold leading-tight capitalize md:text-5xl">
					{title}
				</h1>

				<p className="dark:text-gray-400">
					by{" "}
					<a
						href="https://nikschaefer.tech"
						target="_blank"
						rel="noopener noreferrer"
						className={clsx("dark:text-blue-400", underlineCSS)}
					>
						<span itemProp="name">Nik Schaefer</span>
					</a>
					{date === undefined ? "" : " in "}
					{date === undefined ? (
						""
					) : (
						<time dateTime="2021-02-12 15:34:18-0200">{date}</time>
					)}
				</p>
				<div className="flex gap-5">
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
				</div>
			</div>
			<section className="prose-blue prose text-left text-black dark:text-gray-100">
				<MDXRemote {...source} />
			</section>
		</article>
	);
}

export { Article };
