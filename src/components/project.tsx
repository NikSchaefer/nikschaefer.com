import clsx from "clsx";
import { ExternalLink, GithubIcon, MoveRight } from "lucide-react";
import Link from "next/link";
import { Project } from "types";
import { motion } from "framer-motion";

export default function Project({
	title,
	tech,
	github,
	slug,
	image,
	external,
}: Project) {
	return (
		<motion.div
			initial={{ y: -10, opacity: 0 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.2, delay: 0.5 }}
			viewport={{ once: true }}
			className={clsx(
				"flex flex-col gap-5 sm:gap-0 sm:flex-row card-bg w-[80%] mx-auto rounded-[3rem] border border-primary/20",
				"p-[1rem] sm:p-[3rem] h-[30rem] sm:pr-0 relative z-10"
			)}
		>
			{/* {index !== undefined && (
				<div className="absolute -left-4 -top-4 h4 font-sans">
					<span>0{index + 1}</span>
				</div>
			)} */}
			<div className="hidden sm:flex w-[10%] pr-10 flex-col items-center justify-center">
				<h5 className="uppercase -rotate-90 h7 tracking-[0.2em] whitespace-nowrap font-semibold">
					{tech.slice(0, 3).join(", ")}
				</h5>
			</div>
			<div className="w-full sm:w-[50%]">
				<img
					className="max-h-[200px] sm:max-h-none h-full w-full object-cover rounded-[3em]"
					src={image}
				/>
			</div>
			<div className="gap-5 sm:gap-0 p-8 w-full sm:w-[50%] flex flex-col justify-between ">
				<h2 className="font-semibold text-white">{title}</h2>

				<Link
					className="flex items-center gap-3 group text-effect"
					href={`/projects/${slug}`}
				>
					Learn more{" "}
					<span className="transition-transform text-primary duration-100 group-hover:translate-x-2">
						<MoveRight />
					</span>
				</Link>

				<div className="flex gap-3 pb-8">
					<a
						href={github}
						className="hover:text-primary hover:rotate-6 hover:scale-105 transition-all duration-75"
					>
						<GithubIcon />
					</a>
					{external && (
						<a
							className="hover:text-primary hover:rotate-6 hover:scale-105 transition-all duration-75"
							href={external}
						>
							<ExternalLink />
						</a>
					)}
				</div>
			</div>
		</motion.div>
	);
}
