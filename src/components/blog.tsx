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
					"text-2xl text-blue-500 capitalize underline-effect"
				)}
			>
				{props.blog.title}
			</Link>
			<p className="my-1 text-sm text-gray-600">
				{props.blog.date} • {props.blog.min} min{" "}
				{props.blog.type.map((v) => (
					<span className="mr-1">• {v}</span>
				))}
			</p>
			<p className="mt-2 text-gray-300">{props.blog.description}</p>
		</div>
	);
}

export { Post };
