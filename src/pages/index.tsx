import { Post } from "@components/blog";
import { H1, H2, Section } from "@components/design";
import Layout from "@components/layout";
import { Socials } from "@components/socials";
import { popularBlogs } from "config";
import { NextSeo } from "next-seo";
import Link from "next/link";
import React from "react";

import json from "../../content/featured.json";

function Intro() {
	return (
		<Section>
			<H1 class="mb-8 mt-20">Hi, I'm Nik Schaefer</H1>
			<p className="text-lg">
				I'm a full stack developer, machine learning student, and open
				source enthusiast. You've found my personal slice of the
				internet.{" "}
				<Link href="/about" passHref>
					<a className="slide">Learn more about me</a>
				</Link>{" "}
				or{" "}
				<Link href="mailto:nikkschaefer@gmail.com" passHref>
					<a className="slide">get in touch</a>
				</Link>{" "}
				while your here.
			</p>
			<Socials />
		</Section>
	);
}

function Projects() {
	return (
		<Section>
			<H2>Projects</H2>
			<p className="text-lg">
				I usually work with the web platform but love to dabble in
				machine learning and its wonders.
				<br />
				<br />
				Here are some of my favorite personal projects I've worked on:
			</p>
			<ul className="text-lg list-disc sm:pl-5 pl-8">
				{json.map((value) => (
					<li key={value.date}>
						<Link href={`/portfolio/${value.slug}`} passHref>
							<a className="slide">{value.title}</a>
						</Link>{" "}
						- {value.short}
					</li>
				))}
			</ul>
			<div className="flex justify-center">
				<Link href="/portfolio" passHref>
					<a className="slide">All Projects</a>
				</Link>
			</div>
		</Section>
	);
}

function Articles() {
	return (
		<Section>
			<H2>Featured Articles</H2>
			<div>
				{popularBlogs.slice(0, 3).map((data) => (
					<Post key={data.title} Blog={data} />
				))}
			</div>
			<div className="flex justify-center">
				<Link href="/blog" passHref>
					<a className="slide">All Articles</a>
				</Link>
			</div>
		</Section>
	);
}

export default function Home(): JSX.Element {
	return (
		<Layout>
			<NextSeo title="Home" />
			<Intro />
			<Projects />
			<Articles />
		</Layout>
	);
}
