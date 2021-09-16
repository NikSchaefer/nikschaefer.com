/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import { RiArrowDownSLine, RiScissorsLine } from "react-icons/ri";

import { HeaderLinks } from "../config";

const menuClassName = clsx(
	"absolute left-0 hidden transform",
	"-translate-x-1/2 flex-col justify-center",
	"border border-white border-opacity-20",
	"rounded-lg max-w-[300px]",
	"mt-3 box-border py-5 px-5 text-left",
	"z-50 bg-coal dark:bg-shark fadeIn"
);

const menuAClassName = clsx(
	"my-1 mx-2 flex rounded items-center px-1",
	"hover:bg-coal-400 px-5 dark:hover:bg-shark-400",
	"text-lg"
);

function useOutsideAlerter(ref: React.RefObject<HTMLDivElement>) {
	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		function handleClickOutside(event: any) {
			if (ref.current && !ref.current.contains(event.target)) {
				ref.current.classList.remove("appear");
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
		document.querySelector("html")?.classList.toggle("dark");
		setIsDarkMode(!isDarkMode);
	}

	function toggleMenu() {
		if (ref.current !== null) {
			ref.current.classList.toggle("appear");
		}
		if (ref2.current !== null) {
			ref2.current.classList.toggle("appear");
		}
	}
	useEffect(() => {
		if (document.querySelector("html")?.classList.contains("dark")) {
			setIsDarkMode(true);
		}
	}, []);
	return (
		<header
			className={clsx(
				"flex box-border justify-between",
				"items-center py-1 px-12",
				"shadow-md bg-coal dark:bg-shark",
				"border-b border-white border-opacity-20"
			)}
		>
			<a className="max-w-[170px]" href="https://hackclub.com/">
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
			<nav className={clsx("p-5 hidden justify-center m-auto sm:flex")}>
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
				<div className="relative">
					<button
						aria-label="drop down"
						onClick={toggleMenu}
						type="button"
					>
						<RiArrowDownSLine color="white" size="25px" />
					</button>
					<div ref={ref} id="menu" className={menuClassName}>
						<Link href="/snippets">
							<a
								className={menuAClassName}
								role="link"
								aria-label="Nav Link"
								onClick={toggleMenu}
							>
								<RiScissorsLine className="m-2" size="20px" />
								Snippets
							</a>
						</Link>
					</div>
				</div>
			</nav>
			<nav className="flex p-5 justify-center m-auto sm:hidden">
				<Link href="/">
					<a className="text-lg text-gray-300 font-sans">Home</a>
				</Link>
				<div className="relative">
					<button
						aria-label="drop down"
						onClick={toggleMenu}
						type="button"
					>
						<RiArrowDownSLine color="white" size="25px" />
					</button>
					<div ref={ref2} id="menu" className={menuClassName}>
						{HeaderLinks.map((value) => (
							<Link href={value.link} key={value.link}>
								<a
									className={menuAClassName}
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
								className={menuAClassName}
								role="link"
								aria-label="Nav Link"
								onClick={toggleMenu}
							>
								Snippets
							</a>
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
}
