import { socials } from "../config";
import { Copy, Hand } from "lucide-react";

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
		name: "Blog",
		link: "/blog",
	},
	{
		name: "About",
		link: "/about",
	},
	{
		name: "Projects",
		link: "/projects",
	},
];

function Column({ col, title }: { col: ColType[]; title: string }) {
	return (
		<li className="w-full md:w-1/3 lg:w-1/3 font-inter">
			<ul className="px-4 sm:w-[fit-content] text-left mx-auto">
				<li>
					<h3 className="mb-4 font-semibold h5 text-primary">
						{title}
					</h3>
				</li>
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
						<div className="flex-col sm:flex-row bg-primary-800/10 gap-2 rounded-lg sm:rounded-full w-full px-8 py-4 mb-8 flex group">
							<div className="flex items-center">
								<Hand className="transition-all mr-2 duration-100 group-hover:text-primary group-hover:scale-105 group-hover:rotate-12" />
								<span> Say Hi! {"=>"} </span>
							</div>
							<div className="flex items-center">
								<a
									href="mailto:nikkschaefer@gmail.com"
									className="text-effect hover:cursor-pointer"
								>
									nikkschaefer@gmail.com
								</a>
								<button
									className="ml-2 hover:cursor-pointer"
									onClick={() => {
										navigator.clipboard.writeText(
											"nikkschaefer@gmail.com"
										);
									}}
								>
									<Copy
										className={"hover:text-white"}
										size={18}
									/>
								</button>
							</div>
						</div>
						<div className="flex items-center gap-1">
							© {new Date().getFullYear()} Nik Schaefer •{" "}
							<a
								href="https://github.com/NikSchaefer/nikschaefer.com/blob/master/src/components/footer.tsx"
								className="hover:text-primary duration-100 transition-colors"
							>
								{" "}
								Edit this text
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
