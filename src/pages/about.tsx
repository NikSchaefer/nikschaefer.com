import Layout from "@components/layout";
import { NextSeo } from "next-seo";

import { motion } from "framer-motion";
import Callout from "@components/callout";
import Connect from "@components/connect";

export default function About(): JSX.Element {
	return (
		<Layout className="h4 w-[90%] mx-auto">
			<NextSeo title="About" />
			<motion.section
				className="pt-[1em] h4 mx-auto prose max-w-[750px] text-gray-400"
				id="work"
			>
				<h5 className="my-2">README.md</h5>
				<h1 className="title1 font-semibold text-effect mb-10 ">
					hey, I'm Nik.
				</h1>
				<p className="leading-[32px]">
					I'm a full-stack developer, aspring data scientist, and
					student. I currently work as the lead developer at{" "}
					<a
						href="https://noveltor.com"
						target="_blank"
						className="text-gray-400 no-underline relative inline-flex items-center pl-8 pr-2 bg-secondary-400 rounded-md border border-primary/10"
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
				className="h4 mx-auto prose max-w-[750px] text-gray-400"
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
		</Layout>
	);
}
