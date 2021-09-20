import { Post } from "@components/blog";
import { H1, H2, Section } from "@components/design";
import Layout from "@components/layout";
import { Popup } from "@components/popup";
import clsx from "clsx";
import { allBlogs, popularBlogs } from "config";
import { NextSeo } from "next-seo";
import { useState } from "react";

export default function BlogIndex(): JSX.Element {
	const [value, setValue] = useState("");
	const [blogs, setBlogs] = useState(allBlogs);
	function query(keyword: string) {
		const out = [];
		const kw = keyword.trim().toLowerCase();
		for (const blog of allBlogs) {
			if (
				blog.description.toLowerCase().includes(kw) ||
				blog.title.toLowerCase().includes(kw)
			) {
				out.push(blog);
			}
		}
		setBlogs(out);
	}
	return (
		<Layout>
			<NextSeo title="Blog" />
			<Section class="my-16 max-w-2xl">
				<H1 class="mb-4">Blog</H1>
				<Popup />
				<div className="relative">
					<input
						value={value}
						onChange={(e) => {
							setValue(e.target.value);
							query(e.target.value);
						}}
						aria-label="search bar"
						type="text"
						placeholder="Search Blogs"
						className={clsx(
							"w-full pr-16 border-blue-500 border-opacity-20",
							"h-12 text-lg outline-none",
							"pl-4 border-2 rounded-lg border-solid"
						)}
					/>
					<button
						type="button"
						className={clsx(
							"absolute top-0 right-0 rounded-l-none",
							"bg-blue-500 hover:bg-blue-700 transition-colors cursor-pointer",
							"flex-shrink inline-flex h-12 px-4 flex-wrap items-center uppercase",
							"text-white rounded-r-lg"
						)}
						onClick={() => {
							if (blogs.length === 0) {
								const popup = document.querySelector(".popup");
								popup?.classList.add("animate-popinout");
								setTimeout(() => {
									popup?.classList.remove("animate-popinout");
								}, 5000);
							}
						}}
					>
						go
					</button>
				</div>
			</Section>
			<Section
				class="my-16 max-w-2xl"
				style={{ display: `${value === "" ? "block" : "none"}` }}
			>
				<H2>Most Popular</H2>
				<ul className="m-auto my-10">
					{popularBlogs.map((data) => (
						<Post key={data.link} Blog={data} />
					))}
				</ul>
			</Section>
			<Section class="my-16 max-w-2xl">
				<H2>All Posts</H2>
				<ul>
					{blogs.map((data) => (
						<Post key={data.link} Blog={data} />
					))}
				</ul>
			</Section>
		</Layout>
	);
}
