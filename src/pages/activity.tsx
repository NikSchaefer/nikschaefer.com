import Layout from "@components/layout";
import Meta, { MetaType } from "@components/meta";

const META: MetaType = {
	title: "Activity | Nik Schaefer",
	lang: "en-us",
	description: "",
	image: "/logo.png",
	url: "https://nikschaefer.tech/activity",
};

export default function Activity(): JSX.Element {
	return (
		<Layout>
			<Meta META={META} />
		</Layout>
	);
}
