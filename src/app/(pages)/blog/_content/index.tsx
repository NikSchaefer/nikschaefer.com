"use client";

import { Post } from "@components/blog";
import clsx from "clsx";
import { allBlogs } from "../../../../config";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Command, SearchCode } from "lucide-react";
import { cn } from "@lib/utils";
import { titleStyle } from "@styles/common";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog",
};

export default function BlogIndex(): JSX.Element {
	const [search, setSearch] = useState("");
	const [blogs, setBlogs] = useState(allBlogs);

	const searchRef = useRef<HTMLInputElement>(null);

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

	useEffect(() => {
		document.addEventListener("keydown", (e) => {
			if (e.key === "/" && e.ctrlKey && searchRef.current) {
				e.preventDefault();
				searchRef.current.focus();
			}
		});

		return () => document.removeEventListener("keydown", () => {});
	}, []);

	return (
		<>
			<section className="pt-[1em] mx-auto w-[90%] max-w-[800px] ">
				<motion.h1
					viewport={{ once: true }}
					initial={{ y: -10, opacity: 0 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2, delay: 0.1 }}
					className={cn(titleStyle, "text-center pb-8")}
				>
					Blog.
				</motion.h1>
				<motion.div className="relative h4 mt-[1em]">
					<SearchCode className="absolute top-1/2 -translate-y-1/2 left-5 w-7 h-7" />
					<input
						ref={searchRef}
						id="search"
						value={search}
						onChange={(e) => {
							setSearch(e.target.value);
							query(e.target.value);
						}}
						type="text"
						placeholder="Search for a blog..."
						className={clsx(
							"bg-none bg-transparent outline-none w-full h-10 font-semibold placeholder-gray-400",
							"border-8 border-primary/10 rounded-3xl px-12 py-8"
						)}
					/>
					<div className="hidden sm:flex absolute top-1/2 items-center -translate-y-1/2 right-6 border-primary/30 space-x-2 border-4 p-2 rounded-xl">
						<Command />
						<span className="">/</span>
					</div>
				</motion.div>
			</section>

			<section className="pt-[3em] w-[90%] max-w-[800px] mx-auto">
				<motion.h2
					viewport={{ once: true }}
					initial={{ y: -10, opacity: 0 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2, delay: 0.5 }}
					className="text-foreground font-semibold"
				>
					Posts
				</motion.h2>
				<ul>
					{blogs.map((data, i) => (
						<motion.div
							viewport={{ once: true }}
							initial={{ y: -10, opacity: 0 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.2,
								delay: 0.5 + i * 0.1,
							}}
						>
							<Post key={data.link} blog={data} />
						</motion.div>
					))}
				</ul>
				{blogs.length === 0 && <span>No posts found.</span>}
			</section>
		</>
	);
}
