/* eslint-disable sonarjs/no-identical-functions */
import Layout from "@components/layout";
import Meta, { MetaType } from "@components/meta";
import { Container, Content } from "@styles/blog.theme";
import StyledLink from "@styles/underline";
import Link from "next/link";
import styled from "styled-components";

const List = styled.ul`
	list-style: unset;
	font-size: 20px;
`;
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
			<Container>
				<Content>
					<Meta META={meta} />
					<article>
						<h1>Site Map</h1>
						<h2>Main Content</h2>
						<List>
							{mainContent.map((value) => (
								<li key={value.link}>
									<Link href={value.link} passHref>
										<StyledLink>{value.name}</StyledLink>
									</Link>
								</li>
							))}
						</List>
						<span>
							other pages not worthy of featuring on the main
							index page
						</span>
						<List>
							{otherPages.map((value) => (
								<li key={value.link}>
									<Link href={value.link} passHref>
										<StyledLink>{value.name}</StyledLink>
									</Link>
								</li>
							))}
						</List>
					</article>
				</Content>
			</Container>
		</Layout>
	);
}
