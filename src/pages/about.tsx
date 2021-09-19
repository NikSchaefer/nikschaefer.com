import { Node } from "@components/block";
import { H1, H2, Section } from "@components/design";
import Layout from "@components/layout";

import jobs from "../../content/jobs.json";
import studies from "../../content/studies.json";

export default function About(): JSX.Element {
	return (
		<Layout>
			<Section class="font-sans">
				<H1 class="mb-10 mt-10">About Me</H1>
				<p>
					👋, I'm Nik, self-taught full-stack developer and hobbyist
					programmer student based in Minnesota, US I've been enjoying
					programming since I first began. I love supporting open
					source and making my own projects. I have taken on various
					roles between design, research and development.
				</p>
			</Section>
			<Section class="font-sans" id="studies">
				<H2>Studies</H2>
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
			<Section class="font-sans" id="work">
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
		</Layout>
	);
}
