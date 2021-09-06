import styled from "styled-components";

const Heading = styled.h1`
	font-size: 60px;
	margin-bottom: 1rem;
	@media (max-width: 800px) {
		font-size: 40px;
	}
`;

const SubHeading = styled.h2`
	font-family: inherit;
	margin: 0;
	margin-bottom: 1rem;
	font-weight: 700;
	letter-spacing: -0.025em;
	color: var(--text);
	font-size: 2.25rem;
	line-height: 2.5rem;
`;

const Paragraph = styled.p`
	margin: 0;
	max-width: 70ch;
	font-size: 1.1rem;
	font-weight: inherit;
	line-height: 1.75;
	color: rgb(75, 85, 99);
`;

export { Heading, SubHeading, Paragraph };
