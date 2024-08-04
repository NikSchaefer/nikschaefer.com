"use client";

import clsx from "clsx";
import { Project } from "types";
import { motion } from "framer-motion";
import ArrowLink from "@components/ui/link";

export default function VerticalProject({
	title,
	slug,
	image,
	text,
	short,
}: Project) {
	return (
		<motion.div
			initial={{ y: -10, opacity: 0 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.2, delay: 0.2 }}
			viewport={{ once: true }}
			className={clsx(
				"flex flex-col gap-5 card-bg rounded-[2rem] border-2 border-primary/20",
				"p-[1rem] relative w-full"
			)}
		>
			<div className="gap-5 p-6 w-full flex flex-col justify-between ">
				<h2 className="font-semibold text-primary">{title}</h2>
				<p className="text-muted-foreground">{text}</p>
				<ArrowLink
					href={`/projects/${slug}`}
					aria-label={`Learn more about ${title}`}
				>
					{short}
				</ArrowLink>
			</div>
			<div className="w-full flex items-center pb-5 my-auto">
				<img
					className="rounded-lg overflow-none w-[90%] mx-auto"
					src={image}
					alt={title}
				/>
			</div>
		</motion.div>
	);
}
