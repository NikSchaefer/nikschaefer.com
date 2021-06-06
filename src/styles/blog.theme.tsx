import { SyntaxCSS } from "@styles/syntax-highlighting";
import styled from "styled-components";

const Container = styled.main`
	padding: 60px 0;
	text-align: left;
`;

const Content = styled.section`
	width: 90%;
	max-width: 700px;
	margin: auto;
	font-size: 1.1rem;
	line-height: 1.75;
	font-style: normal;
	color: #2e3440;
	font-family: "Roboto", sans-serif;
	pre {
		overflow-x: scroll;
	}
	p code {
		color: #3f3f46;
		font-weight: 600;
		background-color: #d8dee9;
		padding: 4px 6px;
		border-radius: 0.125rem;
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
	h1 {
		font-size: 2.5rem;
	}
	h2 {
		font-size: 1.7rem;
	}
	h3 {
		font-size: 1.3rem;
	}
	${SyntaxCSS}
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
