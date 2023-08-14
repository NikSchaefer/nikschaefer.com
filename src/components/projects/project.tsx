import clsx from "clsx";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Project } from "types";
import { motion } from "framer-motion";

export default function Project({ title, slug, image, text, short }: Project) {
	return (
		<motion.div
			initial={{ y: -10, opacity: 0 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.2, delay: 0.2 }}
			viewport={{ once: true }}
			className={clsx(
				"flex flex-col gap-5 sm:gap-0 sm:flex-row card-bg mx-auto rounded-[2rem] border border-primary/20",
				"p-[1rem] sm:p-[1.5rem] sm:pr-0 relative z-10 col-span-2"
			)}
		>
			<div className="gap-5 sm:gap-0 p-6 w-full sm:w-[40%] flex flex-col justify-between ">
				<h2 className="font-semibold text-white">{title}</h2>
				<p>{text}</p>
				<Link
					className="flex items-center gap-3 group text-primary"
					href={`/projects/${slug}`}
					aria-label={`Learn more about ${title}`}
				>
					{short}{" "}
					<span className="transition-transform text-primary duration-100 group-hover:translate-x-1">
						<ChevronRight className="group-hover:hidden" />
						<ArrowRight className="hidden group-hover:block" />
					</span>
				</Link>
			</div>
			<div className="w-full sm:w-[60%] sm:pr-10 flex items-center pb-5 sm:py-5">
				<img
					className="rounded-lg overflow-none"
					src={image}
					alt={title}
				/>
			</div>
		</motion.div>
	);
}
