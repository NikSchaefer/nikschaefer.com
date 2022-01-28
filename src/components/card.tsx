/* eslint-disable react/no-unused-prop-types */
import { underlineCSS } from "@styles/style";
import clsx from "clsx";
import Link from "next/link";

type Project = {
	title: string;
	github: string;
	external?: string;
	content?: string;
	tech: string[];
	slug: string;
	text?: string;
};
type SortOption = {
	name: string;
	include: string[];
};

const sortByOptions: SortOption[] = [
	{ name: "All", include: [] },
	{
		name: "Machine Learning",
		include: ["Tensorflow", "tensorflow"],
	},
	{
		name: "Web Dev",
		include: ["Javascript", "Typescript", "React", "Next.js"],
	},
	{
		name: "Python",
		include: ["Python", "Tensorflow", "Pandas"],
	},
	{
		name: "Golang",
		include: ["Go", "Golang", "go", "golang"],
	},
];

function Card({ title, slug, text }: Project): JSX.Element {
	return (
		<Link href={`/portfolio/${slug}`}>
			<a
				className={clsx(
					"text-left max-w-[300px] w-[90%] p-3 rounded-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100",
					"border border-gray-200 dark:border-gray-600"
				)}
			>
				<h1
					className={clsx(
						"mt-2 text-lg font-semibold text-gray-800 dark:text-white",
						"w-[fit-content] from-red-200 to-yellow-200",
						underlineCSS
					)}
				>
					{title}
				</h1>
				<p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
					{text}
				</p>
			</a>
		</Link>
	);
}

export { Card, sortByOptions };
export type { Project, SortOption };
