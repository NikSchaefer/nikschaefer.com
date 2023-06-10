import clsx from "clsx";
import Link from "next/link";
import { Project } from "types";

type SortOption = {
	name: string;
	include: string[];
};

const sortByOptions: SortOption[] = [
	{ name: "All", include: [] },
	{
		name: "ML",
		include: ["Tensorflow", "tensorflow"],
	},
	{
		name: "Web",
		include: ["Javascript", "Typescript", "React", "Next.js"],
	},
	{
		name: "Python",
		include: ["Python", "Tensorflow", "Pandas"],
	},
	{
		name: "Go",
		include: ["Go", "Golang", "go", "golang"],
	},
];

function Card({ title, slug, text }: Project): JSX.Element {
	return (
		<Link
			className={clsx(
				"text-left bg-secondary-600 p-3 rounded-xl hover:-translate-y-0.5",
				"p-6 border border-primary/30 transition-transform duration-200",
				"hover:border-primary/70"
			)}
			href={`/projects/${slug}`}
		>
			<h4 className={clsx("mt-2 font-semibold text-primary")}>{title}</h4>
			<p className="mt-2 text-sm text-gray-300">{text}</p>
		</Link>
	);
}

export { Card, sortByOptions };
export type { SortOption };
