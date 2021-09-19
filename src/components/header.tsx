import { Menu } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import { RiArrowDownSLine } from "react-icons/ri";

import { HeaderLink, HeaderLinks, SecondaryLinks } from "../config";

function MenuItem({ links }: { links: HeaderLink[] }) {
	return (
		<Menu as="div" className="relative">
			<Menu.Button>
				<RiArrowDownSLine color="white" size="25px" />
			</Menu.Button>
			<Menu.Items
				className={clsx(
					"absolute left-0 transform",
					"-translate-x-1/2 flex-col justify-center",
					"border border-white border-opacity-20",
					"rounded-lg max-w-[600px]",
					"mt-3 box-border py-5 px-5 text-left",
					"z-50 bg-coal dark:bg-shark animate-fadein",
					"text-gray-300 min-w-[230px]"
				)}
			>
				{links.map(({ link, title, func }) => (
					<Menu.Item key={link}>
						<Link href={link}>
							<a
								className={clsx(
									"my-1 mx-2 flex rounded",
									"items-center px-1",
									"hover:bg-coal-400 px-5",
									"dark:hover:bg-shark-400",
									"text-lg"
								)}
								role="link"
								aria-label="Nav Link"
							>
								{func()}
								{title}
							</a>
						</Link>
					</Menu.Item>
				))}
			</Menu.Items>
		</Menu>
	);
}

// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	const router = useRouter();
	const [isDarkMode, setIsDarkMode] = useState(false);
	function toggleDarkMode() {
		document.querySelector("html")?.classList.toggle("dark");
		setIsDarkMode(!isDarkMode);
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
			<a href="https://hackclub.com/">
				<img
					className={clsx(
						"max-w-[120px] absolute origin-top-left",
						"top-2 left-0 z-50 transform",
						"sm:max-w-[150px] sm:top-0",
						"hover:animate-wave"
					)}
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
			<nav className="p-5 hidden justify-center m-auto sm:flex">
				{HeaderLinks.map((value) => (
					<Link key={value.link} href={value.link}>
						<a
							className={clsx(
								router.pathname === value.link
									? "text-white"
									: "",
								"my-0 mx-5 text-lg",
								"text-gray-400 hover:text-white"
							)}
						>
							{value.title}
						</a>
					</Link>
				))}
				<MenuItem links={SecondaryLinks} />
			</nav>
			<nav className="flex p-5 justify-center m-auto sm:hidden">
				<Link href="/">
					<a className="text-lg text-gray-300">Home</a>
				</Link>
				<MenuItem links={[...HeaderLinks, ...SecondaryLinks]} />
			</nav>
		</header>
	);
}
