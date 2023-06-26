import clsx from "clsx";
import { motion } from "framer-motion";
import jobs from "../../../content/jobs.json";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Content() {
	return (
		<motion.div
			initial={{ y: -10, opacity: 0 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.2, delay: 0.2 }}
			viewport={{ once: true }}
			className={clsx(
				"card-bg mx-auto rounded-[2rem] border border-primary/20",
				"p-[2rem] sm:p-[3rem] sm:pr-0 relative w-full"
			)}
		>
			<ol className="relative">
				<div className="absolute left-0 h-[90%] w-[2px] bg-gradient-to-b from-blue-500/50 via-primary to-pink-500/50" />
				{jobs.map((job) => (
					<li className="mb-10 ml-10">
						<span className="absolute bg-secondary flex items-center justify-center w-12 h-12 rounded-full -left-6">
							<img
								className=" w-10 h-10 m-2 rounded-full bg-secondary-600"
								src={job.logo}
							/>
						</span>
						<h3 className="flex flex-col items-start sm:flex-row h4 mb-1 font-semibold text-white">
							{job.title}{" "}
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={job.url}
								className="underline-effect sm:ml-2"
							>
								{" "}
								@{job.company}
							</a>
						</h3>

						<time className="block my-2 text-sm font-normal leading-none text-gray-500">
							{job.range}
						</time>
					</li>
				))}
			</ol>
			<Link
				className="flex items-center gap-3 group text-primary"
				href="/about"
			>
				Who am I?
				<span className="transition-transform text-primary duration-100 group-hover:translate-x-1">
					<ChevronRight className="group-hover:hidden" />
					<ArrowRight className="hidden group-hover:block" />
				</span>
			</Link>
		</motion.div>
	);
}
