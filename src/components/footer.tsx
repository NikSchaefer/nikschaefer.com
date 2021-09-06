import Link from "next/link";
import styled from "styled-components";

type FooterLinks = {
	title: string;
	link: string;
};

const Col1: FooterLinks[] = [
	{
		title: "Home",
		link: "/",
	},
	{
		title: "About",
		link: "/about",
	},
	{
		title: "Portfolio",
		link: "/portfolio",
	},
];

const Col2: FooterLinks[] = [
	{
		title: "GitHub",
		link: "https://github.com/NikSchaefer",
	},
	{
		title: "LinkedIn",
		link: "https://www.linkedin.com/in/nikschaefer/",
	},
	{
		title: "Email",
		link: "mailto:nikkschaefer@gmail.com",
	},
];

const Col3: FooterLinks[] = [
	{
		title: "Blog",
		link: "/blog",
	},
	{
		title: "Snippets",
		link: "/snippets",
	},
	{
		title: "Sitemap",
		link: "/sitemap",
	},
];

const Footer = styled.footer`
	padding: 20px 0;
`;
const Container = styled.div`
	display: flex;
	justify-content: space-between;
	width: 90%;
	max-width: 600px;
	margin: auto;
	padding-bottom: 20px;
`;

const Copyright = styled.span`
	font-size: 12px;
	margin-top: 5px;
	color: var(--blog-text);
`;

function Column(props: { data: FooterLinks[] }) {
	return (
		<>
			{props.data.map((data) => (
				<Link key={data.title} href={data.link}>
					<a>{data.title}</a>
				</Link>
			))}
		</>
	);
}

const ColumnStyle = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	a {
		color: var(--footer);
		margin: 5px 0;
		font-size: 1.2rem;
		font-weight: 400;
		font-family: "Mukta", sans-serif;
		:hover {
			color: var(--footer-hover);
		}
	}
`;

// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	return (
		<Footer>
			<Container>
				<ColumnStyle>
					<Column data={Col1} />
				</ColumnStyle>
				<ColumnStyle>
					<Column data={Col2} />
				</ColumnStyle>
				<ColumnStyle>
					<Column data={Col3} />
				</ColumnStyle>
			</Container>
			<Copyright>© 2021 Nik Schaefer </Copyright>
		</Footer>
	);
}
