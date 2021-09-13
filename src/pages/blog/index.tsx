import { Article } from "@components/blog";
import { H1, H2 } from "@components/design";
import Layout from "@components/layout";
import { Popup } from "@components/popup";
import { Section } from "@styles/section.theme";
import clsx from "clsx";
import { allBlogs, popularBlogs } from "config";
import { useState } from "react";
import styled from "styled-components";

const ContentLayer = styled(Section)`
	margin: 4rem auto;
	max-width: 42rem;
`;

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
			<ContentLayer>
				<H1 class="text-black mb-4">Blog</H1>
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
								popup?.classList.add("popinout");
								setTimeout(() => {
									popup?.classList.remove("popinout");
								}, 5000);
							}
						}}
					>
						go
					</button>
				</div>
			</ContentLayer>
			<ContentLayer
				style={{ display: `${value === "" ? "block" : "none"}` }}
			>
				<H2 class="text-black">Most Popular</H2>
				<ul className="m-auto my-10">
					{popularBlogs.map((data) => (
						<Article key={data.link} Blog={data} />
					))}
				</ul>
			</ContentLayer>
			<ContentLayer>
				<H2 class="text-black">All Posts</H2>
				<ul>
					{blogs.map((data) => (
						<Article key={data.link} Blog={data} />
					))}
				</ul>
			</ContentLayer>
		</Layout>
	);
}
