import styled from "styled-components";

const StyledLi = styled.li`
	text-align: left;
	margin: 10px 0;
	border: solid 1px rgb(203, 213, 224);
	border-radius: 0.375rem;
	transition: top 0.15s ease-out 0s;
	padding: 1rem;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
		rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
	margin-bottom: 2rem;
	position: relative;
	top: 0;

	h1 {
		font-size: 24px;
		margin: 0;
	}
	h3 {
		margin: 10px 0;
		font-weight: 400;
		font-size: 20px;
	}
	div {
		display: flex;
		h2 {
			margin: 0;
			color: rgba(0, 0, 0, 0.308);
			font-weight: 400;
			font-size: 0.875rem;
			color: #718096;
		}
	}
	:hover {
		top: -5px;
	}
`;
const Tags = styled.div`
	display: flex;
	margin: 0 10px;
	span {
		font-size: 0.75rem;
		padding: 0 0.5rem;
		border-radius: 0.375rem;
		background: #ddf2ff;
		color: #002451;
		margin: 2px;
		font-weight: 500;
	}
`;
const Bookmark = styled.div`
	position: absolute;
	right: 10px;
	top: -10px;
	svg {
		background-color: var(--primary);
		fill: var(--text);
	}
`;

export { StyledLi, Tags, Bookmark };
