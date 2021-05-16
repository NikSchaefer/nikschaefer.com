import Layout from "@components/layout";
import { BlogLinks } from "config";
import Link from "next/link";
import styled from "styled-components";

const StyledLi = styled.li`
	text-align: left;
	margin: 50px 0;
	a {
		font-size: 24px;
		color: var(--accent);
	}
	h3 {
		margin: 0;
		color: rgba(0, 0, 0, 0.774);
		font-weight: 400;
	}
	h2 {
		margin: 10px 0;
		font-weight: 400;
		font-size: 20px;
	}
`;
const StyledContainer = styled.ul`
	width: 90%;
	max-width: 700px;
	margin: auto;
`;

export default function Blog(): JSX.Element {
	return (
		<Layout>
			<h1>Blog</h1>
			<StyledContainer>
				{BlogLinks.map((data) => (
					<StyledLi key={data.link}>
						<Link href={data.link}>
							<a>{data.title}</a>
						</Link>
						<h3>{data.date}</h3>
						<h2>{data.description}</h2>
					</StyledLi>
				))}
			</StyledContainer>
		</Layout>
	);
}
