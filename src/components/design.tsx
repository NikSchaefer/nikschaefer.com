import clsx from "clsx";
import React from "react";

function H1(props: { children: React.ReactNode; class?: string }): JSX.Element {
	const className = clsx(
		"text-6xl font-bold my-2 text-black dark:text-white",
		props.class
	);
	return <h1 className={className}>{props.children}</h1>;
}
function H2(props: { children: React.ReactNode; class?: string }): JSX.Element {
	const className = clsx(
		"text-4xl font-bold my-2 text-black dark:text-white",
		props.class
	);
	return <h2 className={className}>{props.children}</h2>;
}
function H3(props: { children: React.ReactNode; class?: string }): JSX.Element {
	const className = clsx(
		"text-2xl font-bold my-2 text-black dark:text-white",
		props.class
	);
	return <h3 className={className}>{props.children}</h3>;
}
function H4(props: { children: React.ReactNode; class?: string }): JSX.Element {
	const className = clsx(
		"text-xl font-bold my-2 text-black dark:text-white",
		props.class
	);
	return <h4 className={className}>{props.children}</h4>;
}
function H5(props: { children: React.ReactNode; class?: string }): JSX.Element {
	const className = clsx(
		"text-lg font-bold my-2 text-black dark:text-white",
		props.class
	);
	return <h5 className={className}>{props.children}</h5>;
}
function H6(props: { children: React.ReactNode; class?: string }): JSX.Element {
	const className = clsx(
		"text-base font-bold my-2 text-black dark:text-white",
		props.class
	);
	return <h6 className={className}>{props.children}</h6>;
}

function Italic(props: {
	children: React.ReactNode;
	class?: string;
}): JSX.Element {
	const className = clsx("italic", props.class);
	return <p className={className}>{props.children}</p>;
}
function Bold(props: {
	children: React.ReactNode;
	class?: string;
}): JSX.Element {
	const className = clsx("font-semibold", props.class);
	return <p className={className}>{props.children}</p>;
}
function ItalicBold(props: {
	children: React.ReactNode;
	class?: string;
}): JSX.Element {
	const className = clsx("italic font-semibold", props.class);
	return <p className={className}>{props.children}</p>;
}
function Strikethrough(props: {
	children: React.ReactNode;
	class?: string;
}): JSX.Element {
	const className = clsx("line-through", props.class);
	return <p className={className}>{props.children}</p>;
}

function Hr(props: { class?: string }): JSX.Element {
	const className = clsx("my-7", props.class);
	return <hr className={className} />;
}

function Blockquote(props: {
	children: React.ReactNode;
	class?: string;
}): JSX.Element {
	const className = clsx(
		"relative text-lg  pr-6 py-2",
		"border-l-4 border-gray-300 pl-8",
		"italic my-4 max-w-lg",
		props.class
	);
	const pClassName = clsx(
		"absolute top-0 right-2",
		"text-gray-300 font-serif text-4xl"
	);
	return (
		<blockquote className={className}>
			<p>{props.children}</p>
			<span className={pClassName}>"</span>
		</blockquote>
	);
}

function ListDisc(props: {
	children: React.ReactNode;
	class?: string;
}): JSX.Element {
	const className = clsx("my-5 list-disc list-inside", props.class);
	return <ul className={className}>{props.children}</ul>;
}

function ListNumbered(props: {
	children: React.ReactNode;
	class?: string;
}): JSX.Element {
	const className = clsx("my-5 list-decimal list-inside", props.class);
	return <ol className={className}>{props.children}</ol>;
}

function InlineCode(props: {
	children: React.ReactNode;
	class?: string;
}): JSX.Element {
	const className = clsx(props.class);
	return <code className={className}>{props.children}</code>;
}
function Section(props: {
	children: React.ReactNode;
	class?: string;
	id?: string;
	// eslint-disable-next-line @typescript-eslint/ban-types
	style?: object;
}): JSX.Element {
	const className = clsx(
		"w-11/12 max-w-3xl mx-auto my-10 text-left text-base leading-7 font-",
		props.class
	);
	return (
		<section style={props.style} id={props.id} className={className}>
			{props.children}
		</section>
	);
}

export {
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	Italic,
	Bold,
	ItalicBold,
	Strikethrough,
	Hr,
	Blockquote,
	ListDisc,
	ListNumbered,
	InlineCode,
	Section,
};
