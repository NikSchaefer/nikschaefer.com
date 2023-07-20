import Layout from "@components/layout";
import clsx from "clsx";
import { NextSeo } from "next-seo";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import json from "../../../content/snippets.json";
import { Container } from "lucide-react";

const colorMap = {
	react: "bg-blue-500",
	node: "bg-green-500",
	"next.js": "bg-black",
	shell: "bg-gray-800",
	python: "bg-yellow-500",
	javascript: "bg-yellow-300",
	lambda: "bg-purple-500",
	aws: "bg-red-500",
	matplotlib: "bg-blue-500",
	docker: "bg-yellow-500",
	kali: "bg-green-500",
};

export default function Snippets(): JSX.Element {
	return (
		<Layout>
			<NextSeo title="Snippets" />
			<section className="pt-[3em] container mx-auto">
				<motion.h1
					initial={{ y: -10, opacity: 0 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2, delay: 0.1 }}
					viewport={{ once: true }}
					className={clsx(
						"title mx-auto text-effect font-semibold text-center"
					)}
				>
					Snippets.
				</motion.h1>
				<motion.p
					initial={{ y: -10, opacity: 0 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2, delay: 0.3 }}
					viewport={{ once: true }}
					className="mt-[2em] h4 text-center mx-auto w-[90%] max-w-[750px]"
				>
					Here are some of my favorite code snippets that come in use
					here and there.
				</motion.p>
			</section>
			<div className="mt-[1em] flex flex-col items-center justify-center gap-8 w-[90%] max-w-[800px] mx-auto">
				{json.map((value) => (
					<Link
						href={`/snippets/${value.link}`}
						key={value.link}
						className={clsx(
							"relative w-full rounded",
							"p-4 text-lg flex items-center justify-between",
							"bg-secondary-400 border border-primary/10 min-w-[180px]",
							"hover:bg-primary/10 transition-colors duration-200"
						)}
					>
						<div>
							<h3
								className={clsx(
									"font-semibold w-fit",
									"capitalize h5",
									"rounded mb-3 px-2",
									"text-gray-800",
									// @ts-ignore
									colorMap[value.tag] || ""
								)}
							>
								{value.tag}
							</h3>
							<h2 className="h4">{value.title}</h2>
						</div>

						<div
							className={clsx(
								"p-5",
								"rounded-full text-white",
								// @ts-ignore
								colorMap[value.tag] || ""
							)}
						>
							<Container className="h-10 w-10" />
						</div>
					</Link>
				))}
			</div>
		</Layout>
	);
}
