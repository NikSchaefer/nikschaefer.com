import Footer from "./_layout/footer";
import Header from "./_layout/header";

export default function Layout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
