import { Node } from "@components/block";
import { H1, H2, Section } from "@components/design";
import Layout from "@components/layout";
import { NextSeo } from "next-seo";

import jobs from "../../content/jobs.json";
import studies from "../../content/studies.json";
import { paragraphAboutMe } from "config";

export default function About(): JSX.Element {
	return (
		<Layout>
			<NextSeo title="About" />
			<Section>
				<H1 class="mb-10 mt-10">About Me</H1>
				<p>👋, {paragraphAboutMe}</p>
			</Section>
			<Section id="work">
				<H2>Work</H2>
				<div className="flex-col items-center justify-center">
					{jobs
						.sort((a, b) => {
							return b.date - a.date;
						})
						.map((data) => (
							<Node key={data.title} data={data} />
						))}
				</div>
			</Section>
			<Section id="studies">
				<H2>Self Studies</H2>
				<div className="flex-col items-center justify-center">
					{studies
						.sort((a, b) => {
							return b.date - a.date;
						})
						.map((data) => (
							<Node key={data.title} data={data} />
						))}
				</div>
			</Section>
		</Layout>
	);
}
