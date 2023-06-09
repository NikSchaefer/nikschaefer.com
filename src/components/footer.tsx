import { socials } from "config";
import { Hand } from "lucide-react";

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
		name: "About",
		link: "/about",
	},
	{
		name: "Blog",
		link: "/blog",
	},
	{
		name: "Projects",
		link: "/projects",
	},
	{
		name: "Snippets",
		link: "/snippets",
	},
];

function Column({ col, title }: { col: ColType[]; title: string }) {
	return (
		<li className="w-full md:w-1/3 lg:w-1/3 font-inter">
			<ul className="px-4 sm:w-[fit-content] text-left mx-auto">
				<h5 className="mb-4 font-semibold text-primary">{title}</h5>
				{col.map((data) => (
					<li
						key={data.link}
						className="mb-4 transition-colors duration-200 hover:text-primary-300"
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
		<footer className="py-40 text-white w-[90%] max-w-[1200px] mx-auto font-inter">
			<div className="text-gray-300">
				<ul className="grid grid-cols-1 sm:grid-cols-4 gap-2">
					<li className="sm:col-span-2 p-4">
						<div className="bg-primary-500/10 gap-4 rounded-full w-full px-8 py-4 mb-8 flex">
							<Hand />
							<div>
								Say Hello! {"=>"}{" "}
								<a
									href="mailto:nikkschaefer@gmail.com"
									className="text-effect hover:cursor-pointer"
								>
									nikkschaefer@gmail.com
								</a>
							</div>
						</div>
						<div className="flex items-center gap-1">
							© {new Date().getFullYear()} Nik Schaefer •{" "}
							<a
								href="https://github.com/NikSchaefer/Portfolio-V3"
								className="hover:text-primary duration-100 transition-colors"
							>
								{" "}
								Edit this page
							</a>
						</div>
					</li>
					<Column title="Here" col={Col3} />
					<Column title="Elsewhere" col={Col2} />
				</ul>
			</div>
		</footer>
	);
}
