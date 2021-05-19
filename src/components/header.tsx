/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import { useRouter } from "next/router";
import { BiGitMerge } from "react-icons/bi";
import { RiArrowDownSLine, RiScissorsLine } from "react-icons/ri";
import { useRef } from "react";
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
const StyledMenuArrow = styled.button`
	background-color: transparent;
	border: none;
`;
const Relative = styled.div`
	position: relative;
	.menu {
		position: absolute;
		left: 0;
		transform: translateX(-50%);
		display: none;
		flex-direction: column;
		justify-content: center;
		background-color: #383e42;
		border-radius: 0.5rem;
		width: 90vw;
		max-width: 250px;
		margin-top: 0.75rem;
		box-sizing: border-box;
		padding: 20px 10px;
		text-align: left;
		animation: fadeIn 0.2s ease;
		z-index: 50;
		a {
			margin: 5px 10px;
			display: flex;
			border-radius: 5px;
			padding: 5px;
			align-items: center;
			svg {
				margin: 10px;
			}
			:hover {
				background-color: #474d52;
			}
		}
	}
	.flex {
		display: flex;
	}
`;

// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	const router = useRouter();
	const ref = useRef<HTMLDivElement>(null);
	function toggleMenu() {
		if (ref.current === null) {
			return;
		}
		ref.current.classList.toggle("flex");
	}
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
				<Relative>
					<StyledMenuArrow onClick={toggleMenu} type="button">
						<RiArrowDownSLine color="white" size="25px" />
					</StyledMenuArrow>
					<div ref={ref} id="menu" className="menu">
						<Link href="/snippets">
							<a
								role="link"
								aria-label="Nav Link"
								onClick={toggleMenu}
							>
								<RiScissorsLine size="20px" />
								Snippets
							</a>
						</Link>
						<Link href="/activity">
							<a
								role="link"
								aria-label="Nav Link"
								onClick={toggleMenu}
							>
								<BiGitMerge size="22px" />
								Activity
							</a>
						</Link>
					</div>
				</Relative>
			</StyledNav>
		</Header>
	);
}
