"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { BrainCircuit, X } from "lucide-react";
import { useState } from "react";
import ArrowLink from "./ui/link";

export default function Callout() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{!isOpen && (
				<div className="h4 mx-auto max-w-[750px] text-gray-400 my-[2em]">
					<motion.button
						onClick={() => setIsOpen(true)}
						className={clsx(
							"bg-background-300 rounded-lg",
							"cursor-pointer w-full text-primary font-medium",
							"flex gap-2 items-center justify-between",
							"px-6 py-5 text-left text-base",
							"hover:bg-background-200"
						)}
					>
						Which Tech Trend Keeps Me Up at Night?
						<BrainCircuit className="h-12 w-12 rounded-xl shadow-xl shadow-primary/10 p-2 border border-primary/10" />
					</motion.button>
				</div>
			)}
			{isOpen && (
				<motion.section className="relative w-[90%] max-w-[1000px] bg-background-400 border border-primary/30 mx-auto py-[3em] my-[3em] rounded-md">
					<button
						onClick={() => setIsOpen(false)}
						className={clsx(
							"absolute right-3 top-3 rounded-xl p-2 transition-colors",
							"hover:bg-background-300"
						)}
					>
						<X />
					</button>
					<div className="h4 mx-auto prose my-[2em]">
						<h1 className="h3 font-semibold text-effect mb-4 ">
							Biohacking: Merging Technology and Biology
						</h1>
						<p className="leading-[32px]">
							The fusion of technology and biology through
							biohacking is both fascinating and awe-inspiring.
							The progress in gene editing, implantable devices,
							and human-machine interfaces pushes the boundaries
							of what it means to be human. This tech trend
							intrigues me because it has the potential to
							revolutionize our lives, and prompts profound
							ethical questions.
							<br />
							<br />
							<span className="font-semibold text-primary">What defines a human?</span> Where do we draw the
							line between human and machine? <br />
							<br />
							While it may be far off in the future, I find myself
							delving into the latest breakthroughs and pondering
							the ethical and societal implications of this{" "}
							<ArrowLink
								href="https://www.amazon.com/Brave-New-World-Aldous-Huxley/dp/0060850523/"
								className=""
							>
								Brave New World
							</ArrowLink>
							.
						</p>
					</div>
				</motion.section>
			)}
		</>
	);
}
