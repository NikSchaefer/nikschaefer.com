import Link from "next/link";

import { Blog } from "../config";

// https://merakiui.com/ under cards

function Article(props: { Blog: Blog }): JSX.Element {
	return (
		<div className="relative top-0 px-8 py-4 mx-auto my-10 bg-white rounded-lg shadow-md hover:top-10 dark:bg-gray-800 ">
			<div className="flex items-center justify-between">
				<span className="text-sm font-light text-gray-600 dark:text-gray-400">
					{props.Blog.date}
				</span>
				<a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
					{props.Blog.type[0]}
				</a>
			</div>

			<div className="mt-2">
				<Link href={props.Blog.link}>
					<a className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
						{props.Blog.title}
					</a>
				</Link>
				<p className="mt-2 text-gray-600 dark:text-gray-300">
					{props.Blog.description}
				</p>
			</div>

			<div className="flex items-center justify-between mt-4">
				<Link href={props.Blog.link}>
					<a className="text-blue-600 dark:text-blue-400 hover:underline">
						Read more
					</a>
				</Link>
			</div>
		</div>
	);
}

export { Article };
