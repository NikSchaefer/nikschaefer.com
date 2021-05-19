export type userData = {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
	name: string;
	company: string;
	blog: string;
	location: string;
	email: boolean | string;
	hireable: null | string;
	bio: string;
	twitter_username: string | null;
	public_repos: number;
	public_gists: number;
	followers: number;
	following: number;
	created_at: string;
	updated_at: string;
};
export const defUserData: userData = {
	login: "",
	id: 0,
	node_id: "",
	avatar_url: "",
	gravatar_id: "",
	url: "",
	html_url: "",
	followers_url: "",
	following_url: "",
	gists_url: "",
	starred_url: "",
	subscriptions_url: "",
	organizations_url: "",
	repos_url: "",
	events_url: "",
	received_events_url: "",
	type: "",
	site_admin: false,
	name: "",
	company: "",
	blog: "",
	location: "",
	email: "",
	hireable: "",
	bio: "",
	twitter_username: "",
	public_repos: 0,
	public_gists: 0,
	followers: 0,
	following: 0,
	created_at: "",
	updated_at: "",
};
export type Repo = {
	id: number;
	node_id: string;
	name: string;
	full_name: string;
	private: boolean;
	owner: Owner;
	html_url: string;
	description: string;
	fork: boolean;
	url: string;
	forks_url: string;
	keys_url: string;
	collaborators_url: string;
	teams_url: string;
	hooks_url: string;
	issue_events_url: string;
	events_url: string;
	assignees_url: string;
	branches_url: string;
	tags_url: string;
	blobs_url: string;
	git_tags_url: string;
	git_refs_url: string;
	trees_url: string;
	statuses_url: string;
	languages_url: string;
	stargazers_url: string;
	contributors_url: string;
	subscribers_url: string;
	subscription_url: string;
	commits_url: string;
	git_commits_url: string;
	comments_url: string;
	issue_comment_url: string;
	contents_url: string;
	compare_url: string;
	merges_url: string;
	archive_url: string;
	downloads_url: string;
	issues_url: string;
	pulls_url: string;
	milestones_url: string;
	notifications_url: string;
	labels_url: string;
	releases_url: string;
	deployments_url: string;
	created_at: Date;
	updated_at: Date;
	pushed_at: Date;
	git_url: string;
	ssh_url: string;
	clone_url: string;
	svn_url: string;
	homepage: string;
	size: number;
	stargazers_count: number;
	watchers_count: number;
	language: null;
	has_issues: boolean;
	has_projects: boolean;
	has_downloads: boolean;
	has_wiki: boolean;
	has_pages: boolean;
	forks_count: number;
	mirror_url: null;
	archived: boolean;
	disabled: boolean;
	open_issues_count: number;
	license: License;
	forks: number;
	open_issues: number;
	watchers: number;
	default_branch: string;
};

export type License = {
	key: string;
	name: string;
	spdx_id: string;
	url: string;
	node_id: string;
};

export type Owner = {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
};

export type Event = {
	id: string;
	type: string;
	actor: Actor;
	repo: eventRepo;
	payload: Payload;
	public: boolean;
	created_at: Date;
};

type Actor = {
	id: number;
	login: string;
	display_login: string;
	gravatar_id: string;
	url: string;
	avatar_url: string;
};

type Payload = {
	push_id: number;
	size: number;
	distinct_size: number;
	ref: string;
	head: string;
	before: string;
	commits?: Commit[];
	issue?: pull_request;
	pull_request?: pull_request;
};
type pull_request = {
	url: string;
	id: string;
	node_id: string;
	html_url: string;
	diff_url: string;
	patch_url: string;
	issue_url: string;
	number: number;
	state: string;
	locked: boolean;
	title: string;
};
type Commit = {
	sha: string;
	author: Author;
	message: string;
	distinct: boolean;
	url: string;
};

type Author = {
	email: string;
	name: string;
};

type eventRepo = {
	id: number;
	name: string;
	url: string;
};
