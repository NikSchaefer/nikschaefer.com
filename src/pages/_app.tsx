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
				description="I'm Nik, self-taught full-stack developer and hobbyist programmer student based in Minnesota, US I've been enjoying programming since I first began. I love supporting open source and making my own projects. I have taken on various roles between design, research and development."
				titleTemplate="%s | Nik Schaefer"
				noindex={false}
				openGraph={{
					type: "website",
					locale: "en",
					url: "https://nikschaefer.tech/",
					site_name: "Nik Schaefer Portfolio",
					profile: {
						firstName: "Nik",
						lastName: "Schaefer",
						username: "NikSchaefer",
					},
				}}
			/>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
