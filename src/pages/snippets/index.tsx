import { H1 } from "@components/design";
import Layout from "@components/layout";
import clsx from "clsx";
import { NextSeo } from "next-seo";
import Link from "next/link";

import json from "../../../content/snippets.json";

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
	docker: "bg-blue-700",
};

export default function Snippets(): JSX.Element {
	return (
		<Layout>
			<NextSeo title="Snippets" />
			<H1 class="mt-10 text-center">Snippets</H1>
			<p className="text-center mb-4">
				Small bits of code that I use that don't deserve a blog
			</p>
			<div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-x-4 gap-y-4 text-black">
				{json.map((value) => (
					<Link
						href={`/snippets/${value.link}`}
						key={value.link}
						className={clsx(
							"relative w-[80%] lg:w-2/12 text-white rounded",
							"py-4 px-2 text-lg flex flex-col m-5",
							"bg-gray-800 min-w-[180px]"
						)}
					>
						<span
							className={clsx(
								"text-lg font-semibold inline-block",
								"w-auto capitalize",
								"rounded-r mb-3 px-2 transform -translate-x-2",
								"text-gray-800 w-[fit-content]",
								// @ts-ignore
								colorMap[value.tag] || ""
							)}
						>
							{value.tag}
						</span>
						<span>{value.title}</span>
					</Link>
				))}
			</div>
		</Layout>
	);
}
