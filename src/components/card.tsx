"use client";
import clsx from "clsx";
import Link from "next/link";
import { Project } from "types";
import { motion } from "framer-motion";
import { BrainCircuit, BrainCog, Layout, TerminalSquare } from "lucide-react";
import { cn } from "@lib/utils";

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
		<Link href={`/projects/${slug}`}>
			<motion.div
				initial={disableRender ? {} : { y: -10, opacity: 0 }}
				animate={disableRender ? {} : { opacity: 1, y: 0 }}
				whileHover={{ y: -5 }}
				transition={{
					duration: 0.2,
					delay: disableRender ? 0 : 0.5 + (index || 0) * 0.1,
					y: {
						duration: 0.2,
						ease: "linear",
					},
				}}
				viewport={disableRender ? {} : { once: true }}
				className={cn(
					"text-left bg-accent rounded-2xl",
					"transition-all ",
					"py-12 px-8 h-full"
				)}
			>
				<div className="flex justify-between items-center">
					<div>
						<h4 className={clsx("mt-2 font-semibold text-primary")}>
							{title}
						</h4>
						<p className="mt-2 text-sm">{text}</p>
					</div>
					<div
						className={clsx(
							"h-fit text-foreground mt-2",
							"rounded-full p-3",
							// @ts-ignore
							iconAndColorMap[tech[0]]?.color
						)}
					>
						{/* @ts-ignore */}
						{iconAndColorMap[tech[0]]?.icon}
					</div>
				</div>
			</motion.div>
		</Link>
	);
}

export { Card, sortByOptions };
export type { SortOption };
