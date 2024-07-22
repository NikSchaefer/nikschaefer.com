import Intro from "./_content/intro";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Nik Schaefer",
};

export default function Page() {
	return (
		<div className="bg-gradient-to-r">
			<Intro />
		</div>
	);
}
