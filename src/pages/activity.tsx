/* eslint-disable react/jsx-no-useless-fragment */
import Layout from "@components/layout";
import Meta, { MetaType } from "@components/meta";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const META: MetaType = {
	title: "Activity | Nik Schaefer",
	lang: "en-us",
	description: "",
	image: "/logo.png",
	url: "https://nikschaefer.tech/activity",
};

export type Event = {
	id: string;
	type: string;
	actor: Actor;
	repo: Repo;
	payload: Payload;
	created_at: string;
};
export type Actor = {
	id: number;
	login: string;
	display_login: string;
	gravatar_id: string;
	url: string;
	avatar_url: string;
};
export type Repo = {
	id: number;
	name: string;
	url: string;
};
export type Payload = {
	ref: string;
	ref_type: string;
	pusher_type: string;
	commits: [
		{
			message: string;
			author: {
				name: string;
			};
		}
	];
	issue: {
		title: string;
	};
	pull_request: {
		title: string;
	};
};

const StyledActivity = styled.a`
	background-color: var(--secondary);
`;
export default function Activity(): JSX.Element {
	const [data, setData] = useState<Event[]>([]);
	async function getData() {
		const data = await axios.get(
			"https://api.github.com/users/NikSchaefer/events"
		);
		setData(data.data);
	}
	useEffect(() => {
		// eslint-disable-next-line no-void
		void getData();
	});
	return (
		<Layout>
			<Meta META={META} />
			<h1>Recent Github Activity</h1>
			<div>
				{data.map((value) => {
					if (value.payload.commits === undefined) {
						return <></>;
					}
					if (
						value.payload?.commits[0]?.author.name ===
						"dependabot[bot]"
					) {
						return <></>;
					}
					let message = "";
					switch (value.type) {
						case "PushEvent":
							// eslint-disable-next-line prefer-destructuring
							message = value.payload.commits[0].message;
							break;
						case "IssuesEvent" || "IssueCommentEvent":
							message = value.payload.issue.title;
							break;
						case "PullRequestEvent":
							message = value.payload.pull_request.title;
							break;
						default:
							message = "";
							break;
					}
					return (
						<StyledActivity
							href={`https://github.com/${value.repo.name}`}
							key={value.id}
						>
							<p>{value.repo.name}</p>
							<p>{message}</p>
							<p>{new Date(value.created_at).toDateString()}</p>
						</StyledActivity>
					);
				})}
			</div>
		</Layout>
	);
}
