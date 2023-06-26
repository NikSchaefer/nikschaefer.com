import clsx from "clsx";
import { socials } from "../config";
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
				"flex items-center p-3 rounded-md",
				"bg-[#1f2535] hover:bg-[#2b344b]"
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
export const sizeOfSVG = "35px";
export const colorOfSVG = "#00a2ff";

function Socials(): JSX.Element {
	return (
		<div className="flex my-6 space-x-3">
			<StyledSocial
				target="_blank"
				href={socials.github.link}
				ariaLabel={socials.github.name}
				rel="noreferrer"
			>
				<GoMarkGithub size={sizeOfSVG} color={colorOfSVG} />
			</StyledSocial>
			<StyledSocial
				target="_blank"
				rel="noreferrer"
				href={socials.linkedin.link}
				ariaLabel={socials.linkedin.name}
			>
				<RiLinkedinBoxFill size={sizeOfSVG} color={colorOfSVG} />
			</StyledSocial>
			<StyledSocial
				href={socials.email.link}
				ariaLabel={socials.email.name}
			>
				<HiOutlineMail size={sizeOfSVG} color={colorOfSVG} />
			</StyledSocial>
		</div>
	);
}

export { Socials };
