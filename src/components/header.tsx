import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import { HeaderLinks } from "../config";

const Header = styled.header`
	padding: 5px 50px;
	display: flex;
	box-sizing: border-box;
	border-bottom: 1px rgba(219, 219, 219, 0.671) solid;
	justify-content: space-between;
	align-items: center;
`;
const StyledNav = styled.nav`
	padding: 20px;
	display: flex;
	justify-content: center;
	margin: auto;
	a {
		margin: 0 20px;
		color: rgba(0, 0, 0, 0.637);
		font-size: 16px;
	}
	.active,
	a:hover {
		color: black;
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
