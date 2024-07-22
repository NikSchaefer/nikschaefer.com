import React from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@components/ui/popover";

const ColophonPopover = () => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<a className="hover:text-primary cursor-pointer">Colophon</a>
			</PopoverTrigger>
			<PopoverContent className="w-auto" side="top">
				<div className="space-y-2">
					<p className="text-sm">
						Next.js for code • React for UI • Tailwind for style •
						shadcn for components • Framer for motion
					</p>
				</div>
			</PopoverContent>
		</Popover>
	);
};

export default ColophonPopover;
