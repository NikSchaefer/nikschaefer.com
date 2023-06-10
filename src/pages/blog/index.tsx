import { Post } from "@components/blog";
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
			<section className="pt-[5em] w-[90%] max-w-[800px] mx-auto">
				<h1
					className={clsx(
						"title text-effect mx-auto font-semibold text-center pb-3"
					)}
				>
					Blog.
				</h1>
				<div className="relative pt-[1em] w-[90%] max-w-[600px] mx-auto">
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
							"pl-4 border-2 rounded-xl border-solid",
							"bg-transparent"
						)}
					/>
				</div>
			</section>

			<section
				className="pt-[2em] w-[90%] max-w-[800px] mx-auto"
				style={{ display: `${value === "" ? "block" : "none"}` }}
			>
				<h2 className="text-white font-semibold">Most Popular</h2>
				<ul>
					{popularBlogs.map((data) => (
						<Post key={data.link} blog={data} />
					))}
				</ul>
			</section>
			<section className="pt-[5em] w-[90%] max-w-[800px] mx-auto">
				<h2 className="text-white font-semibold">All Posts</h2>
				<ul>
					{blogs.map((data) => (
						<Post key={data.link} blog={data} />
					))}
				</ul>
				{blogs.length === 0 && <span>No posts found.</span>}
			</section>
		</Layout>
	);
}
