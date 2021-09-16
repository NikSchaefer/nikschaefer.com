import { Article } from "@components/blog";
import { H1, H2, Section } from "@components/design";
import Layout from "@components/layout";
import { popularBlogs } from "config";
import Link from "next/link";
import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { RiLinkedinBoxFill } from "react-icons/ri";

import json from "../../content/featured.json";


function StyledSocial(props: {
	children: React.ReactNode;
	target?: string;
	href: string;
	rel?: string;
	ariaLabel?: string;
}) {
	return (
		<a
			className="flex items-center px-2 py-1 rounded-md bg-gray-50 hover:bg-gray-100"
			target={props.target}
			href={props.href}
			rel={props.rel}
			aria-label={props.ariaLabel}
		>
			{props.children}
		</a>
	);
}

export const sizeOfSVG = "30px";
export const colorOfSVG = "var(--accent)";
export default function Home(): JSX.Element {
	return (
		<Layout>
			<Section>
				<H1 class="mb-8 mt-20">Hi, I'm Nik Schaefer</H1>
				<p className="text-lg">
					I'm a full stack developer, machine learning student, and
					open source enthusiast. You've found my personal slice of
					the internet.{" "}
					<Link href="/about" passHref>
						<a className="slide">Learn more about me</a>
					</Link>{" "}
					or{" "}
					<Link href="mailto:nikkschaefer@gmail.com" passHref>
						<a className="slide">get in touch</a>
					</Link>{" "}
					while your here.
				</p>
				<div className="flex my-6 space-x-3">
					<StyledSocial
						target="_blank"
						href="https://github.com/NikSchaefer"
						rel="noreferrer"
						ariaLabel="Github"
					>
						<GoMarkGithub
							className="pr-2"
							size={sizeOfSVG}
							color={colorOfSVG}
						/>
						Github
					</StyledSocial>
					<StyledSocial
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/nikschaefer/"
						aria-label="LinkedIn"
					>
						<RiLinkedinBoxFill
							className="pr-2"
							size={sizeOfSVG}
							color={colorOfSVG}
						/>
						LinkedIn
					</StyledSocial>
					<StyledSocial
						href="mailto:nikkschaefer@gmail.com"
						ariaLabel="Email"
					>
						<HiOutlineMail
							className="pr-2"
							size={sizeOfSVG}
							color={colorOfSVG}
						/>
						Email
					</StyledSocial>
				</div>
			</Section>
			<Section>
				<H2>Projects</H2>
				<p>
					I usually work with the web platform but love to dabble in
					machine learning and its wonders.
					<br />
					<br />
					Here are some of my favorite personal projects I've worked
					on:
				</p>
				<ul className="text-lg list-disc sm:pl-5">
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
			<Section>
				<H2>Featured Articles</H2>
				<ul>
					{popularBlogs.slice(0, 3).map((data) => (
						<Article key={data.title} Blog={data} />
					))}
				</ul>
				<div className="flex justify-center">
					<Link href="/blog" passHref>
						<a className="slide">All Articles</a>
					</Link>
				</div>
			</Section>
		</Layout>
	);
}
