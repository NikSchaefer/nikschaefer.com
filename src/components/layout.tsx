import Footer from "@components/footer";
import Header from "@components/header";
import React from "react";

// eslint-disable-next-line import/no-default-export
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
