import { socials } from "../../../config";
import ColophonPopover from "./colophon";

type ColType = {
	name: string;
	link: string;
};

const Col2: ColType[] = [
	{
		name: socials.github.name,
		link: socials.github.link,
	},
	{
		name: socials.linkedin.name,
		link: socials.linkedin.link,
	},
	{
		name: socials.email.name,
		link: socials.email.link,
	},
];

const Col3: ColType[] = [
	{
		name: "Snippets",
		link: "/snippets",
	},
	{
		name: "About",
		link: "/about",
	},
	{
		name: "Projects",
		link: "/projects",
	},
	{
		name: "Blog",
		link: "/blog",
	},
];

function Column({ col, title }: { col: ColType[]; title: string }) {
	return (
		<li className="w-full md:w-1/3 lg:w-1/3">
			<ul className="px-4 sm:w-[fit-content] text-left mx-auto">
				<li>
					<h3 className="mb-4 font-semibold h5 text-primary">
						{title}
					</h3>
				</li>
				{col.map((data) => (
					<li
						key={data.link}
						className="mb-4 text-muted-foreground hover:text-muted-foreground/95"
					>
						<a href={data.link}>{data.name}</a>
					</li>
				))}
			</ul>
		</li>
	);
}

export default function Main(): JSX.Element {
	return (
		<footer className="py-40 text-foreground w-[90%] max-w-[1200px] mx-auto">
			<ul className="grid grid-cols-1 sm:grid-cols-4 gap-2">
				<li className="sm:col-span-2 p-4">
					<div className="flex items-center gap-1 text-muted-foreground">
						© {new Date().getFullYear()} Nik Schaefer{" "}
						<span className="mx-1 text-muted-foreground">• </span>
						<ColophonPopover />	
					</div>
				</li>
				<Column title="Here" col={Col3} />
				<Column title="Elsewhere" col={Col2} />
			</ul>
		</footer>
	);
}
