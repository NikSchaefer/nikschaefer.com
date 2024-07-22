"use client";

import { cn } from "@lib/utils";
import { motion } from "framer-motion";

export default function Intro() {
	return (
		<section className="pt-[5em] container mx-auto">
			<motion.h1
				initial={{ y: -10, opacity: 0 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.2, delay: 0.1 }}
				viewport={{ once: true }}
				className={cn("title mx-auto tracking-tighter text-primary font-semibold text-center")}
			>
				Hi. I'm Nik.
				<br />
				<span className="text-effect">A Developer.</span>{" "}
			</motion.h1>
			<motion.p
				initial={{ y: -10, opacity: 0 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.2, delay: 0.3 }}
				viewport={{ once: true }}
				className="mt-[2em] h4 text-center mx-auto w-[90%] max-w-[750px]"
			>
				As a driven lead software engineer and co-founder, I am
				dedicated to leveraging technology and education to create
				positive change and shape a more equitable future.
			</motion.p>
		</section>
	);
}
