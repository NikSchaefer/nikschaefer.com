import { H1, H2, Section } from "@components/design";
import FeaturedArticle from "@components/featured";
import Layout from "@components/layout";
import { Socials } from "@components/socials";
import { underlineCSS } from "@styles/style";
import clsx from "clsx";
import { popularBlogs } from "config";
import { NextSeo } from "next-seo";
import Link from "next/link";
import React from "react";

import projects from "../../content/projects.json";

function Intro() {
	return (
		<Section class="flex flex-col-reverse md:flex-row">
			<div className="pr-10">
				<H1 class="mb-2 mt-10 !text-5xl ">
					👋 I'm{" "}
					<span className="text-transparent bg-clip-text from-blue-400 to-pink-500 bg-gradient-to-r">
						Nik Schaefer
					</span>
				</H1>
				<p className="mb-4">
					I'm a full stack engineer and data science student
				</p>
				<p>
					You've found my personal slice of the internet.{" "}
					<Link href="/about" className={underlineCSS}>
						Learn more about me
					</Link>{" "}
					or{" "}
					<Link
						href="mailto:nikkschaefer@gmail.com"
						className={underlineCSS}
					>
						get in touch
					</Link>{" "}
					while your here.
				</p>
				<Socials />
			</div>
			<img
				className="max-w-[100px] md:max-w-[230px]"
				src="/developer.svg"
				alt="developer looking at computer"
			/>
		</Section>
	);
}

function Projects() {
	return (
		<Section>
			<H2>Projects</H2>
			<p>
				I usually work with the web platform but love to dabble in
				machine learning and its wonders.
				<br />
				<br />
				Here are some of my favorite personal projects I've worked on:
			</p>
			<ul className="list-disc sm:pl-5 pl-8">
				{projects.slice(0, 4).map((value) => (
					<li key={value.slug}>
						<Link
							href={`/portfolio/${value.slug}`}
							className={underlineCSS}
						>
							{value.title}
						</Link>{" "}
						- {value.text}
					</li>
				))}
			</ul>
			<div className="mt-6">
				<Link href="/portfolio" className={underlineCSS}>
					All Projects
				</Link>
			</div>
		</Section>
	);
}

function Articles() {
	return (
		<Section>
			<H2>Featured Articles</H2>
			<div className="flex flex-col justify-center my-10 md:flex-row gap-6">
				{popularBlogs.slice(0, 3).map((data) => (
					<FeaturedArticle
						className={clsx(
							"bg-gradient-to-r capitalize",
							data.className
						)}
						key={data.title}
						Blog={data}
					/>
				))}
			</div>
			<div>
				<Link href="/blog" className={underlineCSS}>
					Read All Posts
				</Link>
			</div>
		</Section>
	);
}

export default function Home(): JSX.Element {
	return (
		<Layout>
			<NextSeo title="Developer" />
			<Intro />
			<Projects />
			<Articles />
		</Layout>
	);
}
