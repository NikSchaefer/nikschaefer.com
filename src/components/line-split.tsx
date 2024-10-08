export function LineSplitSVG(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="87"
			height="485"
			className="stroke-primary"
			fill="none"
			viewBox="0 0 87 485"
			{...props}
		>
			<path
				stroke="url(#paint0_linear_120_10499)"
				stroke-width="3"
				d="M2.00026 0L2.00014 33.5188C2.00005 61.0048 12.3542 87.4821 31.0001 107.676V107.676C49.6458 127.871 60 154.348 60 181.834V301.665C60 329.451 49.6629 356.243 31.0001 376.829V376.829C12.3373 397.414 2.00022 424.207 2.00016 451.993L2.00009 485"
			/>
			<g filter="url(#filter0_dddd_120_10499)">
				<circle
					r="6.438"
					fill="#000"
					className="circle"
					transform="matrix(1 0 0 -1 60.4381 242.562)"
				/>
				<circle
					r="4.938"
					stroke="#fff"
					stroke-width="3"
					transform="matrix(1 0 0 -1 60.4381 242.562)"
				/>
			</g>
			<defs>
				<linearGradient
					id="paint0_linear_120_10499"
					x1="24"
					x2="22.5"
					y1="0"
					y2="485"
					gradientUnits="userSpaceOnUse"
				>
					<stop
						offset=".052"
						stop-color="hsl(var(--primary))"
						stop-opacity="0"
					/>
					<stop offset=".226" stop-color="hsl(var(--primary))" />
					<stop offset=".472" stop-color="hsl(var(--primary))" />
					<stop offset=".522" stop-color="hsl(var(--primary))" />
					<stop offset=".561" stop-color="hsl(var(--primary))" />
					<stop offset=".792" stop-color="hsl(var(--primary))" />
					<stop
						offset=".956"
						stop-color="hsl(var(--primary))"
						stop-opacity="0"
					/>
				</linearGradient>
			</defs>
		</svg>
	);
}
