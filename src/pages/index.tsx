import Layout from "@components/layout";
import clsx from "clsx";
import { NextSeo } from "next-seo";
import React from "react";

import { motion } from "framer-motion";
import Projects from "@components/projects";
import Timeline from "@components/work";
import CTA from "@components/cta";
import About from "@components/home-about";

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

export default function Home(): JSX.Element {
	return (
		<Layout>
			<NextSeo title="Developer" />
			<Intro />
			<About />
			<Timeline />
			<Projects />
			<CTA />
		</Layout>
	);
}
