import Layout from "@components/layout";
import { BlogLinks } from "config";
import Link from "next/link";
import { useState } from "react";
import { BsBookmark } from "react-icons/bs";
import styled from "styled-components";

import { StyledLi, Bookmark, Tags } from '..';

const StyledContainer = styled.ul`
	width: 90%;
	margin: 40px auto;
	max-width: 700px;
	text-align: left;
	font-size: 1.1rem;
	line-height: 1.75;
	font-style: normal;
	font-family: "Roboto", sans-serif;
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
							<a>
								<h1>{data.title}</h1>
								<div>
									<h3>
										{data.date} • {data.min} min
									</h3>
									<Tags>
										{data.type.map((string) => (
											<span key={string}>{string}</span>
										))}
									</Tags>
								</div>
								<h2>{data.description}</h2>
								<Bookmark>
									<BsBookmark size="25px" />
								</Bookmark>
							</a>
						</Link>
					</StyledLi>
				))}
			</StyledContainer>
		</Layout>
	);
}
