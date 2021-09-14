import styled, { css } from "styled-components";

const SyntaxCSS = css`
	code[class*="language-"],
	pre[class*="language-"] {
		color: #393a34;
		font-family: "Consolas", "Bitstream Vera Sans Mono", "Courier New",
			Courier, monospace;
		direction: ltr;
		text-align: left;
		white-space: pre;
		word-spacing: normal;
		word-break: normal;
		font-size: 0.95em;
		line-height: 1.6em;

		-moz-tab-size: 4;
		-o-tab-size: 4;
		tab-size: 4;

		-webkit-hyphens: none;
		-moz-hyphens: none;
		-ms-hyphens: none;
		hyphens: none;
	}

	pre > code[class*="language-"] {
		font-size: 1em;
	}

	pre[class*="language-"]::-moz-selection,
	pre[class*="language-"] ::-moz-selection,
	code[class*="language-"]::-moz-selection,
	code[class*="language-"] ::-moz-selection {
		background: #b3d4fc;
	}

	pre[class*="language-"]::selection,
	pre[class*="language-"] ::selection,
	code[class*="language-"]::selection,
	code[class*="language-"] ::selection {
		background: #b3d4fc;
	}

	/* Code blocks */
	pre[class*="language-"] {
		padding: 1em;
		margin: 0.5em 0;
		overflow: auto;
		border: 1px solid #dddddd;
		background-color: white;
		background-color: rgb(252, 254, 255);
		border: 1px solid rgb(237, 242, 247);
	}

	/* Inline code */
	code:not([class*="language-"]) {
		padding: 0.4em;
		border-radius: 0.2px;
		background: #f8f8f8;
		border: 1px solid #dddddd;
	}

	.token.comment,
	.token.prolog,
	.token.doctype,
	.token.cdata {
		color: #999988;
		font-style: italic;
	}

	.token.namespace {
		opacity: 0.7;
	}

	.token.string,
	.token.attr-value {
		color: #e3116c;
	}

	.token.punctuation,
	.token.operator {
		color: #393a34; /* no highlight */
	}

	.token.entity,
	.token.url,
	.token.symbol,
	.token.number,
	.token.boolean,
	.token.variable,
	.token.constant,
	.token.property,
	.token.regex,
	.token.inserted {
		color: #36acaa;
	}

	.token.atrule,
	.token.keyword,
	.token.attr-name,
	.language-autohotkey .token.selector {
		color: #00a4db;
	}

	.token.function,
	.token.deleted,
	.language-autohotkey .token.tag {
		color: #9a050f;
	}

	.token.tag,
	.token.selector,
	.language-autohotkey .token.keyword {
		color: #00009f;
	}

	.token.important,
	.token.function,
	.token.bold {
		font-weight: bold;
	}

	.token.italic {
		font-style: italic;
	}
`;

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
