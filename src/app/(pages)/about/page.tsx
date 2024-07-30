"use client";

import { motion } from "framer-motion";
import Callout from "@components/callout";
import Connect from "@components/connect";

export default function About(): JSX.Element {
	return (
		<>
			<motion.section
				className="pt-[1em] h4 mx-auto prose max-w-[750px]"
				id="work"
			>
				<a
					href="https://github.com/NikSchaefer/NikSchaefer"
					target="_blank"
					className="no-underline"
				>
					<h5 className="my-2 text-foreground">README.md</h5>
				</a>
				<h1 className="title1 font-semibold text-effect mb-10 ">
					hey, I'm Nik.
				</h1>
				<p className="leading-[32px]">
					I'm a full-stack developer, aspring data scientist, and
					student. I currently work as the lead developer at{" "}
					<a
						href="https://noveltor.com"
						target="_blank"
						className="bg-accent text-accent-foreground no-underline relative inline-flex items-center pl-8 pr-2 rounded-md border border-primary/20"
					>
						<img
							className="h-4 w-4 absolute left-2"
							src="https://noveltor.com/logo.svg"
						/>
						Noveltor
					</a>
					. I love to talk about anything tech, business, and
					philosophy.
					<br />
					<br />
					My true passion lies in data science, where I see immense
					potential for transformative outcomes. My side projects are
					really just a way for me to explore new technologies and
					gain new experiences. If you have a cool idea, I'd love to
					hear about it.
				</p>
			</motion.section>
			<Callout />
			<motion.section
				className="h4 mx-auto prose max-w-[750px]"
				id="work"
			>
				<p className="leading-[32px]">
					I began my coding journey at a 13, building small games
					using p5.js. Since then, my passion for technology has only
					intensified. I believe in its potential to shape a more
					equitable world. And I'm here to make that vision a reality.
					<br />
					<br />
					When I'm not immersed in code, you can often find me at the
					gym, reading a book, or exploring the depths of the ocean
					through scuba diving.
				</p>
			</motion.section>

			<Connect />
		</>
	);
}
