import Layout from "@components/layout";
import Meta, { MetaType } from "@components/meta";

const META: MetaType = {
	title: "About | Nik Schaefer",
	lang: "en-us",
	description: "",
	image: "/logo.png",
	url: "https://nikschaefer.tech/about",
};

export default function About(): JSX.Element {
	return (
		<Layout>
			<Meta META={META} />
		</Layout>
	);
}
