import Meta, { MetaType } from "@components/meta";
import styled from "styled-components";

const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 600px;
`;
const META: MetaType = {
	title: "Nik Schaefer",
	lang: "en-us",
	description: "",
	image: "/logo.png",
	url: "https://nikschaefer.tech",
};

export default function Home(): JSX.Element {
	return (
		<Container>
			<Meta META={META} />
		</Container>
	);
}
