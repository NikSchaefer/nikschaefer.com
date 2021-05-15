import Head from "next/head";

export type MetaType = {
	title: string;
	lang: string;
	description: string;
	image: string;
	url: string;
};

// eslint-disable-next-line import/no-default-export
export default function Meta({ META }: { META: MetaType }): JSX.Element {
	return (
		<Head>
			<title>{META.title}</title>

			<meta name="description" content={META.description} />

			<meta itemProp="name" content={META.title} />
			<meta itemProp="description" content={META.description} />
			<meta itemProp="image" content={META.image} />

			<meta property="og:url" content={META.url} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={META.title} />
			<meta property="og:description" content={META.description} />
			<meta property="og:image" content={META.image} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={META.title} />
			<meta name="twitter:description" content={META.description} />
		</Head>
	);
}
