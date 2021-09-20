import {
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	Hr,
	Italic,
	ItalicBold,
	Bold,
	Strikethrough,
	Blockquote,
	ListDisc,
	ListNumbered,
	InlineCode,
} from "@components/design";
import Layout from "@components/layout";
import clsx from "clsx";
import { NextSeo } from "next-seo";

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
			<NextSeo title="Design System" />
			<div
				className={clsx(
					"py-20 text-left m-auto",
					"w-11/12 max-w-3xl text-black"
				)}
			>
				<section>
					<H1 class="pb-10">My Design System</H1>
					<p>Built with TailwindCSS and MDX</p>
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
				<Hr />
				<section className="flex-col space-y-6">
					<H2>Typography</H2>
					<H1>H1 heading</H1>
					<H2>H2 heading</H2>
					<H3>H3 heading</H3>
					<H4>H4 heading</H4>
					<H5>H5 heading</H5>
					<H6>H6 heading</H6>
					<p>Paragraph of text</p>
					<Italic>italic text</Italic>
					<Bold>bold text</Bold>
					<ItalicBold>bold italic</ItalicBold>
					<Strikethrough>strikethrough</Strikethrough>

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
					<Blockquote>Blockquote</Blockquote>
					<Blockquote>
						Multiline Block quote
						<br /> <br />
						With a line break
					</Blockquote>
				</section>
				<Hr />
				<section id="lists">
					<H2>Lists</H2>
					<ListDisc>
						<li>one</li>
						<li>one</li>
						<li>one</li>
					</ListDisc>
					<ListNumbered>
						<li>one</li>
						<li>one</li>
						<li>one</li>
					</ListNumbered>
					<p>Nested lists:</p>
					<ListDisc>
						<li className="ml-4">
							one
							<ul className="list-disc list-inside">
								<li className="ml-4">
									two
									<ul className="list-disc list-inside">
										<li className="ml-4">tree</li>
									</ul>
								</li>
							</ul>
						</li>
					</ListDisc>
				</section>
				<section id="Code Blocks">
					<H2>Code Blocks</H2>
					<InlineCode>inline code</InlineCode>
				</section>
			</div>
		</Layout>
	);
}
