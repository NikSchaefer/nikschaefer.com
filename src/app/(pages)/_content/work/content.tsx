"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import jobs from "../../../../../content/jobs.json";
import Image from "next/image";

export default function Content() {
	return (
		<motion.div
			initial={{ y: -10, opacity: 0 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.2, delay: 0.2 }}
			viewport={{ once: true }}
			className={clsx(
				"card-bg mx-auto rounded-[2rem] border border-primary/20",
				"py-[2rem] px-[3em]  relative w-full"
			)}
		>
			<h2 className="text-primary font-semibold mb-4">My Work</h2>
			<p className="leading-[32px] text-muted-foreground">
				From founding startups to collaborating with innovative
				companies, I've been fortunate to have a career that has reached
				thousands. Take a look at my work journey so far:
			</p>
			<ol className="relative grid grid-cols-2 mt-4 gap-8">
				{jobs.map((job) => (
					<li>
						<span className="bg-gray-800 flex items-center justify-center w-12 h-12 rounded-full">
							<Image
								width={30}
								height={30}
								src={job.logo}
								alt={job.company}
							/>
						</span>
						<div>
							<h3 className="font-semibold text-foreground my-2">
								{job.company}
							</h3>
							<p className="mb-1 text-muted-foreground">
								{job.title}
							</p>
							<p className="text-sm text-muted-foreground">
								{job.range}
							</p>
						</div>
					</li>
				))}
			</ol>
		</motion.div>
	);
}
