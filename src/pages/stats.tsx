import Layout from "@components/layout";
import { NextSeo } from "next-seo";

export default function Stats(): JSX.Element {
	return (
		<Layout>
			<NextSeo title="Stats" />
			<iframe
				className="iframe"
				title="Stats"
				allowFullScreen
				frameBorder="0"
				src="https://metrics.lecoq.io/about/NikSchaefer"
			/>
		</Layout>
	);
}
