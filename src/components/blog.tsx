import clsx from "clsx";
import Link from "next/link";

import { Blog } from "../config";

function Post(props: { blog: Blog }): JSX.Element {
	return (
		<div className="py-4 mx-auto rounded-lg">
			<Link
				href={props.blog.link}
				aria-label="Blog Link"
				className={clsx(
					"text-2xl capitalize text-effect"
				)}
			>
				{props.blog.title}
			</Link>
			<p className="my-1 text-sm text-gray-600">{props.blog.date}</p>
		</div>
	);
}

export { Post };
