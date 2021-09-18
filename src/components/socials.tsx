import clsx from "clsx";
import { socials } from "config";
import { GoMarkGithub } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { RiLinkedinBoxFill } from "react-icons/ri";

function StyledSocial(props: {
	children: React.ReactNode;
	target?: string;
	href: string;
	rel?: string;
	ariaLabel?: string;
}) {
	return (
		<a
			className={clsx(
				"flex items-center px-2 py-1 rounded-md",
				"bg-gray-50 hover:bg-gray-100",
				"dark:bg-[#1f2535] dark:hover:bg-[#2b344b]"
			)}
			target={props.target}
			href={props.href}
			rel={props.rel}
			aria-label={props.ariaLabel}
		>
			{props.children}
		</a>
	);
}
export const sizeOfSVG = "30px";
export const colorOfSVG = "var(--accent)";

function Socials(): JSX.Element {
	return (
		<div className="flex my-6 space-x-3">
			<StyledSocial
				target="_blank"
				href={socials.github.link}
				ariaLabel={socials.github.name}
				rel="noreferrer"
			>
				<GoMarkGithub
					className="pr-2"
					size={sizeOfSVG}
					color={colorOfSVG}
				/>
				Github
			</StyledSocial>
			<StyledSocial
				target="_blank"
				rel="noreferrer"
				href={socials.linkedin.link}
				ariaLabel={socials.linkedin.name}
			>
				<RiLinkedinBoxFill
					className="pr-2"
					size={sizeOfSVG}
					color={colorOfSVG}
				/>
				LinkedIn
			</StyledSocial>
			<StyledSocial
				href={socials.email.link}
				ariaLabel={socials.email.name}
			>
				<HiOutlineMail
					className="pr-2"
					size={sizeOfSVG}
					color={colorOfSVG}
				/>
				Email
			</StyledSocial>
		</div>
	);
}

export { Socials };
