/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Hr } from "./design";

// www.tailwind-kit.com/components/footer component

type FooterLinks = {
	title: string;
	link: string;
};

const Col1: FooterLinks[] = [
	{
		title: "Home",
		link: "/",
	},
	{
		title: "About",
		link: "/about",
	},
	{
		title: "Portfolio",
		link: "/portfolio",
	},
];

const Col2: FooterLinks[] = [
	{
		title: "GitHub",
		link: "https://github.com/NikSchaefer",
	},
	{
		title: "LinkedIn",
		link: "https://www.linkedin.com/in/nikschaefer/",
	},
	{
		title: "Email",
		link: "mailto:nikkschaefer@gmail.com",
	},
];

const Col3: FooterLinks[] = [
	{
		title: "Blog",
		link: "/blog",
	},
	{
		title: "Snippets",
		link: "/snippets",
	},
	{
		title: "Sitemap",
		link: "/sitemap",
	},
];

// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	return (
		<footer className="py-5 pt-4 pb-8 bg-white dark:bg-shark xl:pt-8">
			<Hr aria-orientation="horizontal" />
			<div className="max-w-screen-lg px-4 mx-auto text-gray-400 xl:max-w-screen-xl sm:px-6 md:px-8 dark:text-gray-300">
				<ul className="flex flex-wrap justify-center pb-8 text-lg font-light text-center">
					<li className="w-1/2 md:w-1/3 lg:w-1/3">
						<ul>
							{Col1.map((data) => (
								<li
									key={data.link}
									className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
								>
									<a href={data.link}>{data.title}</a>
								</li>
							))}
						</ul>
					</li>
					<li className="w-1/2 md:w-1/3 lg:w-1/3">
						<ul>
							{Col2.map((data) => (
								<li
									key={data.link}
									className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
								>
									<a href={data.link}>{data.title}</a>
								</li>
							))}
						</ul>
					</li>
					<li className="w-1/2 md:w-1/3 lg:w-1/3">
						<ul>
							{Col3.map((data) => (
								<li
									key={data.link}
									className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
								>
									<a href={data.link}>{data.title}</a>
								</li>
							))}
						</ul>
					</li>
				</ul>
				<div className="flex items-center justify-between max-w-xs pt-8 mx-auto border-t border-gray-200">
					<a href="#">
						<svg
							viewBox="0 0 512 512"
							xmlns="http://www.w3.org/2000/svg"
							className="w-4 h-4 text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
							fill="currentColor"
						>
							<path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
						</svg>
					</a>
					<a href="#">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							className="w-4 h-4 text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
							viewBox="0 0 1792 1792"
						>
							<path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z" />
						</svg>
					</a>
					<a href="#">
						<svg
							fill="currentColor"
							className="w-4 h-4 text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
							viewBox="0 0 1792 1792"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z" />
						</svg>
					</a>
				</div>
				<div className="flex items-center justify-center pt-10 font-light text-center sm:pt-12">
					© 2021 Nik Schaefer
				</div>
			</div>
		</footer>
	);
}
