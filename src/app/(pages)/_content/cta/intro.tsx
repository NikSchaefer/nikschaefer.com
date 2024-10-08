"use client";

import { LineSplitSVG } from "@components/line-split";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function Intro() {
	return (
		<div className="mx-auto w-[95%] grid grid-cols-12">
			<div className="col-span-1 relative flex flex-col items-center justify-center gap-7">
				<div className="h-full">
					<motion.div
						initial={{ height: 0 }}
						whileInView={{ height: "100%" }}
						transition={{ duration: 0.4, delay: 0.3 }}
						viewport={{ once: true }}
						className="w-[3px] h-full from-primary/0 via-primary to-primary/0 bg-gradient-to-b rounded"
					/>
				</div>
				<div className="text-primary absolute -bottom-12 hover:rotate-12 transition-transform duration-300">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.2, delay: 0.7 }}
						viewport={{ once: true }}
						className="w-fit relative"
					>
						<span className="absolute left-0 w-full top-0 h-full bg-primary/50 blur-[18px]" />
						<Code2 className="text-primary" size={35} />
					</motion.div>
				</div>
			</div>
			<div className="hidden sm:flex col-span-1 relative h-full justify-center items-center">
				<LineSplitSVG className="-translate-x-9" />
			</div>
			<div className="col-span-10 px-5 py-[11rem] ">
				<h5 className="mb-4 h6 text-primary border border-primary rounded-full w-fit px-3 py-1">
					What's Next?
				</h5>
				<motion.h1
					initial={{ opacity: 0, x: -10 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.2, delay: 0.7 }}
					viewport={{ once: true }}
				>
					<span className="text-primary font-semibold">
						Let's Connect
					</span>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, x: -10 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.2, delay: 0.8 }}
					viewport={{ once: true }}
					className="mt-4 text-muted-foreground"
				>
					I'd love to hear from you! Whether you're looking to
					collaborate, chat about a project, or just say hello, I'm
					always here to listen. Drop me a line and let's start a
					conversation.{" "}
				</motion.p>
				<a
					href="mailto:nikkschaefer@gmail.com"
					aria-label="Get in touch"
					className="border text-primary border-primary px-5 py-2.5 w-fit bg-background my-5 p-0.5 flex items-center justify-center font-bold overflow-hidden group rounded-md hover:bg-primary hover:text-primary-foreground transition-all"
				>
					Say Hello
				</a>
			</div>
		</div>
	);
}
