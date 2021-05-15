import styled from "styled-components";

const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 600px;
`;
// eslint-disable-next-line import/no-default-export
export default function Home(): JSX.Element {
	return <Container />;
}
