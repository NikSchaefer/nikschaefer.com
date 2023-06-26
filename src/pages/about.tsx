import Layout from "@components/layout";
import { NextSeo } from "next-seo";

import { motion } from "framer-motion";
import clsx from "clsx";
import { socials } from "../config";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function About(): JSX.Element {
	return (
		<Layout>
			<NextSeo title="About" />
			<section className="pt-[3em] container mx-auto">
				<motion.h1
					viewport={{ once: true }}
					initial={{ y: -10, opacity: 0 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2, delay: 0.1 }}
					className={clsx(
						"title mx-auto text-effect font-semibold text-center"
					)}
				>
					I'm Nik.
				</motion.h1>
			</section>
			<section className="flex flex-col items-center lg:grid lg:grid-cols-10 pt-[3em] w-[90%] max-w-[1000px] container mx-auto">
				<motion.img
					viewport={{ once: true }}
					initial={{ y: -10, opacity: 0 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2, delay: 0.3 }}
					className="col-span-4 w-[80%] mx-auto lg:w-full"
					src="/developer.svg"
				/>
				<div className="col-span-1" />
				<motion.div
					viewport={{ once: true }}
					initial={{ y: -10, opacity: 0 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2, delay: 0.5 }}
					className="w-[90%] mx-auto lg:w-full flex flex-col col-span-5"
				>
					<span className="my-2">--- about me in O(1) ---</span>
					<h1 className="font-semibold text-effect mb-10 ">
						I'm a Software Engineer with a passion for building
					</h1>
					<p>
						With a versatile background spanning development,
						design, and management, and a deep-rooted passion for
						machine learning, I am focused on pursuing a future in
						data science.
						<br />
						<br />
						These days, I'm busy working at a startup, managing my
						nonprofit, and balancing my studies as a dual enrollment
						student.
					</p>
					<div className="pt-[2em] flex-col sm:flex-row flex gap-2 h6 font-semibold">
						<motion.a
							viewport={{ once: true }}
							initial={{ y: -10, opacity: 0 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.2, delay: 0.7 }}
							href={socials.github.link}
							target="_blank"
							rel="noopener noreferrer"
							className="flex gap-4 items-center rounded border px-3 py-4 w-full sm:w-fit border-secondary-400 hover:bg-secondary-600"
						>
							<Github />
							GitHub
							<ArrowUpRight className="ml-auto sm:ml-1" />
						</motion.a>
						<motion.a
							viewport={{ once: true }}
							initial={{ y: -10, opacity: 0 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.2, delay: 0.8 }}
							href={socials.linkedin.link}
							target="_blank"
							rel="noopener noreferrer"
							className="flex gap-4 items-center rounded border px-3 py-4 w-full sm:w-fit border-secondary-400 hover:bg-secondary-600"
						>
							<Linkedin />
							LinkedIn
							<ArrowUpRight className="ml-auto sm:ml-1" />
						</motion.a>
						<motion.a
							viewport={{ once: true }}
							initial={{ y: -10, opacity: 0 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.2, delay: 0.9 }}
							href={socials.email.link}
							target="_blank"
							rel="noopener noreferrer"
							className="flex gap-4 items-center rounded border px-3 py-4 w-full sm:w-fit border-secondary-400 hover:bg-secondary-600"
						>
							<Mail />
							Email
							<ArrowUpRight className="ml-auto sm:ml-1" />
						</motion.a>
					</div>
				</motion.div>
			</section>

			<motion.section
				viewport={{ once: true }}
				initial={{ y: -10, opacity: 0 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.2, delay: 1 }}
				className="pt-[10em] h4 mx-auto max-w-[700px] w-[90%]"
				id="work"
			>
				<h5 className="my-2">--- about me in O(n log (n)) ---</h5>
				<h1 className="title1 font-semibold text-effect mb-10 ">
					Let's collaborate on something awesome.
				</h1>
				<p className="leading-[32px] text-gray-100">
					I'm a coding enthusiast on a mission to shape the future
					with technology. As a Software Engineer, I thrive on
					building innovative solutions and driving positive change.
					<br />
					<br />
					With a diverse background in development, design, and
					management, I'm a well-rounded problem solver ready to
					tackle the challenges of today's digital landscape. My true
					passion lies in data science, where I see immense potential
					for transformative outcomes.
					<br />
					<br />
					Currently, I'm juggling multiple roles: working at a
					startup, managing a nonprofit, and pursuing studies as a
					dual enrollment student. This fast-paced lifestyle keeps me
					on my toes and fuels my hunger for knowledge and growth.
					<br />
					<br />
					I began my coding journey at a 13, building small games
					using p5.js. Since then, my passion for technology has only
					intensified. I believe in its power to shape a brighter,
					more equitable future. And I'm here to make that vision a
					reality.
					<br />
					<br />
					When I'm not immersed in code, you can find me at the gym,
					reading a book, or scuba diving in the ocean.
					<br />
					<br />
					If you share my drive to leverage technology, advance
					education, and create positive change, I'd love to connect.
					Together, we can build a better future through
					collaboration, innovation, and a shared passion for making a
					meaningful difference. Let's shape the world, one line of
					code at a time.
				</p>
			</motion.section>
		</Layout>
	);
}
