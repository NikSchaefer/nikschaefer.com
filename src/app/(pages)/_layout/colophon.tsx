"use client";
import React, { useState } from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@components/ui/popover";

const TechLink = ({ href, children }: any) => (
	<a
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		className="text-white hover:text-primary transition-colors"
	>
		{children}
	</a>
);

const TechStack = () => {
	return (
		<p className="text-sm text-muted-foreground">
			Coded in{" "}
			<TechLink href="https://code.visualstudio.com">
				Visual Studio Code
			</TechLink>
			. Built with <TechLink href="https://nextjs.org">Next.js</TechLink>{" "}
			and <TechLink href="https://tailwindcss.com">Tailwind CSS</TechLink>
			, deployed with{" "}
			<TechLink href="https://vercel.com">Vercel</TechLink> &{" "}
			<TechLink href="https://github.com/NikSchaefer/nikschaefer.com">
				GitHub
			</TechLink>
			. All text is set in the{" "}
			<TechLink href="https://vercel.com/font">Geist typeface</TechLink>.
		</p>
	);
};

const ColophonPopover = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Popover open={isOpen} onOpenChange={setIsOpen}>
			<PopoverTrigger asChild>
				<a
					className="hover:text-muted-foreground/95 cursor-pointer"
					onMouseEnter={() => setIsOpen(true)}
					onMouseLeave={() => setIsOpen(false)}
				>
					Colophon
				</a>
			</PopoverTrigger>
			<PopoverContent
				className="text-sm card-bg w-screen max-w-[335px]"
				side="top"
				onMouseEnter={() => setIsOpen(true)}
				onMouseLeave={() => setIsOpen(false)}
			>
				<TechStack />
			</PopoverContent>
		</Popover>
	);
};

export default ColophonPopover;
