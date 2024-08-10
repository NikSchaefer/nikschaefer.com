import Intro from "./intro";
import Content from "./content";

export default function Timeline() {
	return (
		<section className="w-[90%] max-w-[900px] mx-auto">
			<Intro />
			<Content />
		</section>
	);
}
