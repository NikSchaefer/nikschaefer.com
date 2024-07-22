import Footer from "@components/footer";
import Header from "@components/header";
import clsx from "clsx";
import React from "react";

export default function Layout({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}): JSX.Element {
	return (
		<>
			<Header />
			<main className={clsx("min-h-[50vh]", className)}>
				{children}
			</main>
			<Footer />
		</>
	);
}
