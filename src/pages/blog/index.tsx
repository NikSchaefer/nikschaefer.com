import { Post } from "@components/blog";
import { H1, H2, Section } from "@components/design";
import Layout from "@components/layout";
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
			<Section class="mt-16 max-w-2xl">
				<H1 class="mb-4">Blog</H1>
				<div className="relative">
					<input
						value={value}
						onChange={(e) => {
							setValue(e.target.value);
							query(e.target.value);
						}}
						aria-label="search bar"
						type="text"
						placeholder="Search articles"
						className={clsx(
							"w-full border-gray-500 border-opacity-20",
							"h-12 text-lg outline-none",
							"pl-4 border-2 rounded-lg border-solid"
						)}
					/>
				</div>
			</Section>
			<Section
				class="my-4 max-w-2xl mb-0"
				style={{ display: `${value === "" ? "block" : "none"}` }}
			>
				<H2>Most Popular</H2>
				<ul>
					{popularBlogs.map((data) => (
						<Post key={data.link} Blog={data} />
					))}
				</ul>
			</Section>
			<Section class="my-4 max-w-2xl">
				<H2>All Posts</H2>
				<ul>
					{blogs.map((data) => (
						<Post key={data.link} Blog={data} />
					))}
				</ul>
				{blogs.length === 0 && <span>No posts found.</span>}
			</Section>
		</Layout>
	);
}
