import Intro from "./intro";
import Content from "./content";

export default function About() {
	return (
		<section className="pt-[8rem] w-[90%] max-w-[900px] mx-auto relative">
			<Intro />
			<Content />
		</section>
	);
}
