import { Metadata } from "next";
import BlogIndex from "./_content";

export const metadata: Metadata = {
	title: "Blog",
}

export default function Page(): JSX.Element {
	return <BlogIndex />
}
