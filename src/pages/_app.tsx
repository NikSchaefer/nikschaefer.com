import { pageview } from "@lib/gtag";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "../styles/globals.css";

// eslint-disable-next-line import/dynamic-import-chunkname
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
	ssr: false,
});

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
			<AnimatedCursor
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-expect-error
				innerSize={10}
				outerSize={8}
				color="0, 216, 214"
				outerAlpha={0.2}
				innerScale={0.7}
				outerScale={5}
			/>
			<DefaultSeo
				title="Portfolio"
				description="I'm Nik, self-taught full-stack developer and hobbyist programmer student based in Minnesota, US I've been enjoying programming since I first began. I love supporting open source and making my own projects. I have taken on various roles between design, research and development."
				titleTemplate="%s | Nik Schaefer"
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
