import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@lib/utils";

interface ArrowLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	children: React.ReactNode;
}

const ArrowLink: React.FC<ArrowLinkProps> = ({
	href,
	children,
	className,
	...props
}) => {
	return (
		<Link href={href} passHref legacyBehavior>
			<a
				className={cn(
					"group inline-flex items-center border-primary underline gap-2 font-medium text-primary hover:text-primary-600 transition-colors",
					className
				)}
				{...props}
			>
				{children}
				<ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
			</a>
		</Link>
	);
};

export default ArrowLink;
