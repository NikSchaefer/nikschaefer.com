import Layout from "@components/layout";

type Link = {
	name: string;
	link: string;
};

const Links: Link[] = [
	{
		name: "Typography",
		link: "/#",
	},
	{
		name: "Lists",
		link: "/#",
	},
	{
		name: "Code Blocks",
		link: "/#",
	},
	{
		name: "Notes",
		link: "/#",
	},
	{
		name: "Post References",
		link: "/#",
	},
];

export default function DesignSystem(): JSX.Element {
	return (
		<Layout>
			<div className="py-20 text-left m-auto w-11/12 max-w-3xl text-black">
				<section>
					<h1 className="text-5xl font-bold mb-10">
						My Design System
					</h1>
					<p className="text-base">Built with TailwindCSS and MDX</p>
					<ul className="my-5 list-disc">
						{Links.map(({ name, link }) => (
							<li className="my-1" key={name}>
								<a
									className="text-blue-400 hover:underline"
									href={link}
								>
									{name}
								</a>
							</li>
						))}
					</ul>
				</section>
				<hr className="py-5" />
				<section className="flex-col space-y-6">
					<h2 className="text-4xl font-bold">Typography</h2>
					<h1 className="text-6xl font-bold">H1 heading</h1>
					<h2 className="text-4xl font-bold">H2 heading</h2>
					<h3 className="text-2xl font-bold">H3 heading</h3>
					<h4 className="text-xl font-bold">H4 heading</h4>
					<h5 className="text-lg font-bold">H5 heading</h5>
					<h6 className="text-base font-bold">H6 heading</h6>
					<p>Paragraph of text</p>
					<p className="italic">italic text</p>
					<p className="font-semibold">bold text</p>
					<p className="italic font-semibold">bold italic</p>
					<p className="line-through">strikethrough</p>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Nullam vehicula ipsum a arcu. Vitae turpis
						massa sed elementum. Commodo nulla facilisi nullam
						vehicula ipsum a arcu cursus vitae. Adipiscing elit
						pellentesque habitant morbi. Feugiat in ante metus
						dictum at. Habitant morbi tristique senectus et. Ac
						auctor augue mauris augue neque. Urna molestie at
						elementum eu. Blandit turpis cursus in hac habitasse
						platea dictumst quisque. Ipsum consequat nisl vel
						pretium lectus quam id leo. Donec ultrices tincidunt
						arcu non sodales neque sodales ut etiam. Leo urna
						molestie at elementum eu.
						<br />
						<br />
						Lacus sed turpis tincidunt id aliquet risus. Cursus sit
						amet dictum sit. Odio aenean sed adipiscing diam donec.
						Imperdiet dui accumsan sit amet nulla facilisi. Mattis
						molestie a iaculis at. Faucibus a pellentesque sit amet
						porttitor eget dolor morbi. Mus mauris vitae ultricies
						leo. Convallis a cras semper auctor. Quis risus sed
						vulputate odio ut enim. Nibh tortor id aliquet lectus
						proin nibh. At quis risus sed vulputate odio ut enim
						blandit. Id aliquet risus feugiat in ante. Tellus orci
						ac auctor augue mauris augue neque. Commodo quis
						imperdiet massa tincidunt nunc pulvinar sapien et
						ligula. Porttitor lacus luctus accumsan tortor posuere
						ac ut consequat semper. Purus viverra accumsan in nisl
						nisi scelerisque eu. Imperdiet dui accumsan sit amet
						nulla facilisi morbi tempus iaculis.
						<br />
						<br />
						Rutrum quisque non tellus orci. Ut tellus elementum
						sagittis vitae et leo. Magna sit amet purus gravida quis
						blandit turpis cursus in. Ut etiam sit amet nisl purus
						in. Cursus turpis massa tincidunt dui ut ornare.
						Pellentesque eu tincidunt tortor aliquam nulla facilisi
						cras. Non arcu risus quis varius quam. Cursus euismod
						quis viverra nibh cras. Congue eu consequat ac felis
						donec et odio pellentesque. Eu augue ut lectus arcu
						bibendum at varius. Velit dignissim sodales ut eu sem
						integer vitae. At erat pellentesque adipiscing commodo
						elit at imperdiet. Adipiscing elit duis tristique
						sollicitudin nibh sit. Lacinia at quis risus sed
						vulputate. Est lorem ipsum dolor sit amet consectetur
						adipiscing. Eu lobortis elementum nibh tellus molestie
						nunc non blandit. Nulla at volutpat diam ut venenatis
						tellus in metus vulputate.
					</p>
					<blockquote className="border-l-4 border-solid my-4">
						<p>Blockquote</p>
					</blockquote>
				</section>
			</div>
		</Layout>
	);
}
