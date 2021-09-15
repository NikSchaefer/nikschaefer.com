/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import { RiArrowDownSLine, RiScissorsLine } from "react-icons/ri";
import styled from "styled-components";

import { HeaderLinks } from "../config";

const Relative = styled.div`
	position: relative;
	.menu {
		position: absolute;
		left: 0;
		transform: translateX(-50%);
		display: none;
		flex-direction: column;
		justify-content: center;
		background-color: var(--header);
		border: #ffffff30 1px solid;
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
const Header = styled.header`
	padding: 5px 50px;
	display: flex;
	box-sizing: border-box;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.274);
	background-color: var(--header);
	border-bottom: #ffffff30 1px solid;
	position: relative;
`;

const StyledMenuArrow = styled.button`
	background-color: transparent;
	border: none;
	:hover {
		cursor: pointer;
	}
`;

function useOutsideAlerter(ref: React.RefObject<HTMLDivElement>) {
	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		function handleClickOutside(event: any) {
			if (ref.current && !ref.current.contains(event.target)) {
				ref.current.classList.remove("flex");
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);
}
// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	const router = useRouter();
	const ref = useRef<HTMLDivElement>(null);
	const ref2 = useRef<HTMLDivElement>(null);
	const [isDarkMode, setIsDarkMode] = useState(false);
	useOutsideAlerter(ref);
	useOutsideAlerter(ref2);
	function toggleDarkMode() {
		document.body.classList.toggle("darkmode");
		setIsDarkMode(!isDarkMode);
	}

	function toggleMenu() {
		if (ref.current !== null) {
			ref.current.classList.toggle("flex");
		}
		if (ref2.current !== null) {
			ref2.current.classList.toggle("flex");
		}
	}
	useEffect(() => {
		if (document.body.classList.contains("darkmode")) {
			setIsDarkMode(true);
		}
	}, []);
	return (
		<Header>
			<a href="https://hackclub.com/">
				<img
					className="hackclub"
					src="https://assets.hackclub.com/flag-orpheus-left.svg"
					alt="Hack Club"
				/>
			</a>
			<button
				type="button"
				className={clsx(
					"absolute right-3 p-2",
					"rounded-xl hover:bg-gray-600",
					"hover:bg-opacity-50"
				)}
				aria-label="Toggle Dark Mode"
				onClick={toggleDarkMode}
			>
				{isDarkMode ? (
					<BiSun color="yellow" size="25px" />
				) : (
					<BiMoon color="white" size="25px" />
				)}
			</button>
			<nav className={clsx("p-5 flex justify-center m-auto sm:hidden")}>
				{HeaderLinks.map((value) => (
					<Link key={value.link} href={value.link}>
						<a
							className={clsx(
								router.pathname === value.link ? "active" : "",
								"my-0 mx-5 text-lg font-sans",
								"text-gray-400 hover:text-white"
							)}
						>
							{value.title}
						</a>
					</Link>
				))}
				<Relative>
					<StyledMenuArrow
						aria-label="drop down"
						onClick={toggleMenu}
						type="button"
					>
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
					</div>
				</Relative>
			</nav>
			<nav className="hidden sm:flex">
				<Link href="/">
					<a>Home</a>
				</Link>
				<Relative>
					<StyledMenuArrow
						aria-label="drop down"
						onClick={toggleMenu}
						type="button"
					>
						<RiArrowDownSLine color="white" size="25px" />
					</StyledMenuArrow>
					<div ref={ref2} id="menu" className="menu">
						{HeaderLinks.map((value) => (
							<Link href={value.link} key={value.link}>
								<a
									role="link"
									aria-label="Nav Link"
									onClick={toggleMenu}
								>
									{value.title}
								</a>
							</Link>
						))}
						<Link href="/snippets">
							<a
								role="link"
								aria-label="Nav Link"
								onClick={toggleMenu}
							>
								Snippets
							</a>
						</Link>
					</div>
				</Relative>
			</nav>
		</Header>
	);
}
