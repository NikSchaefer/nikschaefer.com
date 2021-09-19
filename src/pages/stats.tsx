import Layout from "@components/layout";

export default function Stats(): JSX.Element {
	return (
		<Layout>
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
