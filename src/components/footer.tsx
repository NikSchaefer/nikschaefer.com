import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import styled from "styled-components";

const Footer = styled.footer`
	margin: 20px 0;
`;
const Container = styled.div`
	display: flex;
	justify-content: center;
`;
const StyledMedia = styled.a`
	margin: 10px;
	padding: 13px;
	:hover {
		background-color: rgba(54, 54, 54, 0.027);
		border-radius: 100px;
	}
`;
const size = "25px";
const data: DataType[] = [
	{
		link: "https://github.com/NikSchaefer",
		label: "Github",
		img: () => <SiGithub size={size} aria-label="Github" />,
	},
	{
		link: "https://www.linkedin.com/in/nikschaefer/",
		label: "LinkedIn",
		img: () => <FaLinkedinIn size={size} aria-label="LinkedIn" />,
	},
	{
		link: "mailto:nikkschaefer@gmail.com",
		label: "Email",
		img: () => <HiOutlineMail size={size} aria-label="Email" />,
	},
];
const Copyright = styled.span`
	font-size: 14px;
	color: #474747;
	a {
		:hover {
			text-decoration: underline;
		}
	}
`;
type DataType = {
	// eslint-disable-next-line @typescript-eslint/ban-types
	img: Function;
	link: string;
	label: string;
};
// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	return (
		<Footer>
			<Container>
				{data.map((values) => (
					<StyledMedia key={values.label} href={values.link}>
						{values.img()}
					</StyledMedia>
				))}
			</Container>
			<Copyright>
				© 2021, Nik Schaefer •{" "}
				<Link href="/sitemap">
					<a>sitemap</a>
				</Link>
			</Copyright>
		</Footer>
	);
}

export { data, StyledMedia };
