import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import { HeaderLinks } from "../config";

const Header = styled.header`
	padding: 5px 50px;
	display: flex;
	box-sizing: border-box;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.274);
	background-color: #24292d;
`;
const StyledNav = styled.nav`
	padding: 20px;
	display: flex;
	justify-content: center;
	margin: auto;
	a {
		margin: 0 20px;
		color: rgba(233, 233, 233, 0.637);
		font-size: 18px;
		font-family: "Mukta", sans-serif;
	}
	.active,
	a:hover {
		color: #ffffff;
	}
`;
// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	const router = useRouter();
	return (
		<Header>
			<StyledNav>
				{HeaderLinks.map((value) => (
					<Link key={value.link} href={value.link}>
						<a
							className={
								router.pathname === value.link ? "active" : ""
							}
						>
							{value.title}
						</a>
					</Link>
				))}
			</StyledNav>
		</Header>
	);
}
