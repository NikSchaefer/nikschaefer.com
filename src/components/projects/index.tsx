import Project from "@components/projects/project";
import Link from "next/link";
import projects from "../../../content/projects.json";
import Intro from "./intro";
import VerticalProject from "./vertical";

export default function Projects() {
	return (
		<section className="w-[90%] max-w-[900px] mx-auto relative">
			<Intro />

			<div className="flex flex-col sm:grid sm:grid-cols-2 gap-12">
				{projects
					.slice(0, 3)
					.map((project, i) =>
						i === 0 ? (
							<Project {...project} key={project.slug} />
						) : (
							<VerticalProject {...project} key={project.slug} />
						)
					)}
			</div>

			<Link
				href="/projects"
				aria-label="See more projects"
				className="flex justify-center gap-2 hover:text-primary/80 group absolute -bottom-10 right-0 transition-colors duration-200"
			>
				See More
			</Link>
		</section>
	);
}
