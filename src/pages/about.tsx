import Layout from "@components/layout";
import { NextSeo } from "next-seo";

// import jobs from "../../content/jobs.json";
// import studies from "../../content/studies.json";
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
			<section className="grid grid-cols-10 pt-[5em] container mx-auto">
				<img className="col-span-4" src="/developer.svg" />
				<div className="col-span-1" />
				<div className="flex flex-col col-span-5">
					<span className="mb-2">--- about me in O(1) ---</span>
					<h1 className="font-semibold text-effect mb-10 ">
						I'm a Software Engineer with a passion for building
					</h1>
					<p>
						With a versatile background spanning development,
						design, and management, and a deep-rooted passion for
						machine learning, I am focused on pursuing a future in
						data science.
						<br />
						<br />
						These days, I'm busy working at a startup, managing my
						nonprofit, and balancing my studies as a dual enrollment
						student.
					</p>
				</div>
			</section>
			{/* <Section id="work">
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
			</Section> */}
		</Layout>
	);
}
