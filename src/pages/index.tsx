import Layout from "@components/layout";
import Meta, { MetaType } from "@components/meta";

const META: MetaType = {
	title: "Nik Schaefer",
	lang: "en-us",
	description: "",
	image: "/logo.png",
	url: "https://nikschaefer.tech",
};

export default function Home(): JSX.Element {
	return (
		<Layout>
			<Meta META={META} />
		</Layout>
	);
}
