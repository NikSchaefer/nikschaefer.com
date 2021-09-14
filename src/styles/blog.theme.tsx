import { SyntaxCSS } from "@styles/syntax-highlighting";
import styled from "styled-components";

const Content = styled.section`
	width: 90%;
	max-width: 700px;
	margin: auto;
	font-size: 1.1rem;
	line-height: 1.75;
	font-style: normal;
	color: var(--blog-text);
	font-family: "Roboto", sans-serif;
	pre {
		overflow-x: scroll;
	}
	p code {
		background-color: rgb(252, 254, 255);
		border: 1px solid rgb(237, 242, 247);
		color: #4a5568;
		padding: 1rem;
		margin: 1.5rem 0px;
		white-space: nowrap;
		overflow-x: scroll;
		min-width: 100%;
		font-size: 0.9rem;
		border-radius: 0.375rem;
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

export { Content };
