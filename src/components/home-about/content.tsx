import clsx from "clsx";
import { motion } from "framer-motion";
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
				"p-[3rem] w-full"
			)}
		>
			<div className="grid grid-cols-10 mb-8">
				<div className="col-span-6">
					<h1 className="mb-4 font-semibold text-effect h1">
						Hi, I'm Nik
					</h1>
					<p className="leading-[36px] h4">
						I am a full-stack developer, aspiring data scientist,
						and student. I enjoy messing with data and building
						things that make people's lives easier.
						<br />
						<br />
						These days, I'm busy working at a startup, managing my
						nonprofit, and balancing my studies as a dual enrollment
						student.
					</p>
				</div>
				<div className="col-span-1" />
				<img
					src="/developer.svg"
					alt="Developer"
					className="w-[300px] mx-auto mt-8 col-span-3"
				/>
			</div>

			<Link
				className="flex items-center gap-3 group text-primary"
				href="/about"
			>
				More on me
				<span className="transition-transform text-primary duration-100 group-hover:translate-x-1">
					<ChevronRight className="group-hover:hidden" />
					<ArrowRight className="hidden group-hover:block" />
				</span>
			</Link>
		</motion.div>
	);
}
