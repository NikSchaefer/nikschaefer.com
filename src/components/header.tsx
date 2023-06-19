import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { HeaderLinks } from "../config";

export default function Main(): JSX.Element {
	const router = useRouter();
	const [hasScrolled, setHasScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			if (offset > 100) {
				setHasScrolled(true);
			} else {
				setHasScrolled(false);
			}
		};

		window.removeEventListener("scroll", handleScroll);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<div className="h-[104px]" />
			<header
				className={clsx(
					"flex box-border justify-between z-40",
					"items-center py-1 px-12 fixed top-0 w-full left-0"
				)}
			>
				<nav className="p-5 flex justify-center w-full">
					<ul
						className={clsx(
							"flex gap-1 px-5 py-2 rounded-full font-inter relative",
							hasScrolled
								? "bg-[#10101a]/40 filter-effect shadow-md"
								: ""
						)}
					>
						{HeaderLinks.map((value, index) => (
							<motion.li
								className={clsx(
									router.pathname === value.link
										? "text-white"
										: "",
									"px-5 py-2 relative font-semibold rounded-full transition-all duration-100 hover:text-white"
								)}
								key={index}
							>
								{router.pathname === value.link && (
									<motion.div
										layoutId="underline"
										className="absolute top-0 left-0 w-full h-full bg-primary/10 rounded-full"
									/>
								)}
								<Link
									href={value.link}
									className="flex items-center"
								>
									{value.title}{" "}
									{index === 0 && (
										<motion.span className="text-xs font-semibold text-primary rounded italic py-[2px] border-primary/30 border-2 px-[7px] ml-1">
											/
										</motion.span>
									)}
								</Link>
							</motion.li>
						))}
					</ul>
				</nav>
			</header>
		</>
	);
}
