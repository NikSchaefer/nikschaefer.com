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
				description="I'm a data science student who absolutely loves building scalable and maintainable software. Currently, I'm working as a software engineer at a cool startup in the mental health space. Being a big fan of open source, I've contributed to numerous projects along the way. I'm always on the lookout for exciting opportunities to learn and grow. Let's connect and make something awesome together!"
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
