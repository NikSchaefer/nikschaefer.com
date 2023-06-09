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
		<Link
			className={clsx(
				"text-left max-w-[300px] w-[90%] p-3 rounded-md bg-gray-800 hover:bg-gray-700",
				"border border-gray-600"
			)}
			href={`/projects/${slug}`}
		>
			<h1
				className={clsx(
					"mt-2 text-lg font-semibold text-white",
					"w-[fit-content] from-red-200 to-yellow-200"
				)}
			>
				{title}
			</h1>
			<p className="mt-2 text-sm text-gray-300">
				{text}
			</p>
		</Link>
	);
}

export { Card, sortByOptions };
export type { Project, SortOption };
