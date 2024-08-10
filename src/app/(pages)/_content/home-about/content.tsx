"use client";

import { motion } from "framer-motion";
import { cn } from "@lib/utils";
import { IconLink } from "@components/ui/icon-link";
import ArrowLink from "@components/ui/link";

export default function Content() {
	return (
		<motion.div
			initial={{ y: -10, opacity: 0 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.2, delay: 0.2 }}
			viewport={{ once: true }}
			className={cn(
				"card-bg mx-auto rounded-[2rem] border border-primary/20",
				"p-[3rem] w-full !text-muted-foreground prose max-w-none",
				"grid grid-cols-6 items-center gap-x-10"
			)}
		>
			<div className="col-span-4">
				<h2 className="h2 mt-0 text-primary font-semibold">
					hey, I'm Nik
				</h2>
				<p className="leading-[32px] text-balance">
					I'm a software developer and business owner balancing my
					studies in Computer Engineering at UW-Madison with exciting
					ventures in the tech world. My main focus is{" "}
					<IconLink
						title="Noveltor"
						link="https://noveltor.com"
						img="https://noveltor.com/logo.png"
					/>
					, where we're working to streamline mental health care. On the side I
					also run an{" "}
					<IconLink
						title="Advertising Agency"
						img="/calendar.png"
						disabled
					/>{" "}
					specializing in education sector marketing, and{" "}
					<IconLink
						title="Blue Mango Software"
						link="https://bluemangosoftware.com"
						img="https://bluemangosoftware.com/logo.png"
					/>
					, my own consulting venture .
				</p>
				<ArrowLink
					className="flex no-underline items-center gap-3 group text-primary"
					href="/about"
				>
					More about me
				</ArrowLink>
			</div>
			<div className="col-span-2">
				<img src="/freelance.svg" />
			</div>
		</motion.div>
	);
}
