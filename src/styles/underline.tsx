import styled from "styled-components";

const StyledLink = styled.a`
	margin: 10px auto;
	position: relative;
	transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
	color: var(--accent);
	&:hover {
		cursor: pointer;
	}
	&::before {
		content: "";
		position: absolute;
		border-width: 0.5px;
		width: 0;
		left: 0;
		height: 1.3px;
		bottom: 5%;
		background-color: var(--accent);
		visibility: hidden;
		transition: all 0.2s ease-in-out;
	}
	&:hover::before {
		visibility: visible;
		width: 100%;
	}
`;

// eslint-disable-next-line import/no-default-export
export default StyledLink;
