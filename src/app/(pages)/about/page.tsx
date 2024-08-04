import Callout from "@components/callout";
import Connect from "@components/connect";
import { IconLink } from "@components/ui/icon-link";

export default function About(): JSX.Element {
	return (
		<>
			<section
				className="pt-[1em] h4 mx-auto prose max-w-[750px]"
				id="work"
			>
				<a
					href="https://github.com/NikSchaefer/NikSchaefer"
					target="_blank"
					className="no-underline"
				>
					<h5 className="my-2 !text-muted-foreground">README.md</h5>
				</a>
				<h1 className="title1 font-semibold text-effect mb-10 ">
					hey, I'm Nik.
				</h1>
				<p className="leading-[32px]">
					Hey, I'm Nik. I'm a software developer, entrepreneur, and
					student based in Madison, Wisconsin. Currently, my main
					focus is{" "}
					<IconLink
						title="Noveltor"
						link="https://noveltor.com"
						img="https://noveltor.com/logo.png"
					/>
					, a mental health startup. On the side I run an{" "}
					<IconLink
						title="Advertising Agency"
						img="/calendar.png"
						disabled
					/>{" "}
					focused on helping schools reach their audience, as well as{" "}
					<IconLink
						title="Blue Mango Software"
						link="https://bluemangosoftware.com"
						img="https://bluemangosoftware.com/logo.png"
					/>
					, my own consulting venture.
				</p>
				<p className="leading-[32px]">
					My coding journey began in 2012 when I built a simple game
					using p5.js. What started as a hobby quickly turned into a
					passion, leading me to where I am today. Along the way, I've
					also become a Computer Engineering student at UW-Madison,
					balancing my studies with my professional projects.
				</p>
			</section>
			<Callout />
			<section className="pt-[1em] h4 mx-auto prose max-w-[750px]">
				<p className="leading-[32px]">
					When I'm not coding, I enjoy scuba diving, going to the gym,
					and reading.{" "}
					<IconLink
						title="The Fifth Science"
						link="https://www.amazon.com/-/en/Exurb1a/dp/1796356301"
						img="/planet.png"
					/>{" "}
					is one of my favorite books - it's got a way of challenging
					how I think about the nature of life.
				</p>
				<p className="leading-[32px]">
					I'm particularly interested in how technology, business, and
					philosophy intersect. There's something fascinating about
					using tech to make a real difference in people's lives.
				</p>
			</section>
			<section className="grid grid-cols-5 gap-4 w-[90%] mx-auto py-6">
				<div className="w-full h-full relative group col-span-3">
					<img
						src="/two.jpg"
						className="rounded-2xl object-contain"
					/>
					<div className="absolute left-2 bg-background text-foreground px-2 text-sm py-1 rounded-lg bottom-0 opacity-0 group-hover:opacity-100 group-hover:bottom-4 transition-all duration-200">
						Roatan, Honduras
					</div>
				</div>
				<div className="w-full h-full relative group col-span-2">
					<img
						src="/one.jpg"
						className="rounded-2xl object-cover h-full"
					/>
					<div className="absolute left-2 bg-background text-foreground px-2 text-sm py-1 rounded-lg bottom-0 opacity-0 group-hover:opacity-100 group-hover:bottom-4 transition-all duration-200">
						Cozumel, Mexico
					</div>
				</div>
			</section>

			<Connect />
		</>
	);
}
