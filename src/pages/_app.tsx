import { pageview } from "@lib/gtag";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "../styles/globals.css";
import { paragraphAboutMe } from "config";

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
				description={paragraphAboutMe}
				titleTemplate="%s • Nik Schaefer"
				openGraph={{
					type: "website",
					locale: "en",
					url: "https://nikschaefer.vercel.app/",
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
