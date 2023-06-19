import clsx from "clsx";
import Link from "next/link";
import { Project } from "types";

import { motion } from "framer-motion";

type SortOption = {
	name: string;
	include: string[];
};

const sortByOptions: SortOption[] = [
	{ name: "All", include: [] },
	{
		name: "ML",
		include: ["Tensorflow", "tensorflow"],
	},
	{
		name: "Web",
		include: ["Javascript", "Typescript", "React", "Next.js"],
	},
	{
		name: "Python",
		include: ["Python", "Tensorflow", "Pandas"],
	},
	{
		name: "Go",
		include: ["Go", "Golang", "go", "golang"],
	},
];

function Card({
	title,
	slug,
	text,
	index,
	disableRender,
}: Project): JSX.Element {
	return (
		<motion.div
			initial={disableRender ? {} : { y: -10, opacity: 0 }}
			animate={disableRender ? {} : { opacity: 1, y: 0 }}
			viewport={disableRender ? {} : { once: true }}
			transition={
				disableRender
					? {}
					: {
							duration: 0.2,
							delay: 0.5 + (index || 0) * 0.1,
					  }
			}
			className={clsx(
				"text-left bg-secondary-600 rounded-xl",
				"border border-primary/30 transition-transform duration-200",
				"hover:border-primary/70 p-3 h-full"
			)}
		>
			<Link
				className="w-full h-full px-6 py-4"
				href={`/projects/${slug}`}
			>
				<h4 className={clsx("mt-2 font-semibold text-primary")}>
					{title}
				</h4>
				<p className="mt-2 text-sm text-gray-300">{text}</p>
			</Link>
		</motion.div>
	);
}

export { Card, sortByOptions };
export type { SortOption };
