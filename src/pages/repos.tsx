/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-void */
import { Repo as RepoType } from "@components/interfaces";
import Layout from "@components/layout";
import { Star, Repo, Fork } from "@components/svg";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

type sort = "stars" | "forks" | "size";
function Repos(props: { arr: RepoType[]; sort: sort }): JSX.Element {
	const out = [];
	let arr: RepoType[] = [];
	if (props.arr.length === 0) {
		return <></>;
	}
	if (props.sort === "size") {
		arr = props.arr.sort((a, b) => {
			return b.size - a.size;
		});
	} else if (props.sort === "forks") {
		arr = props.arr.sort((a, b) => {
			return b.forks_count - a.forks_count;
		});
	} else {
		arr = props.arr.sort((a, b) => {
			return b.stargazers_count - a.stargazers_count;
		});
	}
	for (let i = 0; i < props.arr.length; i++) {
		out.push(
			<StyledRepo key={arr[i].name} href={arr[i].html_url}>
				<h2>
					<Repo /> {arr[i].name}
				</h2>
				<p>{arr[i].description}</p>
				<div className="repo__bottom">
					<Star />
					<p>{arr[i].stargazers_count}</p>
					<Fork />
					<p>{arr[i].forks_count}</p>
					<p style={{ fontSize: "15px", marginLeft: "auto" }}>
						{arr[i].size} KB
					</p>
				</div>
			</StyledRepo>
		);
	}
	return <>{out}</>;
}
const StyledRepo = styled.a`
	width: 300px;
	height: 200px;
	text-align: left;
	padding: 30px;
	border-radius: 5px;
	margin: 10px;
	background-color: white;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.137);
	position: relative;
	transition: all ease-in-out 0.2s;
	:hover {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.021);
	}
	h2 {
		font-size: 22px;
		font-weight: 600;
		font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono",
			"Lucida Console", Monaco, monospace;
	}
	p {
		font-size: 16px;
	}
	.repo__bottom {
		display: flex;
		position: absolute;
		bottom: 20px;
		width: 80%;
		align-items: center;
		p {
			margin: 0 10px;
		}
	}
`;
const SortBy = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	h2 {
		flex-basis: 100%;
	}
	button {
		background-color: transparent;
		outline: 0;
		margin: 0 15px;
		border: none;
		color: #0066ff;
		font-size: 20px;
		:hover {
			text-decoration: underline;
			cursor: pointer;
		}
	}
`;
const Container = styled.section`
	width: 95%;
	max-width: 1300px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 10px auto;
`;
export default function RepoExport(): JSX.Element {
	const [repoData, setRepoData] = useState<RepoType[]>([]);
	const [sortType, setSortType] = useState<sort>("stars");
	async function getRepoData() {
		const { data } = await axios.get(
			`https://api.github.com/users/NikSchaefer/repos?per_page=10000`
		);
		setRepoData(data);
	}
	useEffect(() => {
		void getRepoData();
	}, []);
	return (
		<Layout>
			<h1>Repositories</h1>
			<SortBy>
				<h2>Sort By</h2>
				<button
					type="button"
					onClick={() => {
						setSortType("stars");
					}}
				>
					Stars
				</button>
				<button
					type="button"
					onClick={() => {
						setSortType("forks");
					}}
				>
					Forks
				</button>
				<button
					type="button"
					onClick={() => {
						setSortType("size");
					}}
				>
					Size
				</button>
			</SortBy>

			<Container>
				<Repos sort={sortType} arr={repoData} />
			</Container>
		</Layout>
	);
}
