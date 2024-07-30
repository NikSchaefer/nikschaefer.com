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
	transpilePackages: ["next-mdx-remote"],
	images: {
		domains: [
			"bluemangosoftware.com",
			"noveltor.com",
			"arafa-tech-git-main-arafa-tech-foundation.vercel.app",
		],
	},
};
