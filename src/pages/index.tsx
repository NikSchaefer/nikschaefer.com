import Layout from "@components/layout";
import clsx from "clsx";
import { NextSeo } from "next-seo";
import React from "react";

import projects from "../../content/projects.json";
import Project from "@components/project";
import Link from "next/link";
import { motion } from "framer-motion";

function Intro() {
	return (
		<section className="pt-[5em] container mx-auto">
			<motion.h1
				initial={{ y: -10, opacity: 0 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.2, delay: 0.1 }}
				viewport={{ once: true }}
				className={clsx("title mx-auto font-semibold text-center")}
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

function Projects() {
	return (
		<section>
			<div className="pt-[8em] flex flex-col justify-center items-center gap-16 container mx-auto max-w-[1000px]">
				{projects.slice(0, 4).map((project, i) => (
					<Project {...project} key={project.slug} index={i} />
				))}
			</div>

			<div className="flex justify-center pt-12">
				<Link
					href="/projects"
					aria-label="See more projects"
					className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
				>
					<span className="w-full h-full bg-gradient-to-br from-blue-400 via-[#ff5478] to-pink-500 group-hover:from-blue-400 group-hover:via-[#ff5478] group-hover:to-pink-500 absolute"></span>
					<span className="relative px-6 py-3 transition-all ease-out bg-secondary rounded-md group-hover:bg-opacity-0 duration-400">
						<span className="relative text-white">See More</span>
					</span>
				</Link>
			</div>
		</section>
	);
}

export default function Home(): JSX.Element {
	return (
		<Layout>
			<NextSeo title="Developer" />
			<Intro />
			<Projects />
		</Layout>
	);
}
