import { socials } from "../config";
import { Github, ArrowUpRight, Linkedin, Mail } from "lucide-react";

export default function Connect() {
	return (
		<section className="relative w-[90%] max-w-[1000px] card-bg border border-primary/30 mx-auto py-[4em] my-[3em] rounded-md">
			<div className="h4 mx-auto prose">
				<h1 className="h3 font-semibold text-effect mb-4 ">
					Let's collaborate on something awesome.
				</h1>
				<p className="leading-[32px] text-muted-foreground">
					I'm excited to explore new opportunities and collaborate
					with fellow developers, businesses, or organizations on
					innovative projects. If you're looking for an engineer with
					a passion for business, let's connect and discuss how we can
					work together.
					<br />
					<br /> Whether you have a challenging project in mind or
					simply want to engage in talks about{" "}
					<span className="">tech, business, or philosophy</span>, I'm
					eager to hear from you. Feel free to reach out via email or
					connect with me on LinkedIn.
				</p>
			</div>
			<div className="pt-[2em] mx-auto h4 max-w-[750px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-semibold">
				<a
					href={socials.github.link}
					target="_blank"
					rel="noopener noreferrer"
					className="flex gap-4 items-center rounded border px-3 py-4 w-full bg-accent border-primary/20 hover:bg-primary/10"
				>
					<Github />
					GitHub
					<div className="ml-auto flex-grow flex justify-end">
						<ArrowUpRight className="ml-auto" />
					</div>
				</a>
				<a
					href={socials.linkedin.link}
					target="_blank"
					rel="noopener noreferrer"
					className="flex gap-4 items-center rounded border px-3 py-4 w-full bg-accent border-primary/20 hover:bg-primary/10"
				>
					<Linkedin />
					LinkedIn
					<div className="ml-auto flex-grow flex justify-end">
						<ArrowUpRight className="ml-auto sm:ml-1" />
					</div>
				</a>
				<a
					href={socials.email.link}
					target="_blank"
					rel="noopener noreferrer"
					className="flex gap-4 items-center rounded border px-3 py-4 w-full bg-accent border-primary/20 hover:bg-primary/10"
				>
					<Mail />
					Email
					<div className="ml-auto flex-grow flex justify-end">
						<ArrowUpRight className="ml-auto sm:ml-1" />
					</div>
				</a>
			</div>
		</section>
	);
}
