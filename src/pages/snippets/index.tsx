import { H1 } from "@components/design";
import Layout from "@components/layout";
import clsx from "clsx";
import Link from "next/link";

import json from "../../../content/snippets.json";

export default function Snippets(): JSX.Element {
	return (
		<Layout>
			<H1 class="text-black my-10">Snippets</H1>
			<p>Small bits of code that I use</p>
			<div className="flex flex-row items-center justify-center text-left">
				{json.map((value) => (
					<Link
						href={`/snippets/${value.link}`}
						key={value.link}
						passHref
					>
						<a
							className={clsx(
								"relative w-2/12 text-white rounded",
								"py-4 px-2 text-lg flex flex-col m-5",
								"bg-gray-800 font-sans"
							)}
						>
							<span
								className={clsx(
									"text-lg font-bold inline-block",
									"w-auto capitalize bg-green-300",
									"rounded-r py-1 px-2 transform -translate-x-2",
									"text-gray-800 font-sans"
								)}
							>
								{value.tag}
							</span>
							<span>{value.title}</span>
						</a>
					</Link>
				))}
			</div>
		</Layout>
	);
}
