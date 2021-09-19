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
	content: Project[];
};

const sortByOptions: SortOption[] = [
	{ name: "All", include: [], content: [] },
	{
		name: "Machine Learning",
		include: ["Tensorflow", "tensorflow"],
		content: [],
	},
	{
		name: "Web Dev",
		include: ["Javascript", "Typescript", "React", "Next.js"],
		content: [],
	},
	{
		name: "Python",
		include: ["Python", "Tensorflow", "Pandas"],
		content: [],
	},
	{
		name: "Golang",
		include: ["Go", "Golang", "go", "golang"],
		content: [],
	},
];
function calculateType(tech: string[]): string {
	const out: string[] = [];

	for (const option of sortByOptions) {
		if (tech.some((r) => option.include.includes(r))) {
			out.push(option.name);
		}
	}

	return out.join("/");
}

function Card(props: { project: Project }): JSX.Element {
	return (
		<Link href={`/portfolio/${props.project.slug}`}>
			<a className="text-left w-full max-w-sm px-4 py-3 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100">
				<div className="flex items-center justify-between">
					<span className="text-sm font-light text-gray-800 dark:text-gray-400">
						{props.project.tech[0]}
					</span>
					<span className="px-3 py-1 text-xs text-indigo-800 uppercase bg-indigo-200 rounded-full dark:bg-indigo-300 dark:text-indigo-900">
						{calculateType(props.project.tech)}
					</span>
				</div>
				<div>
					<h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
						{props.project.title}
					</h1>
					<p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
						{props.project.text}
					</p>
				</div>

				<div>
					<div className="flex items-center justify-center mt-4">
						<a
							href={props.project.github}
							className="mr-2 text-gray-800 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-5 h-5 fill-current"
								viewBox="0 0 24 24"
							>
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						</a>

						<Link href={`/portfolio/${props.project.slug}`}>
							<a className="mr-2 text-gray-800 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
								<svg
									className="w-5 h-5 fill-current"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z" />
									<path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z" />
									<path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z" />
								</svg>
							</a>
						</Link>
					</div>
				</div>
			</a>
		</Link>
	);
}

export { Card, sortByOptions };
export type { Project, SortOption };
