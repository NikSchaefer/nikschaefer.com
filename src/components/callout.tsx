"use client";

import clsx from "clsx";
import { BrainCircuit, X } from "lucide-react";
import { useState } from "react";
import { IconLink } from "./ui/icon-link";

export default function Callout() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{!isOpen && (
				<div className="h4 mx-auto max-w-[750px] text-gray-400 my-[2em]">
					<button
						onClick={() => setIsOpen(true)}
						className={clsx(
							"bg-accent rounded-lg",
							"cursor-pointer w-full text-primary font-medium",
							"flex gap-2 items-center justify-between",
							"px-6 py-5 text-left text-base",
							"hover:bg-accent/80"
						)}
					>
						Which Tech Trend Keeps Me Up at Night?
						<BrainCircuit className="h-12 w-12 rounded-xl shadow-xl shadow-primary/10 p-2 border border-primary/10" />
					</button>
				</div>
			)}
			{isOpen && (
				<section className="relative w-[90%] max-w-[1000px] card-bg border border-primary/30 mx-auto py-[3em] my-[3em] rounded-md">
					<button
						onClick={() => setIsOpen(false)}
						className={clsx(
							"absolute right-3 top-3 rounded-xl p-2 transition-colors",
							"hover:bg-accent"
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
							<span className="text-primary">
								What defines a human?
							</span>{" "}
							Where do we draw the line between human and machine?{" "}
							<br />
							<br />
							While it may be far off in the future, I find myself
							delving into the latest breakthroughs and pondering
							the ethical and societal implications of this{" "}
							<IconLink
								link="https://www.amazon.com/Brave-New-World-Aldous-Huxley/dp/0060850523/"
								title="Brave New World"
								img="/dna.png"
							/>
							.
						</p>
					</div>
				</section>
			)}
		</>
	);
}
