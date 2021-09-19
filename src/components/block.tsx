import clsx from "clsx";
import { AiFillStar } from "react-icons/ai";
import { BsCode } from "react-icons/bs";

function Node(props: {
	data: {
		title: string;
		range: string;
		company: string;
		content: string[];
		tools: string[];
		url: string;
	};
}): JSX.Element {
	const { data } = props;
	return (
		<div className="box-border w-full max-w-4xl p-6 my-5 border border-opacity-50 md:p-4">
			<div className="flex flex-row justify-between xs:flex-col sm:my-2">
				<span className="flex flex-wrap items-center text-lg font-medium">
					<BsCode className="mr-2" size="28px" />
					{data.title}
				</span>
				<span>{data.range}</span>
			</div>
			<div className="my-2">
				<a className="slide" href={data.url}>
					{data.company}
				</a>
			</div>
			<h3 className="flex items-center text-base">
				<AiFillStar className="mr-2" size="20px" />{" "}
				{data.content.length} Achievements
			</h3>
			<ul className="p-0 m-0 my-3 text-sm leading-6">
				{data.content.map((value) => (
					<li key={value}>- {value}</li>
				))}
			</ul>
			<h3>Tools used/learned:</h3>
			<ul className="flex flex-wrap text-sm">
				{data.tools.map((value) => (
					<li
						className={clsx(
							"w-auto px-2 py-1 m-1 text-blue-500",
							"bg-blue-200 bg-opacity-25 rounded-sm",
							"dark:bg-opacity-10"
						)}
						key={value}
					>
						{value}
					</li>
				))}
			</ul>
		</div>
	);
}

export { Node };
