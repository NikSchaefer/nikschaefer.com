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
				"pt-[2rem] px-[3em]  relative w-full"
			)}
		>
			<ol className="relative">
				<div className="absolute left-0 h-[90%] w-[2px] bg-primary/60" />
				{jobs.map((job) => (
					<li className="mb-10 ml-10">
						<span className="absolute bg-gray-800 flex items-center justify-center w-12 h-12 rounded-full -left-6">
							<Image
								width={30}
								height={30}
								src={job.logo}
								alt={job.company}
							/>
						</span>
						<div>
							<h3 className="flex flex-col items-start sm:flex-row h4 mb-1 font-semibold">
								{job.company}
							</h3>
							<h2 className="text-sm text-foreground/70">
								{job.title}, {job.range}
							</h2>
						</div>
					</li>
				))}
			</ol>
		</motion.div>
	);
}
