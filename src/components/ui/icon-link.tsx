import { cn } from "@lib/utils";
import Image from "next/image";

export function IconLink({
	title,
	link,
	img,
	disabled,
}: {
	title: string;
	img: string;
	link?: string;
	disabled?: boolean;
}) {
	return (
		<a
			href={link}
			target="_blank"
			className={cn(
				"bg-accent text-base text-accent-foreground no-underline relative inline-flex items-center pl-8 pr-2 rounded-md border border-primary/20",
				disabled && "cursor-not-allowed"
			)}
		>
			<Image
				width={16}
				height={16}
				alt={title}
				className="h-4 w-4 absolute left-2"
				src={img}
			/>
			{title}
		</a>
	);
}
