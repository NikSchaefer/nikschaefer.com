import Link from "next/link";

import { Blog } from "../config";

// https://merakiui.com/ under cards

function Post(props: { Blog: Blog }): JSX.Element {
	return (
		<div className="px-8 py-4 mx-auto my-10 bg-white rounded-lg shadow-md dark:bg-gray-800 ">
			<div className="flex items-center justify-between">
				<span className="text-sm font-light text-gray-600 dark:text-gray-400">
					{props.Blog.date}
				</span>
				<Link href={props.Blog.link}>
					<a
						aria-label="Blog Link"
						className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
					>
						{props.Blog.type[0]}
					</a>
				</Link>
			</div>

			<div className="mt-2">
				<Link href={props.Blog.link}>
					<a
						aria-label="Blog Link"
						className="text-2xl font-bold slide"
					>
						{props.Blog.title}
					</a>
				</Link>
				<p className="mt-2 text-gray-600 dark:text-gray-300">
					{props.Blog.description}
				</p>
			</div>

			<div className="flex items-center justify-between mt-4">
				<Link href={props.Blog.link}>
					<a
						aria-label="Blog Link"
						className="text-blue-600 dark:text-blue-400 hover:underline"
					>
						Read more
					</a>
				</Link>
			</div>
		</div>
	);
}

export { Post };
