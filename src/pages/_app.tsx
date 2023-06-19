import { pageview } from "@lib/gtag";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: unknown) => {
			pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	return (
		<>
			<DefaultSeo
				title="Portfolio"
				description="I'm Nik Schaefer,  a driven lead software engineer and co-founder, dedicated to leveraging technology and education to create positive change."
				titleTemplate="Nik Schaefer • %s"
				openGraph={{
					type: "website",
					locale: "en",
					url: "https://nikschaefer.com/",
					site_name: "Nik Schaefer's Portfolio",
					profile: {
						firstName: "Nik",
						lastName: "Schaefer",
						username: "NikSchaefer",
					},
				}}
			/>
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
