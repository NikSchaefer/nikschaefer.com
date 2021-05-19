import Layout from "@components/layout";
import { BlogLinks } from "config";
import Link from "next/link";
import { useState } from "react";
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
const StyledInput = styled.input`
	border: solid 1px var(--border);
	font-size: 18px;
	padding: 10px 20px;
	border-radius: 4px;
	outline: 0;
`;
export default function Blog(): JSX.Element {
	const [value, setValue] = useState("");
	const [blogs, setBlogs] = useState(BlogLinks);
	function query(keyword: string) {
		const out = [];
		const kw = keyword.trim().toLowerCase();
		for (const blog of BlogLinks) {
			if (
				blog.description.toLowerCase().includes(kw) ||
				blog.title.toLowerCase().includes(kw)
			) {
				out.push(blog);
			}
		}
		setBlogs(out);
	}
	return (
		<Layout>
			<h1>Blog</h1>
			<StyledInput
				value={value}
				onChange={(e) => {
					setValue(e.target.value);
					query(e.target.value);
				}}
				type="text"
				aria-label="search bar"
				placeholder="Search Blogs"
			/>
			<StyledContainer>
				{blogs.map((data) => (
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
