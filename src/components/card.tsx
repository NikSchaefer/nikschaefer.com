import clsx from "clsx";
import Link from "next/link";
import { Project } from "types";

import { motion } from "framer-motion";
import { BrainCircuit, BrainCog, Layout, TerminalSquare } from "lucide-react";

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

const iconAndColorMap = {
	Tensorflow: {
		icon: <BrainCircuit className="w-8 h-8" />,
		color: "bg-yellow-500",
	},
	Pytorch: {
		icon: <BrainCog className="w-8 h-8" />,
		color: "bg-green-500",
	},
	React: {
		icon: <Layout className="w-8 h-8" />,
		color: "bg-blue-500",
	},
	Golang: {
		icon: <TerminalSquare className="w-8 h-8" />,
		color: "bg-purple-500",
	},
};

function Card({
	title,
	slug,
	text,
	index,
	disableRender,
	tech,
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
				"text-left bg-secondary-400 rounded-md",
				"border border-primary/10 transition-colors",
				"hover:bg-primary/10 p-3 h-full"
			)}
		>
			<Link
				className="w-full h-full px-6 py-4"
				href={`/projects/${slug}`}
			>
				<div className="flex  justify-start">
					<div
						className={clsx(
							"h-fit ml-1 text-white mr-4 mt-2",
							"rounded-full p-3",
							// @ts-ignore
							iconAndColorMap[tech[0]]?.color
						)}
					>
						{/* @ts-ignore */}
						{iconAndColorMap[tech[0]]?.icon}
					</div>
					<div>
						<h4 className={clsx("mt-2 font-semibold text-primary")}>
							{title}
						</h4>
						<p className="mt-2 text-sm text-gray-300">{text}</p>
					</div>
				</div>
			</Link>
		</motion.div>
	);
}

export { Card, sortByOptions };
export type { SortOption };
