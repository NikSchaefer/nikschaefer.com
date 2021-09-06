import { StyledLi, Bookmark, Tags } from "@components/blog-posts";
import Layout from "@components/layout";
import { Heading, SubHeading } from "@styles/headings.theme";
import { Section } from "@styles/section.theme";
import { BlogLinks } from "config";
import Link from "next/link";
import { useState } from "react";
import { BsBookmark } from "react-icons/bs";
import styled from "styled-components";


const StyledContainer = styled.ul`
	margin: 40px auto;
	text-align: left;
`;
const StyledInput = styled.input`
	border: solid 1px var(--border);
	background-color: transparent;
	font-size: 18px;
	padding: 10px 20px;
	border-radius: 4px;
	outline: 0;
	width: 100%;
	color: var(--text);
`;

const ContentLayer = styled(Section)`
	margin: 4rem auto;
	max-width: 42rem;
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
			<ContentLayer>
				<Heading>Blog</Heading>
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
			</ContentLayer>

			<ContentLayer>
				<SubHeading>Most Popular</SubHeading>
				<StyledContainer>
					{blogs.map((data) => (
						<StyledLi key={data.link}>
							<Link href={data.link}>
								<a>
									<h1>{data.title}</h1>
									<div>
										<h2>
											{data.date} • {data.min} min
										</h2>
										<Tags>
											{data.type.map((string) => (
												<span key={string}>
													{string}
												</span>
											))}
										</Tags>
									</div>
									<h3>{data.description}</h3>
									<Bookmark>
										<BsBookmark size="25px" />
									</Bookmark>
								</a>
							</Link>
						</StyledLi>
					))}
				</StyledContainer>
			</ContentLayer>
		</Layout>
	);
}
