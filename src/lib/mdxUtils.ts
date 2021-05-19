/* eslint-disable require-unicode-regexp */
import fs from "fs";
import path from "path";

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), "content/blog");

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
	.readdirSync(POSTS_PATH)
	// Only include md(x) files
	.filter((path) => /\.mdx?$/.test(path));

// POSTS_PATH is useful when you want to get the path to a specific file
export const PORT_PATH = path.join(process.cwd(), "content/projects");

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const portfolioFilePaths = fs
	.readdirSync(POSTS_PATH)
	// Only include md(x) files
	.filter((path) => /\.mdx?$/.test(path));
