/* eslint-disable sonarjs/no-identical-functions */
import { Section } from "@components/design";
import Layout from "@components/layout";
import Meta, { MetaType } from "@components/meta";
import { Content } from "@styles/blog.theme";
import Link from "next/link";

type Link = {
	link: string;
	name: string;
};

const mainContent: Link[] = [
	{
		link: "/",
		name: "Home",
	},
	{
		link: "/blog",
		name: "Blog",
	},
	{
		link: "/about",
		name: "About",
	},
	{
		link: "/portfolio",
		name: "Portfolio",
	},
];
const otherPages: Link[] = [
	{
		link: "/snippets",
		name: "Code Snippets",
	},
	{
		link: "/repos",
		name: "Repositories",
	},
	{
		link: "/stats",
		name: "Github Stats",
	},
];

export default function Sitemap(): JSX.Element {
	const meta: MetaType = {
		title: "Sitemap | Nik Schaefer",
		description: "Sitemap of all pages",
		lang: "en-us",
		image: "/logo.png",
		url: "nikschaefer.tech/sitemap",
	};
	return (
		<Layout>
			<Section>
				<Content>
					<Meta META={meta} />
					<article>
						<h1>Site Map</h1>
						<h2>Main Content</h2>
						<ul className="list-disc list-inside">
							{mainContent.map((value) => (
								<li key={value.link}>
									<Link href={value.link} passHref>
										<a className="slide">{value.name}</a>
									</Link>
								</li>
							))}
						</ul>
						<span>
							other pages not worthy of featuring on the main
							index page
						</span>
						<ul className="list-disc list-inside">
							{otherPages.map((value) => (
								<li key={value.link}>
									<Link href={value.link} passHref>
										<a className="slide">{value.name}</a>
									</Link>
								</li>
							))}
						</ul>
					</article>
				</Content>
			</Section>
		</Layout>
	);
}
