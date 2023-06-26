import { Post } from "@components/blog";
import Layout from "@components/layout";
import clsx from "clsx";
import { allBlogs } from "../../config";
import { NextSeo } from "next-seo";
import { useState } from "react";
import { motion } from "framer-motion";

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
			<NextSeo
				title="Blog"
				description="Read my thoughts on software development, design, and more."
			/>
			<section className="pt-[3em] w-[90%] max-w-[800px] mx-auto">
				<motion.h1
					viewport={{ once: true }}
					initial={{ y: -10, opacity: 0 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2, delay: 0.1 }}
					className={clsx(
						"title text-effect mx-auto font-semibold text-center pb-3"
					)}
				>
					Blog.
				</motion.h1>
				<motion.div
					viewport={{ once: true }}
					initial={{ y: -10, opacity: 0 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2, delay: 0.3 }}
					className="relative pt-[1em] w-[90%] max-w-[600px] mx-auto"
				>
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
				</motion.div>
			</section>

			<section className="pt-[5em] w-[90%] max-w-[800px] mx-auto">
				<motion.h2
					viewport={{ once: true }}
					initial={{ y: -10, opacity: 0 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2, delay: 0.5 }}
					className="text-white font-semibold"
				>
					All Posts
				</motion.h2>
				<ul>
					{blogs.map((data, i) => (
						<motion.div
							viewport={{ once: true }}
							initial={{ y: -10, opacity: 0 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.2,
								delay: Math.min(0.5 + i * 0.1, 0.7),
							}}
						>
							<Post key={data.link} blog={data} />
						</motion.div>
					))}
				</ul>
				{blogs.length === 0 && <span>No posts found.</span>}
			</section>
		</Layout>
	);
}
