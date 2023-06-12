import jobs from "../../content/jobs.json";

export default function Jobs(): JSX.Element {
	return (
		<ol className="relative border-l border-gray-700">
			{jobs.map((job) => (
				<li className="mb-10 ml-10">
					<span className="absolute bg-secondary flex items-center justify-center w-12 h-12 rounded-full -left-6">
						<img
							className=" w-10 h-10 m-2 rounded-full bg-secondary-600"
							src={job.logo}
						/>
					</span>
					<h3 className="flex flex-col items-start sm:flex-row h4 mb-1 font-semibold text-white">
						<span>{job.title}</span>{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							href={job.url}
							className="sm:ml-2 underline-effect"
						>
							{" "}
							@ {job.company}
						</a>
					</h3>
					<time className="block mb-2 text-sm font-normal leading-none text-gray-500">
						{job.range} • {job.location}
					</time>
					{/* <ul className="ml-6 list-disc">
						{job.content.map((desc) => (
							<li className="mb-2">{desc}</li>
						))}
					</ul> */}
				</li>
			))}
		</ol>
	);
}
