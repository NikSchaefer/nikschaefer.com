module.exports = {
	async headers() {
		return [
			{
				source: "/:path*{/}?",
				headers: [
					{
						key: "x-robots-tag",
						value: "index",
					},
				],
			},
		];
	},
};
