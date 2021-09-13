import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
	:root {
		--primary: #ffffff;
		--secondary: #fafafa;
		--grey: #eeeeee;
		--accent: #00a2ff;
		--border: #dddddd;
		--title: black;
		--header: #24292d;
		--about-text: #586069;
		--tag-background: #f1f8ff;
		--blog-text: #2e3440;
		--tag-hover: #e4effc;
		--scrollbar: rgb(175, 175, 175);
		--footer: rgb(79, 82, 88);
		--footer-hover: rgb(21, 21, 22);
		--paragraph: rgb(75, 85, 99);
	}

	.darkmode {
		--primary: #131722;
		--secondary: #1a202c;
		--grey: #1e2633;
		--accent: #00a2ff;
		--border: #4d5562;
		--title: white;
		--header: var(--primary);
		--about-text: #d1d1d1;
		--tag-background: var(--secondary);
		--blog-text: rgb(231, 231, 231);
		--tag-hover: #21263d;
		--scrollbar: #414f75;
		--footer: rgb(193, 200, 212);
		--footer-hover: rgb(241, 241, 241);
		--paragraph: rgb(156,163,175);
	}
	::-webkit-scrollbar {
		width: 8px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: var(--secondary);
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: var(--scrollbar);
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}

	html,
	body {
		padding: 0;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
			Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		text-align: center;
		background-color: var(--primary);
		color: var(--paragraph);
		min-height: 100vh;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	ul {
		list-style: none;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			margin-top: 1rem;
		}
		to {
			opacity: 1;
			margin-top: 0.75rem;
		}
	}

	@keyframes PopupAnimation {
		0% {
			transform: translateY(0px) translateX(-50%)
		}
		10% {
			transform: translateY(180px) translateX(-50%)
		}
		90% {
			transform: translateY(180px)translateX(-50%)
		}
		100% {
			transform: translateY(0px)	translateX(-50%)
		}
	}

	.popinout {
		animation: PopupAnimation 5s;
	}
	
`;

// eslint-disable-next-line import/no-default-export
export default Global;
