import { Node } from "@components/block";
import { H2, Section } from "@components/design";
import Layout from "@components/layout";
import { NextSeo } from "next-seo";

import jobs from "../../content/jobs.json";
import studies from "../../content/studies.json";
import clsx from "clsx";

export default function About(): JSX.Element {
	return (
		<Layout>
			<NextSeo title="About" />
			<section className="pt-[5em] container mx-auto">
				<h1
					className={clsx(
						"title mx-auto text-effect font-semibold text-center"
					)}
				>
					I'm Nik.
				</h1>
			</section>
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
