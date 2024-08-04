"use client";

import clsx from "clsx";
import { Project } from "types";
import { motion } from "framer-motion";
import ArrowLink from "@components/ui/link";

export default function ProjectComponent({
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
				"flex flex-col justify-between gap-5 sm:gap-0 sm:flex-row card-bg mx-auto rounded-[2rem] border border-primary/20",
				"p-[1rem] sm:p-[1.5rem] relative z-10 col-span-2"
			)}
		>
			<div className="space-y-5 sm:gap-0 p-6 w-full sm:w-[40%] flex flex-col justify-">
				<h2 className="font-semibold text-primary">{title}</h2>
				<p className="text-muted-foreground">{text}</p>
				<ArrowLink
					href={`/projects/${slug}`}
					aria-label={`Learn more about ${title}`}
				>
					{short}
				</ArrowLink>
			</div>
			<div className="w-full sm:w-[40%] mx-auto flex items-center pb-5 sm:py-5">
				<img
					className="rounded-lg overflow-none"
					src={image}
					alt={title}
				/>
			</div>
		</motion.div>
	);
}
