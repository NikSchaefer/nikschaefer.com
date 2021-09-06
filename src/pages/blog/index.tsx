import { StyledLi, Bookmark, Tags } from "@components/blog-posts";
import Layout from "@components/layout";
import { Heading, SubHeading } from "@styles/headings.theme";
import { Section } from "@styles/section.theme";
import { allBlogs, popularBlogs, Blog } from "config";
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

function MapOfBlogs(props: { blogs: Blog[] }): JSX.Element {
	return (
		<>
			{props.blogs.map((data) => (
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
										<span key={string}>{string}</span>
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
		</>
	);
}

export default function BlogIndex(): JSX.Element {
	const [value, setValue] = useState("");
	const [blogs, setBlogs] = useState(allBlogs);
	function query(keyword: string) {
		const out = [];
		const kw = keyword.trim().toLowerCase();
		for (const blog of allBlogs) {
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
			<ContentLayer
				style={{ display: `${value === "" ? "block" : "none"}` }}
			>
				<SubHeading>Most Popular</SubHeading>
				<StyledContainer>
					<MapOfBlogs blogs={popularBlogs} />
				</StyledContainer>
			</ContentLayer>
			<ContentLayer>
				<SubHeading>All Posts</SubHeading>
				<StyledContainer>
					<MapOfBlogs blogs={blogs} />
				</StyledContainer>
			</ContentLayer>
		</Layout>
	);
}
