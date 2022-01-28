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

import json from "../../content/featured.json";

function Intro() {
	return (
		<Section class="flex flex-col-reverse md:flex-row">
			<div className="pr-10">
				<H1 class="mb-2 mt-10 !text-5xl">Nik Schaefer</H1>
				<p className="mb-4 capitalize">
					full stack developer and machine learning student
				</p>
				<p>
					You've found my personal slice of the internet.{" "}
					<Link href="/about" passHref>
						<a className={underlineCSS}>Learn more about me</a>
					</Link>{" "}
					or{" "}
					<Link href="mailto:nikkschaefer@gmail.com" passHref>
						<a className={underlineCSS}>get in touch</a>
					</Link>{" "}
					while your here.
				</p>
				<Socials />
			</div>
			<img className="max-w-[100px] md:max-w-[230px]" src="/developer.svg" />
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
				{json.map((value) => (
					<li key={value.date}>
						<Link href={`/portfolio/${value.slug}`} passHref>
							<a className={underlineCSS}>{value.title}</a>
						</Link>{" "}
						- {value.short}
					</li>
				))}
			</ul>
			<div className="mt-6">
				<Link href="/portfolio" passHref>
					<a className={underlineCSS}>All Projects</a>
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
				<Link href="/blog" passHref>
					<a className={underlineCSS}>Read All Posts</a>
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
