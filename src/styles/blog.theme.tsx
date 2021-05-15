import styled from "styled-components";

const Container = styled.main`
	padding: 100px 0;
	text-align: left;
`;

const Content = styled.section`
	width: 90%;
	max-width: 700px;
	margin: auto;
	font-size: 21px;
	letter-spacing: -0.003em;
	line-height: 1.6;
	font-style: normal;
	word-break: break-word;
	h1,
	h2,
	h3,
	h4,
	h5 {
		font-weight: 600;
		margin: 10px 0;
	}
	pre,
	code {
		background-color: #283142;
		color: white;
		border-radius: 5px;
		padding: 0.3em 0.5em;
	}

	h4 svg {
		width: unset;
		height: unset;
	}
	img {
		width: 99%;
		margin-bottom: 40px;
	}
	a {
		color: #10c1fc;
	}
`;
const StyledTitle = styled.h1`
	font-size: 55px;
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const AuthorSection = styled.div`
	margin-bottom: 100px;
	padding-bottom: 20px;
	border-bottom: 1px var(--green) solid;
	h4 {
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	h2 {
		font-size: 28px;
		font-weight: 400;
	}
`;

export { Container, Content, StyledTitle, AuthorSection };
