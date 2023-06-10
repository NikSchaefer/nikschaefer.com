import Footer from "@components/footer";
import Header from "@components/header";
import React from "react";

export default function Layout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<>
			<Header />
			<main className="font-inter min-h-[50vh]">{children}</main>
			<Footer />
		</>
	);
}
