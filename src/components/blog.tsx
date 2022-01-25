import { underlineCSS } from "@styles/style";
import clsx from "clsx";
import Link from "next/link";

import { Blog } from "../config";

function Post(props: { Blog: Blog }): JSX.Element {
	return (
		<div className="py-4 mx-auto bg-white rounded-lg dark:bg-gray-800 ">
			<Link href={props.Blog.link}>
				<a
					aria-label="Blog Link"
					className={clsx(
						"text-2xl text-blue-500 capitalize",
						underlineCSS,
						"from-red-200 to-yellow-200"
					)}
				>
					{props.Blog.title}
				</a>
			</Link>
			<p className="mt-2 text-gray-600 dark:text-gray-300">
				{props.Blog.description}
			</p>
		</div>
	);
}

export { Post };
