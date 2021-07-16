import Layout from "@components/layout";
import styled from "styled-components";

const Iframe = styled.iframe`
	height: calc(100vh - 180px);
	width: calc(100vw - 10px);
    margin:auto;
	box-sizing: border-box;
`;
export default function Stats(): JSX.Element {
	return (
		<Layout>
			<Iframe
				allowFullScreen
				frameBorder="0"
				src="https://metrics.lecoq.io/about/NikSchaefer"
			/>
		</Layout>
	);
}
