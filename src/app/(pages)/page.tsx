import Intro from "./_content/hero";
import { Metadata } from "next";
import Timeline from "./_content/work";
import Projects from "./_content/projects";
import CTA from "./_content/cta";
import About from "./_content/home-about";

export const metadata: Metadata = {
	title: "Nik Schaefer",
};

export default function Page() {
	return (
		<div className="bg-gradient-to-r">
			<Intro />
			<About />
			<Timeline />
			<Projects />
			<CTA />
		</div>
	);
}
