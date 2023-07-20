import { socials } from "../config";
import { motion } from "framer-motion";
import { Github, ArrowUpRight, Linkedin, Mail } from "lucide-react";

export default function Connect() {
	return (
		<motion.section className="relative w-[90%] max-w-[1000px] bg-secondary-400 border border-primary/30 mx-auto py-[3em] my-[3em] rounded-md">
			<div className="h4 mx-auto prose text-gray-400 my-[2em]">
				<h1 className="h3 font-semibold text-effect mb-4 ">
					Let's collaborate on something awesome.
				</h1>
				<p className="leading-[32px]">
					I'm excited to explore new opportunities and collaborate
					with fellow developers, businesses, or organizations on
					innovative projects. If you're looking for a skilled
					Software Engineer with a passion for data science, let's
					connect and discuss how we can work together.
					<br />
					<br /> Whether you have a challenging project in mind or
					simply want to engage in talks about tech, business, or
					philosophy, I'm eager to hear from you. Feel free to reach
					out via email or connect with me on LinkedIn.
				</p>
			</div>
			<motion.div className="pt-[2em] mx-auto h4 max-w-[750px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-semibold">
				<motion.a
					href={socials.github.link}
					target="_blank"
					rel="noopener noreferrer"
					className="flex gap-4 items-center rounded border px-3 py-4 w-full bg-secondary border-primary/20 hover:bg-primary-500/10"
				>
					<Github />
					GitHub
					<div className="ml-auto flex-grow flex justify-end">
						<ArrowUpRight className="ml-auto" />
					</div>
				</motion.a>
				<motion.a
					href={socials.linkedin.link}
					target="_blank"
					rel="noopener noreferrer"
					className="flex gap-4 items-center rounded border px-3 py-4 w-full bg-secondary border-primary/20 hover:bg-primary-500/10"
				>
					<Linkedin />
					LinkedIn
					<div className="ml-auto flex-grow flex justify-end">
						<ArrowUpRight className="ml-auto sm:ml-1" />
					</div>
				</motion.a>
				<motion.a
					href={socials.email.link}
					target="_blank"
					rel="noopener noreferrer"
					className="flex gap-4 items-center rounded border px-3 py-4 w-full bg-secondary border-primary/20 hover:bg-primary-500/10"
				>
					<Mail />
					Email
					<div className="ml-auto flex-grow flex justify-end">
						<ArrowUpRight className="ml-auto sm:ml-1" />
					</div>
				</motion.a>
			</motion.div>
		</motion.section>
	);
}
